const getLaiSuat = (req, res) => {
    res.render('lai-suat', {title: 'Lai Suat'})
}

const getabbank = (req, res) => {
    res.render('lai-suat/abbank', {title: 'ABBank'})
}

const getagribank = (req, res) => {
    res.render('lai-suat/agribank', {title: 'Agribank'})
}

const getbidv = (req, res) => {
    res.render('lai-suat/bidv', {title: 'BIDV'})
}
const getbaca = (req, res) => {
    res.render('lai-suat/baca', {title: 'Bac A Bank'})
}
const getbaoviet = (req, res) => {
    res.render('lai-suat/baoviet', {title: 'Bao Viet'})
}
const getcbbank = (req, res) => {
    res.render('lai-suat/cbbank', {title: 'CB Bank'})
}
const getdonga = (req, res) => {
    res.render('lai-suat/donga', {title: 'Dong A Bank'})
}
const getgpbank = (req, res) => {
    res.render('lai-suat/gpbank', {title: 'GP Bank'})
}
const gethongleong = (req, res) => {
    res.render('lai-suat/hongleong', {title: 'Hệ Thống Lend'})
}
const getindovina = (req, res) => {
    res.render('lai-suat/indovina', {title: 'Indovina'})
}
const getkienlong = (req, res) => {
    res.render('lai-suat/kienlong', {title: 'Kien Long Bank'})
}
const getmsb = (req, res) => {
    res.render('lai-suat/msb', {title: 'MSB'})
}
const getmb =  (req, res) => {
    res.render('lai-suat/mb', {title: 'MB'})
}
const getnamabank =     (req, res) => {
    res.render('lai-suat/nama', {title: 'Nama Bank'})
}
const getncb = (req, res) => {
    res.render('lai-suat/ncb', {title: 'NCB'})
}
const getocb = (req, res) => {
    res.render('lai-suat/ocb', {title: 'OCB'})
}
const getoceanbank  =   (req, res) => {
    res.render('lai-suat/oceanbank', {title: 'Ocean Bank'})
}
const getpgnbank = (req, res) => {
    res.render('lai-suat/pgbank', {title: 'PGN Bank'})
}
const getpublicbank = (req, res) => {
    res.render('lai-suat/publicbank', {title: 'Public Bank'})
}
const getpvcombank = (req, res) => {
    res.render('lai-suat/pvcombank', {title: 'PVCom Bank'})
}
const getsaigonbank =   (req, res) => {
    res.render('lai-suat/saigonbank', {title: 'Saigon Bank'})
}
const getscb = (req, res) => {
    res.render('lai-suat/scb', {title: 'SCB'})
}
const seabank = (req, res) => {
    res.render('lai-suat/seabank', {title: 'Seabank'})
}
const getshb = (req, res) => {
    res.render('lai-suat/shb', {title: 'SHB'})
}
const gettpbank = (req, res) => {
    res.render('lai-suat/tpb', {title: 'TP Bank'})
}
const getvib = (req, res) => {
    res.render('lai-suat/vib', {title: 'VIB'})
}
const getvietcapitalbank = (req, res) => {
    res.render('lai-suat/vietcapitalbank', {title: 'Viet Capital Bank'})
}
const getvietcombank = (req, res) => {
    res.render('lai-suat/vietcombank', {title: 'Vietcombank'})
}
const getvietinbank = (req, res) => {
    res.render('lai-suat/viettinbank', {title: 'Vietinbank'})
}
const getvpbank = (req, res) => {
    res.render('lai-suat/vpbank', {title: 'VP Bank'})
}
const getvrb = (req, res) => {
    res.render('lai-suat/vrb', {title: 'VRB'})
}


module.exports = {getLaiSuat, getabbank, getagribank, getbidv, getbaca, getbaoviet, getcbbank, getdonga, getgpbank, gethongleong, getindovina, getkienlong, getmsb, getmb, getnamabank, getncb, getocb, getoceanbank, getpgnbank, getpublicbank, getpvcombank, getsaigonbank, getscb, seabank, getshb, gettpbank, getvib, getvietcapitalbank, getvietcombank, getvietinbank, getvpbank, getvrb};