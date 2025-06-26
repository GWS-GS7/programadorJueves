var express = require('express');
var router = express.Router();

var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render('admin/login', {
    //login.hbs
    layout: 'admin/layout',
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario; //gabriel
    var password = req.body.password; //1234

    console.log(req.body);

    var data = await usuariosModel.getUserByUsernameAndPassword(
      usuario,
      password
    );

    console.log(data);

    if (data != undefined) {
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true,
      });
    } // cierre else
  } catch (error) {
    console.log(error);
  }
}); // cierre el post

/*para destruir la seccion de variables*/
router.get('/logout', function(req,res,next){
  req.session.destroy(); //destruir

  res.render('admin/login',{
    layout: 'admin/layout'
  });
});


module.exports = router;
