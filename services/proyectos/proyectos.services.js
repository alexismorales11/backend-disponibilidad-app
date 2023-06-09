const connection = require("../../database/database");
class ProyectosServices {
  constructor() {}

  async getProyecto() {
    try {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM PROYECTOS";
        connection.query(query, (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getProyectoId(id) {
    try {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM PROYECTOS WHERE id_proyecto = ${id}`;
        connection.query(query, (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async createProyecto(body) {
    try {
      const query = `
        INSERT INTO 
        PROYECTOS (nombre_proyecto, descripcion_proyecto, fecha_creacion, id_usuario) 
        VALUES ('${body.nombre_proyecto}','${body.descripcion_proyecto}','${body.fecha_creacion}',${body.id_usuario});
      `;
      connection.query(query);

      return body;
    } catch (error) {
      console.error(error);
    }
  }

  async updateProyecto(id, body) {
    try {
      const query = `
        UPDATE PROYECTOS 
        SET NOMBRE_PROYECTO = '${body.nombre_proyecto}', DESCRIPCION_PROYECTO = '${body.descripcion_proyecto}' 
        WHERE id_proyecto = ${id};
      `;
      connection.query(query);

      return new Promise((resolve, reject) => {
        const queryNewProyect = `SELECT * FROM PROYECTOS WHERE id_proyecto = ${id}`;
        connection.query(queryNewProyect, (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProyecto(id) {
    try {
      return new Promise((resolve, reject) => {
        const queryValidate = `SELECT * FROM PROYECTOS WHERE id_proyecto = ${id}`;
        connection.query(queryValidate, (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          const query = `
            DELETE FROM PROYECTOS WHERE id_proyecto = ${id};
          `;
          connection.query(query);
          resolve(id);
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ProyectosServices;
