#!bin/deno run --allow-run

async function shell(cmd) {
  await (await Deno.run({ cmd })).status();
}

console.log(
  `
This is a tool that lets you figure out which preference keys correspond to a
setting you want to programmatically change.

For example, let's say you want to find the \`defaults\` command for showing all
file extensions in Finder. To do this, you would:

1. Run this command, taking the first snapshot.
2. Go to Finder preferences and toggle the setting.
3. Press Enter here, taking the second snapshot.

A diff editor will open, showing which preferences changed during this time.

`
    .replace(/^\n|\n$/g, "")
    .replace(/\b\s\b/g, " ")
);

await shell(["mkdir", "-p", "tmp"]);

console.log();
prompt("Press Enter to take the first snapshot.");
console.log();
await shell([
  "bash",
  "-c",
  'defaults read "$@" > tmp/defaults-old.plist',
  "--",
  ...Deno.args,
]);

console.log("Snapshot taken.");
prompt("Press Enter to take the second snapshot.");
await shell([
  "bash",
  "-c",
  'defaults read "$@" > tmp/defaults-new.plist',
  "--",
  ...Deno.args,
]);
console.log();

console.log(
  `
Opening the Visual Studio Code diff viewer. If this don't work, you can use
any other diff tool to compare these two files:

    tmp/defaults-old.plist
    tmp/defaults-new.plist


`
    .replace(/^\n|\n$/g, "")
    .replace(/\b\s\b/g, " ")
);
await shell([
  "code",
  "--diff",
  "tmp/defaults-old.plist",
  "tmp/defaults-new.plist",
]);
