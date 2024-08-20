const express = require('express');
const route = express.Router();

const {getHangHoa,getcaphe,getcapheTG}  =require("../app/controller/hang-hoa_controller");


route.get('/',getHangHoa);
route.get('/ca-phe',getcaphe);
route.get('/ca-phe-the-gioi',getcapheTG);
module.exports = route;