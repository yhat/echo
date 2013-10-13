var express = require('express');
var app = express();

app.get('/*', function(request, response) {
  response.end(request.path.slice(1));
});
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on ' + port);
