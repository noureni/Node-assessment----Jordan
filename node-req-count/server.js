var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {

    //increment the globalCounter if POST is create

    if(globalCounter[property]){
      globalCounter[property]++;
      response.end();
      //Set globalCounter equal to 1 if there is not POST request
    }else{
      globalCounter[property] = 1;
      response.end();
    }
    console.log(globalCounter[property])
  } else if (request.method === 'GET') {

     // if GET request is send
    if(globalCounter[property]){
        //return response using JSON
      response.end(JSON.stringify(globalCounter[property]))
    }
  } else {
       //if not return ERROR message
    response.end("ERROR");
  }
});

// Do not edit this line
module.exports = server;
