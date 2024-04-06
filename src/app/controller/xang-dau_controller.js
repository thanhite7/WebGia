const getXangDau = (req, res) => {
    res.render('xang-dau', {title: 'Xang Dau'})
}
const getdautho = (req, res) => {
    res.render('xang-dau/dautho', {title: 'Xang Dau'})
}
module.exports = {getXangDau,getdautho};