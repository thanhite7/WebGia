const client = require('../../config/database/db');
const getXangDau = async(req, res) => {
    await client.connect();
    const db = client.db('webgia');
    const collection = db.collection('giaxangdau');
    const giaxangdau = await collection.find().toArray();
    giaxangdau.forEach(obj => {
        if (obj.hasOwnProperty('\ufeffsan_pham')) {
          obj['san_pham'] = obj['\ufeffsan_pham'];
          delete obj['\ufeffsan_pham']; 
        }
      });
    // res.json(giaxangdau);
    res.render('xang-dau', {giaxangdau})
}
const getdautho = (req, res) => {
    res.render('xang-dau/dautho', {title: 'Xang Dau'})
}
module.exports = {getXangDau,getdautho};