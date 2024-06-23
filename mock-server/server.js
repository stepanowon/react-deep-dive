const express = require("express");
const path = require("path");
const cors = require('cors');

const router = require("./router");

const startServer = async () => {
  const PORT = process.env.PORT || 3000;
  const app = express();
  const BASEDIR = process.env.BASEDIR || path.resolve(".");

  //cors 설정
  app.use(cors());

  app.use(express.static(BASEDIR + "/public"));
  app.set("views", BASEDIR + "/views");
  app.set("view engine", "ejs");
  app.engine("html", require("ejs").renderFile);
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  //no cache 설정
  app.use(function (req, res, next) {
    res.header('Cache-Control', 
         'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
  });


  app.use(router);
  app.listen(PORT, () => {
    console.log(`#### ${PORT} 에서 서버가 시작되었습니다`);
  });
};

startServer();
