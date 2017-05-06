var http = require('http');
var qs = require('querystring');

// var data = {
//     a: 123,
//     time: new Date().getTime()};//这是需要提交的数据
//
//
// var content = qs.stringify(data);

var options = {
    hostname: 'api.yeelink.net',
    port: 80,
    path: '/v1.0/devices',
    headers: {
          'U-ApiKey': '6441e70eefc58fea0b1e938abf946a28'
        },
    method: 'GET'
};

var req = http.request(options, function (res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();
