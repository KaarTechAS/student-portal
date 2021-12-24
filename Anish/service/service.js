var express = require('express');
const connection = require('../config/db_config');
// const pool = require("../config/db_config").pool;
var student_router = express.Router();
const mysql = require('mysql');

//Refernece:
//https://www.qat.com/simple-rest-service-node-js-express/

getRecMysql = async function(startv, endv, cb) {
    try{
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
        // console.log('Success in getRecMysql fun and query is '+query);
        result = await connection.pool(query);
        // console.log(result);
        return cb(null, Promise.resolve(result), result);
        // connection.query(query, (err, result)=>{
        //     if(err){
        //         console.log(err);
        //         cb(null, Promise.reject("Couldn't find data!"), "null");
        //     }
        //     else{
        //         cb(null, Promise.resolve(result), result);
        //     }
        // });
    }
    catch(error){
        console.log(error);
    }
};

getTrees=async function(result1,cb){
    const data = [
        { id: 1, parentId: null, value: 'Gender' },
        { id: 11, parentId: 1, value: 'Male' },
        { id: 12, parentId: 1, value: 'Female' },
        // { id: 'MYSQLDATA_M', parentId: 'Male'},
        // { id: 'MYSQLDATA_F', parentId: 'Female'},
        // { id: 76, parentId: 80 },
        // { id: 63, parentId: 62 },
        // { id: 80, parentId: 86 },
        // { id: 87, parentId: 86 },
        // { id: 62, parentId: 74 },
        // { id: 86, parentId: 74 },
    ];
    let i=0;
    result1.forEach((element)=>{
        if(element.gender=='male')
            data.push({ id: ("MYSQL"+i), parentId: 11, value: element });
        else
            data.push({ id: ("MYSQL"+i), parentId: 12, value: element });
        i++;
    });

    const idMapping = data.reduce((acc, el, i) => {
        acc[el.id] = i;
        return acc;
    }, {});

    // console.log(idMapping);
    // console.log(data);

    let root;
    data.forEach((el) => {
        // Handle the root element
        if (el.parentId === null) {
        root = el;
        return;
        }
        // Use our mapping to locate the parent element in our data array
        const parentEl = data[idMapping[el.parentId]];
        // Add our current el to its parent's `children` array
        parentEl.children = [...(parentEl.children || []), el];
    });

    // console.log(root);
    return cb(null, Promise.resolve(root), root);
    // res.send(root);
};

module.exports.getRecords = async (req,res)=>{
    try{
        let startv = parseInt(req.body.index);
        let endv = parseInt(req.body.nor);
        // console.log('Success in getRecords fun');
        // connection.checkConnection();
        await getRecMysql(startv, endv, function(error, result, resstr) {
            result.then(res.send(resstr));
        });
    }
    catch(error){
        console.log(error);
    }
}

module.exports.sample = async (req,res)=>{
    try{
        let startv = parseInt(req.body.index);
        let endv = parseInt(req.body.nor);
        // console.log('Success in getRecords fun');
        // connection.checkConnection();
        let result1;
        let result2;
        let promises = [];
        promises.push(
            await getRecMysql(startv, endv, function(error, result, resstr) {
                result.then(result1=resstr);
            })
        );
        promises.push(
            await getTrees(result1, (error, pres, res)=>{
                pres.then(result2=res);
            })
        );
        Promise.all(promises).then(res.send(result2));
        // await getRecMysql(startv, endv, function(error, result, resstr) {
        //     result.then(result1=resstr);
        // });

        // await getTrees(result1, (error, pres, res)=>{
        //     pres.then(result2=res);
        // });
        // res.send(result2);
            // const data = [
            //     { id: 1, parentId: null, value: 'Gender' },
            //     { id: 11, parentId: 1, value: 'Male' },
            //     { id: 12, parentId: 1, value: 'Female' },
            //     // { id: 'MYSQLDATA_M', parentId: 'Male'},
            //     // { id: 'MYSQLDATA_F', parentId: 'Female'},
            //     // { id: 76, parentId: 80 },
            //     // { id: 63, parentId: 62 },
            //     // { id: 80, parentId: 86 },
            //     // { id: 87, parentId: 86 },
            //     // { id: 62, parentId: 74 },
            //     // { id: 86, parentId: 74 },
            // ];
            // let i=0;
            // result1.forEach((element)=>{
            //     if(element.gender=='male')
            //         data.push({ id: ("MYSQL"+i), parentId: 11, value: element });
            //     else
            //         data.push({ id: ("MYSQL"+i), parentId: 12, value: element });
            //     i++;
            // });
    
            // const idMapping = data.reduce((acc, el, i) => {
            //     acc[el.id] = i;
            //     return acc;
            // }, {});
    
            // console.log(idMapping);
            // console.log(data);
    
            // let root;
            // data.forEach((el) => {
            //     // Handle the root element
            //     if (el.parentId === null) {
            //     root = el;
            //     return;
            //     }
            //     // Use our mapping to locate the parent element in our data array
            //     const parentEl = data[idMapping[el.parentId]];
            //     // Add our current el to its parent's `children` array
            //     parentEl.children = [...(parentEl.children || []), el];
            // });
    
            // console.log(root);
            // res.send(root);
    }
    catch(error){
        console.log(error);
    }
}