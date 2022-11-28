// import mysql from "mysql2/promise";

const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.port || 8008;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

let corsOptions = {
  origin: "*", // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 등...) 접근
};

app.use(cors(corsOptions));

const db = mysql.createConnection({
  host: "project-db-stu.ddns.net",
  password: "cass22",
  user: "jsm9194",
  port: "3307",
  database: "jsm9194",
});

db.connect();

// const db = mysql.createPool({
//   host: "project-db-stu.ddns.net",
//   user: "jsm9194",
//   password: "cass22",
//   database: "jsm9194",
// });

// app.get("http://localhost:8008/", (req, res) => {
//   res.send("Server Response Success");
// });

app.post("/insert", (req, res) => {
  var content = req.body.content;

  const sqlQuery = "insert into hate_speech values (?);";
  db.query(sqlQuery, [content], (err, result) => {
    res.send(result);
  });
});

app.post("/detail", (req, res) => {
  // 브라우저에 뿌려줄
  console.log("/detail", req.body);
  var num = parseInt(req.body.num);

  const sqlQuery = // 보드이미지를 서버에서 가져올 수 있도록 쿼리구문에 보드이미지를 추가한다.
    "SELECT BOARD_NUM, BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT, DATE_FORMAT(BOARD_DATE, '%Y-%m-%d') AS BOARD_DATE, BOARD_IMAGE FROM BOARD_TBL where BOARD_NUM = ?;";
  db.query(sqlQuery, [num], (err, result) => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server run : http://localhost:${PORT}/`);
});
