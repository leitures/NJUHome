var express = require('express')
var cors = require('cors')
var http = require('http');
var qs = require('querystring');
var app = express()

app.use(cors())



app.get('/cc/data', function (req, res, next) {

  var rf=require("fs");
  var data=rf.readFileSync("f.txt","utf-8");
  var jsonData = JSON.parse(data);
  console.log(jsonData.roomA);
  console.log("READ FILE SYNC END");
  // res.json(data);
  res.json({jsonData})
})

app.get('/cc/data/:room_id', function (req, res, next) {
  var room_id = req.params.room_id;
  var rf=require("fs");
  var data=rf.readFileSync("f.txt","utf-8");
  var jsonData = JSON.parse(data);
  var result = jsonData[room_id];
  console.log(result);
  // res.json(data);
  res.json({result})
})

app.get('/cc/data/:room_id/history',function(req, res, next) {

})


app.listen(8889, function () {
  console.log('CORS-enabled web server listening on port 8889')
})
