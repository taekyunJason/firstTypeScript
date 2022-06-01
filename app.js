require("dotenv").config();
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const app = express();
const port = 3000;

//접속로그 확인
const requestMiddleWare = (req, res, next) => {
  console.log("request Url : ", req.originalUrl, "-", new Date());
  next();
};

//app.use : 미들웨어를 사용
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestMiddleWare);

//에러 핸들러
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send("Something Broke!");
});

//app.listen : 포트번호로 서버를 켜는 코드
app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요!");
});
