#!bin/deno run --allow-net --allow-read --allow-run

await(await Deno.run({ cmd: ["clear"] })).status();

async function getFrontmostAppId() {
  let process = Deno.run({
    cmd: [
      "osascript",
      "-e",
      'tell application id "com.apple.SystemEvents" to get bundle identifier of (first application process whose frontmost is true)',
    ],
    stdout: "piped",
  });
  const output = await process.output();
  process.close();
  return new TextDecoder().decode(output).trim();
}
let terminalAppId = await getFrontmostAppId();

// Start listening on port 27370 of localhost.
const server = Deno.listen({ port: 27370 });
console.log(`App started. View the panel at: http://localhost:27370/`);
console.log();

let currentlyRunningProcesses = [];

// Connections to the server will be yielded up as an async iterable.
for await (const conn of server) {
  // In order to not be blocking, we need to handle each connection individually
  // without awaiting the function
  serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
  // This "upgrades" a network connection into an HTTP connection.
  const httpConn = Deno.serveHttp(conn);

  // Each request sent over the HTTP connection will be yielded as an async
  // iterator from the HTTP connection.
  for await (const event of httpConn) {
    // The event's `.respondWith()` method is how we send the response
    // back to the client.
    handleRequest(event.request).then((response) =>
      event.respondWith(response)
    );
  }
}

async function handleRequest(request): Response {
  try {
    let requestPath = new URL(request.url).pathname;

    if (request.method === "GET" && requestPath === "/") {
      let html = await Deno.readTextFile("panel/app.html");
      return new Response(html, {
        headers: { "content-type": "html" },
      });
    }

    if (request.method === "GET" && requestPath === "/content.md") {
      let html = await Deno.readTextFile("panel/content.md");
      return new Response(html, {
        headers: { "content-type": "text/markdown" },
      });
    }

    let jsonResponse = undefined;

    let text = await request.text();
    let json = JSON.parse(text);
    if (json.action === "RunCommandV1") {
      let cmd = json.shell
        ? [
            "/bin/sh",
            "-c",
            [
              //
              `open_terminal() { open -b ${JSON.stringify(terminalAppId)}; }`,
              "set -ev",
              json.command,
            ].join("\n"),
          ]
        : json.command;

      if (false) {
        if (!json.command.match(/^open /)) {
          Deno.run({ cmd: ["open", "-b", terminalAppId] });
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      }

      // let [firstLine, ...restLines] = json.command.split("\n");
      // console.log(
      //   ["$ " + firstLine, ...restLines.map((line) => "  " + line)].join("\n")
      // );

      let process = Deno.run({ cmd });
      currentlyRunningProcesses.push(process);
      let status = await process.status();

      let i = currentlyRunningProcesses.indexOf(process);
      currentlyRunningProcesses.splice(i, 1);

      if (status.code === 0) {
        console.log("Command completed successfully.");
      } else {
        console.log("Command completed with errors. Code: " + status.code);
      }
      console.log();
      jsonResponse = {
        action: json.action,
        code: status.code,
      };
    } else {
      jsonResponse = {
        action: "unknown",
      };
    }

    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
    });
  } catch (e) {
    console.error(e);
    return new Response( //
      { error: true },
      { status: 500 }
    );
  }
}
