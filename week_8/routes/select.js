import express from "express";
import { selectSql } from "../database/sql"; //selectSql모듈 사용

const router = express.Router();

router.get('/', async function(req, res){ // '/' 실제주소는 '/select'
    const employee = await selectSql.getEmployee(); 
    const department = await selectSql.getDepartment(); //데이터 저장

    res.render('select', { // select.hbs에 데이터 넘겨줌
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    }); 
});

module.exports = router;