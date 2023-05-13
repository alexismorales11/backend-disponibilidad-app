const connection = require('../../database/database');
class ProyectosServices {
  constructor() {}

  async getProyecto() {
    try {
      return new Promise((resolve, reject) => {
        const query = "SELECT * FROM coordenadas";
        connection.query(query, (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        });
      });

    } catch (error) {
      console.error(error)
    }
  }
  
}

module.exports = ProyectosServices;
