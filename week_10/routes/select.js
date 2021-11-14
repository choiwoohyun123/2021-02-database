import express from "express";
import { selectSql } from "../database/sql"; //selectSql모듈 사용

const router = express.Router();

router.get('/', async function(req, res){ // '/' 실제주소는 '/select'
    const student = await selectSql.getStudent(); //데이터 저장

    res.render('select', { // select.hbs에 데이터 넘겨줌
        title: '이름/학번',
        student
    }); 
});

module.exports = router;