const getTienAo = (req, res) => {
    res.render('tien-ao', {title: 'Tien Ao'})
}
const getavax = (req, res) => {
    res.render('tien-ao/avax', {title: 'AVAX'})
}
const getada = (req, res) => {
    res.render('tien-ao/ada', {title: 'ADA'})
}
const getbnb = (req, res) => {
    res.render('tien-ao/bnb', {title: 'BNB'})
}
const getbch = (req, res) => {
    res.render('tien-ao/bch', {title: 'BCH'})
}
const getbtc = (req, res) => {
    res.render('tien-ao/btc', {title: 'BTC'})
}
const getdot = (req, res) => {
    res.render('tien-ao/dot', {title: 'DOT'})
}
const getdoge = (req, res) => {
    res.render('tien-ao/doge', {title: 'DOGE'})
}
const geteth = (req, res) => {
    res.render('tien-ao/eth', {title: 'ETH'})
}
const getltc = (req, res) => {
    res.render('tien-ao/ltc', {title: 'LTC'})
}
const geticp = (req, res) => {
    res.render('tien-ao/icp', {title: 'ICP'})
}
const getlink = (req, res) => {
    res.render('tien-ao/link', {title: 'LINK'})
}
const getmatic = (req, res) => {
    res.render('tien-ao/matic', {title: 'MATIC'})
}
const getnear = (req, res) => {
    res.render('tien-ao/near', {title: 'NEAR'})
}
const getsol = (req, res) => {
    res.render('tien-ao/sol', {title: 'SOL'})
}
const getshib = (req, res) => {
    res.render('tien-ao/shib', {title: 'SHIB'})
}
const getton = (req, res) => {
    res.render('tien-ao/ton', {title: 'TON'})
}
const gettrx = (req, res) => {
    res.render('tien-ao/trx', {title: 'TRX'})
}
const getusdc = (req, res) => {
    res.render('tien-ao/usdc', {title: 'USDC'})
}
const getusdt = (req, res) => {
    res.render('tien-ao/usdt', {title: 'USDT'})
}
const getxrp = (req, res) => {
    res.render('tien-ao/xrp', {title: 'XRP'})
}

module.exports = {getTienAo, getavax, getada, getbnb, getbch, getbtc, getdot, getdoge, geteth, getltc, geticp, getlink, getmatic, getnear, getsol, getshib, getton, gettrx, getusdc, getusdt, getxrp};