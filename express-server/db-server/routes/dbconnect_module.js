var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'react_test',
    user: 'react',
    password: '1234',
});

router.post('/', (req, res) => {
    const mybatisMapper = require('mybatis-mapper');
    var param = req.body;

    mybatisMapper.createMapper(['./models/' + param.mapper + '.xml']);
    
    var format = {language: 'sql', indent: '    '};

    //namespace / namspace 아래 id
    var query = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format);
    
    connection.query(query, function (error, results) {
        if(error) {
            console.log('db error : ' + error);
        }
        console.log('db result : ' + results);
        string = JSON.stringify(results);
        var json = JSON.parse(string);
        res.send({json});
    });

})

module.exports = router;