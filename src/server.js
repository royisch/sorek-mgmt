import path from 'path';
import Express from 'express';

var app = Express();
var server;

app.use('/dist', Express.static(path.join(__dirname, '../dist')));
app.use('*/assets', Express.static(path.join(__dirname, '../src/assets')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
