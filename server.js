var http = require("http");

var port1 = 7000;
var port2 = 7500;

function nicehandleRequest(request, response){
  response.end("You are wonderful");
}
function meanhandleRequest(request, response){
  response.end("You are an ass");
}

var server1 = http.createServer(nicehandleRequest);
var server2 = http.createServer(meanhandleRequest);

server1.listen(port1, function(){
  console.log("Server is listening on http://localhost:%s", port1);
});
server2.listen(port2, function(){
  console.log("Server is listening on http://localhost:%s", port2);
});
