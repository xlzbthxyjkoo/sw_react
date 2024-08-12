var express = require('express');

var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())

var dbconnect_module = require('./dbconnect_module');

router.post('/', (req, res, next) => {
    //type 값 꺼내오기
    let type = req.query.type;
    if(type == 'list') {
        // 전체 목록 조회
        try {
            req.body.mapper = 'swToolsMapper';
            req.body.crud = 'select';
            req.body.mapper_id = 'selectSwToolList';
            //next는 dbconnect_mode를 실행하게 됨
            next();
        }catch (error) {
            console.log('Module > select dbconnect error : ' + error);
        }
    }
    else if(type == 'save') {
        //등록
        try {
            req.body.mapper = 'swToolsMapper';
            req.body.crud = 'insert';
            req.body.mapper_id = 'insertSwToolsInfo';
            next();
        }catch(error) {
            console.log('Module > insert dbconnect error : ' + error);
        }
    }
}, dbconnect_module);

module.exports = router;