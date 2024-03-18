const http = require("http");
const renderHome = require("./views/home");
const renderStudent = require("./views/student");
const PORT = 3000;

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(renderHome());
    res.end();
  }

  if (url === "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(renderStudent());
    res.end();
  }
});

server.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});