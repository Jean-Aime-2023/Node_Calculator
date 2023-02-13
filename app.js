var express = require('express');
const https = require('https');
var app = express();
var path = require('path');
var fs=require('fs');

fs.readFile('Calc.js', function (err, data) {
  if (err) throw err;
  console.log(data)
})

fs.readFile('calcMulti.js', function (err, data) {
  if (err) throw err;
  console.log(data)
})


// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use( express.static( "public" ) );


// prepare server

app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery


// index page
app.get('/', function(req, res) {
    res.render('page/index');
    res.render('index.ejs');
    res.render('work.js./index.ejs')
});



// APIS


https.get('https://jsonplaceholder.typicode.com/posts', (response) => {
  let data = '';

  response.on('data', (chunk) => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (error) => {
  console.error(`Error: ${error.message}`);
});


app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

