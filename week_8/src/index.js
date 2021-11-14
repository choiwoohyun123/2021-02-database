// 모듈을 불러옴
import express from "express";
import logger from "morgan";
import path from "path"; 

import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";


const PORT = 3000; //3000번 포트 사용

const app = express(); //express기능 사용

//데이터 다루기 편하게하기 위해 사용
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//hbs사용
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')
//logger를 좀 더 자세하게 보기위해 사용
app.use(logger("dev"));

app.use('/', homeRouter); //home화면
app.use('/update', updateRouter); //수정
app.use('/select', selectRouter); //조회

  app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`)
  }) // 서버실행