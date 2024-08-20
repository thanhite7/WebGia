const express = require('express');
const route = express.Router();

const {getLaiSuat, getabbank, getagribank, getbidv, getbaca, getbaoviet, getcbbank, getdonga, getgpbank, gethongleong, getindovina, getkienlong, getmsb, getmb, getnamabank, getncb, getocb, getoceanbank, getpgnbank, getpublicbank, getpvcombank, getsaigonbank, getscb, seabank, getshb, gettpbank, getvib, getvietcapitalbank, getvietcombank, getvietinbank, getvpbank, getvrb}  =require("../app/controller/lai-suat_controller");


route.get('/',getLaiSuat);
route.get('/abbank',getabbank);
route.get('/agribank',getagribank);
route.get('/bidv',getbidv);
route.get('/bacabank',getbaca);
route.get('/baovietbank',getbaoviet);
route.get('/cbbank',getcbbank);
route.get('/dongabank',getdonga);
route.get('/gpbank',getgpbank);
route.get('/hlbank',gethongleong);
route.get('/indovina',getindovina);
route.get('/kienlongbank',getkienlong);
route.get('/maritimebank',getmsb);
route.get('/mbbank',getmb);
route.get('/namabank',getnamabank);
route.get('/ncb',getncb);
route.get('/ocb',getocb);
route.get('/oceanbank',getoceanbank);
route.get('/pgbank',getpgnbank);
route.get('/publicbank',getpublicbank);
route.get('/pvcombank',getpvcombank);
route.get('/saigonbank',getsaigonbank);
route.get('/scb',getscb);
route.get('/seabank',seabank);
route.get('/shb',getshb);
route.get('/tpbank',gettpbank);
route.get('/vib',getvib);
route.get('/vietcapitalbank',getvietcapitalbank);
route.get('/vietcombank',getvietcombank);
route.get('/vietinbank',getvietinbank);
route.get('/vpbank',getvpbank);
route.get('/vrbank',getvrb);




module.exports = route;