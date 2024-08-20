const express = require('express');
const route = express.Router();

const {getNgoaiTe, getaud, getcad, getchf, getcny, getdkk,geteur, getgbp, gethkd, gethuf, getidr, getinr, getjpy, getkhr, getkrw, getkwd, getlak, getmyr, getnok, getnzd, getphp, getpln, getrub, getsar, getsek, getsgd, getthb, gettwd, getusd, getzar}  =require("../app/controller/ngoai-te_controller");


route.get('/',getNgoaiTe);
route.get('/aud',getaud);
route.get('/cad',getcad);
route.get('/chf',getchf);
route.get('/cny',getcny);

route.get('/dkk',getdkk);
route.get('/eur',geteur);
route.get('/gbp',getgbp);
route.get('/hkd',gethkd);

route.get('/huf',gethuf);
route.get('/idr',getidr);
route.get('/inr',getinr);
route.get('/jpy',getjpy);
route.get('/khr',getkhr);
route.get('/krw',getkrw);
route.get('/kwd',getkwd);
route.get('/lak',getlak);
route.get('/myr',getmyr);
route.get('/nok',getnok);
route.get('/nzd',getnzd);
route.get('/php',getphp);
route.get('/pln',getpln);
route.get('/rub',getrub);
route.get('/sar',getsar);

route.get('/sek',getsek);
route.get('/sgd',getsgd);
route.get('/thb',getthb);
route.get('/twd',gettwd);
route.get('/usd',getusd);
route.get('/zar',getzar);


module.exports = route;