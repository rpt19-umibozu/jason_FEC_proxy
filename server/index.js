const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fullPath = '/Users/jasonjacob/Desktop/seniorProjects/rpt19-front-end-capstone/jason_FEC_proxy/public/index.html';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.static(__dirname + '/../public'));

app.get('/:id', (req, res) => {
  res.sendFile(fullPath);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});