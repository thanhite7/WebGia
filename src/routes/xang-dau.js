const express = require('express');
const route = express.Router();

const {getXangDau,getdautho}  =require("../app/controller/xang-dau_controller");

route.get('/',getXangDau);
route.get('/petrolimex',getXangDau)
route.get('/dau-tho',getdautho)

module.exports = route;