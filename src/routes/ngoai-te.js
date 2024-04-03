const express = require('express');
const route = express.Router();

const {getNgoaiTe}  =require("../app/controller/ngoai-te_controller");


route.get('/',getNgoaiTe);

module.exports = route;