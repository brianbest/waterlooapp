const express = require('express');
const app = express();
const path = require('path')

app.use(express.static('public')) // Serves up static files

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

var port = process.env.PORT || 1337;

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

console.log("Server running at http://localhost:%d", port);

