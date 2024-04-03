const express = require('express');
const route = express.Router();

const {getLaiSuat}  =require("../app/controller/lai-suat_controller");


route.get('/',getLaiSuat);


module.exports = route;