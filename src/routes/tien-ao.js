const express = require('express');
const route = express.Router();

const {getTienAo}  =require("../app/controller/tien-ao_controller");

route.get('/',getTienAo);

module.exports = route;