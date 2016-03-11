import path from 'path';
import Express from 'express';
import passport from 'passport'
import drive from './modules/drive'

var app = Express();
var server;

var session = require('cookie-session');
var compression = require('compression');
var cookieParser = require('cookie-parser');

app.use(compression());
app.use(cookieParser());
app.use(session({
  name: 'sm-cookie',
  secret: 'sorekBestSecret#putaMadre',
  signed: true,
  cookie: {maxAge: 5 * 60 * 1000}
}));

app.use(passport.initialize());
app.use(passport.session());

drive.initGoogleAuth(app);

app.use('/dist', Express.static(path.join(__dirname, '../dist')));
app.use('*/assets', Express.static(path.join(__dirname, '../src/assets')));
app.use('*json', Express.static(path.join(__dirname, '../src')));
app.use('/favicon.ico', Express.static(path.join(__dirname, '../src/assets/img/favicon.ico')));

app.get('/', function(req, res) { res.sendFile(path.join(__dirname, '../index.html')); });

server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;

  console.log('Server is listening at %s', port);
});
