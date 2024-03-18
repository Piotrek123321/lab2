const http = require("http");
const handler = require("./routes/index");

const PORT = 3000;

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(handler.handleHome());
    res.end();
    return;
  }

  if (url === "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(handler.handleStudent());
    res.end();
    return;
  }

  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("<h1>404 Not Found</h1>");
});

server.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});