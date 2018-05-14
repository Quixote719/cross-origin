var express = require('express');
var app = express();
var app2 = express();
var app3 = express();

app.use(express.static('./cors'));
app2.use(express.static('./dif_origin'));
app3.use(express.static('./jsonp'));

app.all('*', function(req, res, next){
  // res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  // res.header("X-Powered-By", ' 3.2.1')
  // res.header("Content-Type", "application/json;charset=utf-8")
  next();
});

// app3.all('*', function(req, res, next){
//   next();
// });



//监听端口为3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://', host, port);
});



var server2 = app2.listen(2018, function(){
   var host = server2.address().address;
   var port = server2.address().port;
   console.log('Example app2 listening at http: //', host, port);
});

var server3 = app3.listen(4000, function(){
   var host = server2.address().address;
   var port = server2.address().port;
   console.log('Example app3 listening at http: //', host, port);
});


console.log('server started');

// respond with "hello world" when a GET request is made to the homepage
app.get('/randomrequest', function(req, res) {
  res.send('Get up');
  console.log('send get request successful');
});

app.put('/randomrequest', function(req, res) {
  res.send('Put down');
  console.log('send put request successful');
});

// via jsonp

app3.get('/jsonprequest', function(req, res) {

      var obj = {
        "jsonpGet": 'YES'
      }
      // 产生一个随机的金额模拟一下可用余额
      var money = Math.floor(Math.random()*10) + 5;

    // 如果请求中有参数 ‘types=ACCOUNT’
    if('types' in  req.query && req.query.types === 'ACCOUNT'){
        obj = {
            "ACCOUNT": {
                "avaiable": money,
                "freezeAmount": 0
            },
            "success": true
        };
    }
    res.jsonp(obj);

});

app3.put('/jsonprequest', function(req, res) {

  var obj = {
    "jsonpPut": 'YES'
  }
  // 产生一个随机的金额模拟一下可用余额
  var money = Math.floor(Math.random()*10) + 5;

  // 如果请求中有参数 ‘types=ACCOUNT’
  if('types' in  req.query && req.query.types === 'ACCOUNT'){
      obj = {
          "ACCOUNT": {
              "avaiable": money,
              "freezeAmount": 0
          },
          "success": true
      };
  }
  res.jsonp(obj);

});
