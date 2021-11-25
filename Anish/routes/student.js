var express = require('express');
const connection = require('../config/db_config');
var student_router = express.Router();
const mysql = require('mysql');

var st="<!DOCTYPE html><HTML><HEAD></HEAD><BODY>";
var et="</BODY></HTML>";

//http://localhost:5000/student/
student_router.get("/",(req,res)=>{
    res.send(
        st+"<H1>"+"Students Router Works!<br>Welcome to the Sample Project portal!"+"</H1>"+et
    );
});

//http://localhost:5000/student/getRec
student_router.get("/getRec",(req,res)=>{
    console.log("Hit Success");
    let startv = parseInt(req.body.index);
    // let startv = 182;
    // let endv = parseInt(req.body.nor);
    var query = "SELECT * FROM student LIMIT ?,10;";
    query = mysql.format(query,[
        startv
        // endv
    ]);
    /*
        {
            "start":
        }
    */
    connection.query(query, (err, result)=>{
        if(err){
            console.log(err);
            res.send("Couldn't find data!");
        }
        else{
            // console.log(result);
            // result.forEach(element => {
            //     let str="";
            //     str+="Gender: ";
            //     str+=element.gender;
            //     str+="\nRace: ";
            //     str+=element.race;
            //     str+="\nLOE: ";
            //     str+=element.loe;
            //     str+="\nLunch: ";
            //     str+=element.lunch;
            //     str+="\nTPC: ";
            //     str+=element.tpc;
            //     str+="\nMaths: ";
            //     str+=element.maths;
            //     str+="\nRS: ";
            //     str+=element.rs;
            //     str+="\nWS: ";
            //     str+=element.ws;
            //     console.log(str+"\n");
            // });
            res.send(result);
        }
    });
    // res.send(
    //     st+"<H1>"+"Students Router Works!<br>Welcome to the Sample Project portal!"+"</H1>"+et
    // );
});

module.exports = student_router;