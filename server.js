var http = require("http");
//assigning ports
var port1 = 7000;
var port2 = 7500;
//creating nice things
var nice = ["People like you", "You are a good person", "People care about you"];
var evil = ["I hate you", "your family hates you", "the world hates you"];
//creating randomization of compliments or burns
var getRandomItem = function(count){
  return Math.floor(Math.random() * count);
}
//creating handlers for both servers
function nicehandleRequest(request, response){
  var num = getRandomItem();
  response.end(nice[num]);
}
function meanhandleRequest(request, response){
  var num = getRandomItem();
  response.end(evil[num]);
}
//starting servers
var server1 = http.createServer(nicehandleRequest);
var server2 = http.createServer(meanhandleRequest);
//creating listeners on both servers
server1.listen(port1, function(){
  console.log("Server is listening on http://localhost:%s", port1);
});
server2.listen(port2, function(){
  console.log("Server is listening on http://localhost:%s", port2);
});
