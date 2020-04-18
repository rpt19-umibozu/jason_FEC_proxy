const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fullPath = '/home/ubuntu/jason_FEC_proxy/public/index.html';
const expressStaticGzip = require("express-static-gzip");
const path = require('path');


app.use('/', expressStaticGzip(path.join(__dirname + '/../public'), {
  enableBrotli: true,
  customCompressions: [{
      encodingName: 'deflate',
      fileExtension: 'zz'
  }],
  orderPreference: ['br']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname + '/../public'));
app.use('/:id', express.static(__dirname + '/../public/index.html'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});