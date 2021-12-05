var express = require('express');
const connection = require('../config/db_config');
var student_router = express.Router();
const mysql = require('mysql');
var service = require('../service/service');
// var service1 = new service();

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

//http://localhost:5000/student/
student_router.post("/",(req,res)=>{
    res.send(
        st+"<H1>"+"Students Router Works!<br>Welcome to the Sample Project portal!"+"</H1>"+et
    );
});

//http://localhost:5000/student/getRec
student_router.post("/getRec", service.getRecords);

module.exports = student_router;