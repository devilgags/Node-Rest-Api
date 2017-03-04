
// var mongoose=require("mongoose");
var apiConfig = require("./app");

function start() {
  console.log("starting the server using startup function");
  var port = process.env.PORT || 9001;
  apiConfig.listen(port,function(){
    console.log("Listening on localhost:"+port);
  });

}

start();
