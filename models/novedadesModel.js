var pool = require("./bd");
var md5 = require("md5");

async function getNovedades() {
  var query = "SELECT * FROM novedades";
  var rows = await pool.query(query);
  return rows;
}

async function deleteNovedadesById(id) {
  var query = "delete from novedades where id = ?";
  var rows = await pool.query(query, [id]);
  return rows;
}

async function insertNovedad(obj) {
  try {
    var query = "insert into novedades set ? ";
    var rows = await pool.query(query, [obj]);
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  } //cierra catch
} //cierra insert

/*trae 1una sola novedad*/
async function getNovedadesById(id) {
  var query = "select * from novedades where id =?";
  var rows = await pool.query(query, [id]);
  return rows[0];
}

//modificar la novedad por id

async function modificarNovedadById(obj, id) {
  try {
    var query = "update novedades set ? where id=?";
    var rows = await pool.query(query, [obj, id]);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getNovedades,
  deleteNovedadesById,
  insertNovedad,
  getNovedadesById,
  modificarNovedadById,
};
