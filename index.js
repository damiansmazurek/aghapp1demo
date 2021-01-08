var express = require('express');

var app = express();

app.get('/', (req,res) => {
    res.send('app 1');
});

const port = 80;
app.listen(port, () => {
  console.log(' API listening on port', port);
});