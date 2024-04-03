const express = require('express');
const route = express.Router();

const {getXangDau}  =require("../app/controller/xang-dau_controller");

route.get('/',getXangDau);


module.exports = route;