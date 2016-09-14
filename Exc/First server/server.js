var http = require("http")

var hostname = "127.0.0.1"
var port = "3000"

var server = http.createServer((req, res) => {
  res.end("Hello from my node server")
})


server.listen(port, hostname, () => {
  console.log( "Server has started!" )
})