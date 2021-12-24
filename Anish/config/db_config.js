const mysql = require("mysql");
// const config = require("config");
const fs = require("fs");
// const logger = require("../log/logger").logger;
const util = require("util");
let dbConfig = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'studentdb_kaar'
  };

const pool = mysql.createPool(dbConfig);
// console.log('Success in db_config and dbConfig is '+dbConfig);
// logger.info('Connected');
console.log('Connected');

module.exports.checkConnection = () => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          console.log(err);
          // logger.info(err);
          if (err.code === "PROTOCOL_CONNECTION_LOST") {
            reject("Database connection was closed.");
          }
          if (err.code === "ER_CON_COUNT_ERROR") {
            reject("Database has too many connections.");
          }
          if (err.code === "ECONNREFUSED") {
            reject("Database connection was refused.");
          }
          reject(err);
        }
        if (connection) {
          connection.release();
          // console.log('Connected');
          resolve();
        }
        return;
      });
    });
  };

module.exports.pool = util.promisify(pool.query).bind(pool);




/*var mysql = require('mysql');
// const logger = require("./logger").logger;
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'studentdb_kaar'
});

connection.connect(function(err){
    if(err)
        console.log(err);
    else 
        console.log('connected');

});

const pool = mysql.createPool(dbConfig);

module.exports=connection;

module.exports.pool = util.promisify(pool.query).bind(pool);
*/