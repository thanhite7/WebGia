const express = require('express');
const route = express.Router();
const {getHome,sjc,pnj,doji,baotinminhchau,baotinmanhhai,phuquy,mihong,ngoctham} = require("../app/controller/homeController");

route.get('/',getHome);
route.get('/sjc',sjc);
route.get('/doji',doji);
route.get('/pnj',pnj);
route.get('/bao-tin-minh-chau',baotinminhchau);
route.get('/bao-tin-manh-hai',baotinmanhhai);
route.get('/phu-quy',phuquy);
route.get('/mi-hong',mihong);
route.get('/ngoc-tham',ngoctham);

module.exports = route;