var express = require("express");
var router = express.Router();

var nodemailer = require("nodemailer");
var novedadesModel = require("../models/novedadesModel");

/* GET home page. */
router.get("/", async function (req, res, next) {
   var novedades = await novedadesModel.getNovedades();
   //var novedades = novedades.splice(0,5);
  res.render("index",{
  novedades
  });
});

router.post("/", async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: "martinsapeeeee@gmail.com",
    subject: "Contacto desde la web",
    html:
      nombre +
      " " +
      apellido +
      "se contacto a travez desde la web y quiere enviarte msj para + info a este mail " +
      email +
      ".<br> ademas , hizo el comentario: " +
      mensaje +
      ".<br> su tel es:" +
      tel,
  }; //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }); //CIERRA TRANSPORTER

  var info = await transporter.sendMail(obj);

  var novedades = await novedadesModel.getNovedades();

  res.render("index", {
    message: "Mensaje enviado correctamente",
    novedades,
  });
}); //cierra peticion post

module.exports = router;
