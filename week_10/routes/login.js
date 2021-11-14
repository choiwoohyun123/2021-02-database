import express from "express";
import { selectSql } from "../database/sql"; //selectSql모듈 가져옴

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
}); //login.hbs를 찾아서 웹브라우저에 돌려줌


router.post('/', async (req, res) => { //입력한 값들 삽입 누르면 처리
    const vars = req.body;
    const users = await selectSql.getusers(); //데이터베이스에서 user정보 가져옴
    let whoAmI = ''
    let checkLogin = false; // 처음에는 로그인을 하지 않은 상태
    
    // for(let i=0;i<users.length;i++){
    //     if(vars.id === user[i].id && vars.passwoard === user[i].password){

    //     }
    // }

    users.map((user) => {
        if(vars.id === user.Id && vars.password === user.Password){ //입력한 id, password와 데이터베이스 id,password가 일치하는지 확인
            checkLogin = true;
            if(vars.id === 'admin'){ // admin인지 확인
                whoAmI = 'admin';
            } else { // users인지 확인
                whoAmI = 'users';
            }
        }
    }) // 함수를 받아서 하나씩 체크

    console.log('whoAmI:',whoAmI);

    if(checkLogin && whoAmI === 'admin'){
        res.redirect('/delete'); // admin이면 delete페이지
    } else if(checkLogin && whoAmI === 'users'){
        res.redirect('/select'); // users면 select페이지
    } else {
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
        // 둘다 아니면 로그인 실패
    }

})

module.exports = router;