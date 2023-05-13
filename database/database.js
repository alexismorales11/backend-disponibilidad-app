const mysql = require("mysql");
var config = {
  host: "127.0.0.1",
  user: "root",
  database: "disponibildadesdpb",
  password: "toor",
};
const connection = mysql.createConnection(config);
connection.connect();
module.exports = connection;
