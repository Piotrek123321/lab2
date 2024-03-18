const http = require("http");
const fs = require("fs");
const handler = require("./routes/index");

const PORT = 3000;

const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(handler.handleHome());
    res.end();
    return;
  } else if (url === "/student" && method === "POST") {
    const body = [];
    req.on("data", function (chunk) {
      body.push(chunk);
    });

    req.on("end", function () {
      const parsedBody = Buffer.concat(body).toString();
      const data = parsedBody.replaceAll("=", ": ").split("&");
      res.write(handler.handleStudent(data));
      const code = data[4].replaceAll("Code: ", "");
      fs.writeFileSync(`${code}.txt`, parsedBody);
      res.end();
      return;
    });
  } else if (url === "/student" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(handler.handleStudent());
    res.end();
    return;
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 Not Found</h1>");
    res.end();
    return;
  }
});

server.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});