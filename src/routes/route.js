const giavang = require("./gia-vang");
const hanghoa = require("./hang-hoa");
const laisuat = require("./lai-suat");
const ngoaite = require("./ngoai-te");
const tienao = require("./tien-ao");
const tygianganhang = require("./ty-gia-ngan-hang");
const xangdau = require("./xang-dau");

function routes(app){
    app.use("/",giavang);
    app.use("/gia-vang",giavang);
    app.use("/hang-hoa",hanghoa);
    app.use("/lai-suat",laisuat);
    app.use("/ngoai-te",ngoaite);
    app.use("/tien-ao",tienao);
    app.use("/ty-gia",tygianganhang);
    app.use("/xang-dau",xangdau);
}
module.exports = routes;