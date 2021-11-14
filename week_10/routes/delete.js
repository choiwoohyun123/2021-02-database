import express from "express";
import { selectSql, deleteSql } from "../database/sql"; // selct,delete모듈 불러옴

const router = express.Router();



// 기존의 입력 값 불러오기
//localhost:3000/delete
router.get('/', async (req, res) => {
    const student = await selectSql.getStudent();
    res.render('delete', {
        title: "삭제 가능",
        student
    })
});


// 삭제를 눌렀을 때 delete라는 쿼리를 데이터베이스에 넘겨줌
// 조회 페이지라 하면은 http://localhost:3000/select이다.
router.post('/', async (req, res) => {
    console.log('delete router:', req.body.delBtn);
    const data = { // Number값 저장
        Number: req.body.delBtn,// 버튼에 대한 정보를 가져옴
    }

    await deleteSql.deleteStudent(data); // parameter에서 넘겨 받음

    res.redirect('/delete');
});

module.exports = router;