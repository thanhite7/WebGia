const express = require('express');
const route = express.Router();
const {getTyGiaNganHang}  =require("../app/controller/ti-gia-ngan-hang_controller");

route.get('/',getTyGiaNganHang);


module.exports = route;