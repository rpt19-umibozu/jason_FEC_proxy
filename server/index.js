const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fullPath = '/Users/jasonjacob/Desktop/seniorProjects/rpt19-front-end-capstone/jason_FEC_proxy/client/dist/index.html';


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//reload page with product identifier in url
app.get('/:id', (req, res) => {
  res.sendFile(fullPath);
});