const connection = require("../../database/database");
class CoordenadasServices {
  constructor() {}

  async getCoordenadas() {
    try {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM COORDENADAS";
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

  async getCoordenadaId(id) {
    try {
      return new Promise((resolve, reject) => {
        const query = `SELECT * FROM COORDENADAS WHERE id_coordenadas = ${id}`;
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

  async createCoordenada(body) {
    try {
      const query = `
        INSERT INTO 
        COORDENADAS (secuencia_coordenadas, id_inmuebles) 
        VALUES ('${body.secuencia_coordenadas}',${body.id_inmuebles});
      `;
      -connection.query(query);

      return body;
    } catch (error) {
      console.error(error);
    }
  }

  async updateCoordenada(id, body) {
    try {
      const query = `
        UPDATE COORDENADAS 
        SET secuencia_coordenadas = '${body.secuencia_coordenadas}'
        WHERE id_coordenadas = ${id};
      `;
      connection.query(query);

      return new Promise((resolve, reject) => {
        const queryNewProyect = `SELECT * FROM COORDENADAS WHERE id_coordenadas = ${id}`;
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

  async deleteCoordenada(id) {
    try {
      return new Promise((resolve, reject) => {
        const queryValidate = `SELECT * FROM COORDENADAS WHERE id_coordenadas = ${id}`;
        connection.query(queryValidate, (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          const query = `
            DELETE FROM COORDENADAS WHERE id_coordenadas = ${id};
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

module.exports = CoordenadasServices;
