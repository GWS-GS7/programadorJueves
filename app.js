
////////////////////
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
//m4u4
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
//
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//
const session = require('express-session');
const { title } = require('process');

app.use(session({
  secret: 'inserte clave aqui',
  resave: false,
  saveUninitialized: true
}));

//----------------------------------m3u4
//m4u4
app.use('/admin/login', loginRouter);


secured = async(req, res ,next) => {
  try{
    console.log(req.session.id_usuario);
    if (req.session.id_usuario){
      next();
    }else {
      res.redirect('/admin/login');
    }
  }catch(error){
    console.log(error);
  }
}


app.use('/admin/novedades',secured, adminRouter);
//m4u4


//m3u4 MIGRAR A OTRA RUTA ASI CREA UNA PAGINA DE LOGUEO PARA LA PAGINA 
app.get('/index', function(req, res) { //ejemplo
  if (req.session.nombre){
    res.send('hola'+ req.session.nombre);
  } else {
    res.send('Hola usuario desconocido.');
  }
});

//app.get('/', function(req,res){
//  var conocido= Boolean(req.session.nombre);

//  res.render('index',{
//    title: 'Sesiones en Express.js',
 //   conocido: conocido,
 //   nombre: req.session.nombre
  //});

//});

app.post('/ingresar', function(req, res){
  if(req.body.nombre){
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');
});

app.get('/salir', function(req, res){
  req.session.destroy();
  res.redirect('/');
});

app.use(function(req, res,next){

  if(!req.session.vistas){
    req.session.vistas = {};
  }

  if (!req.session.vistas[req.originalUrl]){
    req.session.vistas[req.originalUrl]++;
  }
  next();
});

app.get('/pagina1', function(req, res){
  res.render('pagina', {
    nombre: 'pagina1',
    vistas: req.session.vistas[req.originalUrl]
  });
});
//m3u4-------------------------------------

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
