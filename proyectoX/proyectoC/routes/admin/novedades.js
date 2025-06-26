var express = require("express");
var router = express.Router();

var usuariosModel = require('./../../models/usuariosModel');
var novedadesModel = require('../../models/novedadesModel');

/*LISTAR LAS NOVEDADES*/
/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{ //novedades.hbs
    layout: 'admin/layout',
    usuario: req.session.nombre,novedades//g
  });
});

/* ELIMINAR LAS NOVEDADES*/
router.get('/eliminar/:id', async (req, res , next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
});//cierra get Eliminar

//cuando reciba /agregar >me va a mostrar el formulario de agregar.hbs
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar',{ //agregar.hbs
    layout: 'admin/layout'
  });
});

//apretar el boton el boton de guardar el formulario de agregar
router.post('/agregar', async (req, res, next) =>{
  try{

    console.log(req.body) //titulo, sub , cuerpo

    if (req.body.titulo !="" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
    }else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, 
        message: 'Todos los campos son requeridos'
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true,
     message: 'No se cargo la novedad'
    });
  }
});

/*Traer el diseño del formulario de modificar > info de la novedad por id*/
router.get('/modificar/:id' , async (req, res, next)=> {
  var id= req.params.id;

  var novedad = await novedadesModel.getNovedadesById(id);

  res.render('admin/modificar', { //modificar.hbs
    layout: 'admin/layout',
    novedad
  });
}); //cierro get >modi

/*/ACTUALIZAR LA NOVEDAD*/
router.post('/modificar', async (req, res, next) => {
  try{
    let obj= {
      titulo: req.body.titulo,
      subtitulo: req. body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modifico la novedad'
    })
  }
})

module.exports = router;