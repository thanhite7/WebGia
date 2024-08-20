const express = require('express');
const route = express.Router();

const {getTienAo, getavax, getada, getbnb, getbch, getbtc, getdot, getdoge, geteth, getltc, geticp, getlink, getmatic, getnear, getsol, getshib, getton, gettrx, getusdc, getusdt, getxrp}  =require("../app/controller/tien-ao_controller");

route.get('/',getTienAo);
route.get('/cardano',getada);
route.get('/avalanche',getavax);
route.get('/bnb',getbnb);
route.get('/bitcoin-cash',getbch);
route.get('/bitcoin',getbtc);
route.get('/polkadot-new',getdot);
route.get('/dogecoin',getdoge);
route.get('/ethereum',geteth);
route.get('/litecoin',getltc);
route.get('/internet-computer',geticp);
route.get('/chainlink',getlink);
route.get('/polygon',getmatic);

route.get('/near',getnear);
route.get('/solana',getsol);

route.get('/shiba-inu',getshib);
route.get('/ton-crystal',getton);
route.get('/tron',gettrx);
route.get('/usd-coin',getusdc);
route.get('/tether',getusdt);
route.get('/ripple',getxrp);


module.exports = route;