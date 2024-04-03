const express = require('express');
const route = express.Router();

const {getHangHoa}  =require("../app/controller/hang-hoa_controller");


route.get('/',getHangHoa);


module.exports = route;