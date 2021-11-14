import express from "express";
import { insertSql } from "../database/sql"; //insertSql모듈 가져옴

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
}); //home.hbs를 찾아서 웹브라우저에 돌려줌


router.post('/', (req, res) => { //입력한 값들 삽입 누르면 처리
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length; //넘어온 데이터 길이 저장

    if(var_lenth > 4){
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data);
    } else {
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data);
    }

    res.redirect('/'); //입력하고 나서 다시 홈화면으로
})

module.exports = router;