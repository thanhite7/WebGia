const express = require('express');
const route = express.Router();
const {getTyGiaNganHang,getabbank, 
    getagribank, 
    getacb, 
    getvietcapitalbank, 
    getbidv, 
    getbaovietbank, 
    getcbbank, 
    getdongabank, 
    geteximbank, 
    getgpbank, 
    gethdbank, 
    gethsbc, 
    gethongleongbank, 
    getindovinabank, 
    getkienlongbank, 
    getlienvietpostbank, 
    getmbbank, 
    getmaritimebank, 
    getnamabank, 
    getocb, 
    getncb, 
    getoceanbank, 
    getpgbank, 
    getpublicbank, 
    getpvcombank, 
    getsacombank, 
    getsaigonbank, 
    getscb, 
    getshb, 
    getseabank, 
    gettechcombank, 
    gettpbank, 
    getvib, 
    getuob, 
    getvietabank, 
    getvietcombank, 
    getvietinbank, 
    getvietbank, 
    getvpbank, 
    getvrbank}  =require("../app/controller/ti-gia-ngan-hang_controller");

route.get('/',getTyGiaNganHang);
route.get('/abbank',getabbank);
route.get('/agribank',getagribank);
route.get('/acb',getacb);
route.get('/vietcapitalbank',getvietcapitalbank);
route.get('/bidv',getbidv);
route.get('/baovietbank',getbaovietbank);
route.get('/cbbank',getcbbank);
route.get('/dongabank',getdongabank);
route.get('/eximbank',geteximbank);
route.get('/gpbank',getgpbank);
route.get('/hdbank',gethdbank);
route.get('/hsbc',gethsbc);
route.get('/hlbank',gethongleongbank);
route.get('/indovinabank',getindovinabank);
route.get('/kienlongbank',getkienlongbank);
route.get('/lienvietpostbank',getlienvietpostbank);
route.get('/mbbank',getmbbank);
route.get('/maritimebank',getmaritimebank);
route.get('/namabank',getnamabank);
route.get('/ocb',getocb);
route.get('/ncb',getncb);
route.get('/oceanbank',getoceanbank);
route.get('/pgbank',getpgbank);
route.get('/publicbank',getpublicbank);
route.get('/pvcombank',getpvcombank);
route.get('/sacombank',getsacombank);
route.get('/saigonbank',getsaigonbank);
route.get('/scb',getscb);
route.get('/shbbank',getshb);
route.get('/seabank',getseabank);
route.get('/techcombank',gettechcombank);
route.get('/tpbank',gettpbank);
route.get('/vib',getvib);
route.get('/uob',getuob);
route.get('/vietabank',getvietabank);
route.get('/vietcombank',getvietcombank);
route.get('/vietinbank',getvietinbank);
route.get('/vietbank',getvietbank);
route.get('/vpbank',getvpbank);
route.get('/vrbank',getvrbank);




module.exports = route;