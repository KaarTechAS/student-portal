var express = require('express');
const connection = require('../config/db_config');
var student_router = express.Router();
const mysql = require('mysql');

//Refernece:
//https://www.qat.com/simple-rest-service-node-js-express/

Service = function() {
    this.getRecords = function(startv, endv, cb){
        var query = "SELECT * FROM m_student LIMIT ?,?;";
        query = mysql.format(query,[
            startv,
            endv
        ]);
        /*
            {
                "index":,
                "nor":
            }
        */
        connection.query(query, (err, result)=>{
            if(err){
                console.log(err);
                cb(null, Promise.reject("Couldn't find data!"), "null");
            }
            else{
                cb(null, Promise.resolve(result), result);
            }
        });
    };
};

exports.Service = Service;
