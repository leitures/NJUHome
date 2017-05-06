var express = require('express')
var cors = require('cors')
var http = require('http');
var qs = require('querystring');
var app = express()


app.use(cors())


app.post('/device', function(req, res) {
    console.log(req.body.device_id);
    res.send('Post Over');
});

//
// app.get('/devices', function (req, res, next) {
//
//   var options = {
//       hostname: 'api.yeelink.net',
//       port: 80,
//       path: '/v1.0/devices',
//       headers: {
//             'U-ApiKey': '6441e70eefc58fea0b1e938abf946a28'
//           },
//       method: 'GET'
//   };
//   var yeereq = http.request(options, function (yeeres) {
//       console.log('STATUS: ' + yeeres.statusCode);
//       console.log('HEADERS: ' + JSON.stringify(yeeres.headers));
//       yeeres.setEncoding('utf8');
//       yeeres.on('data', function (chunk) {
//           res.json({chunk});
//           console.log('BODY: ' + chunk);
//       });
//   });
//
//   yeereq.on('error', function (e) {
//       console.log('problem with request: ' + e.message);
//   });
//
//   yeereq.end();
//   //res.json({answer})
// })


app.listen(8887, function () {
  console.log('CORS-enabled web server listening on port 8887')
})
