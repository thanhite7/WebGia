const client = require('../../config/database/db');
const getHangHoa = (req, res) => {
    res.render('hang-hoa', {title: 'Hang Hoa'})
}
const getcaphe = async(req, res) => {
    await client.connect();
    const db = client.db('webgia');
    const collection = db.collection('giacaphe');
    const caphe = await collection.find().toArray();
    caphe.forEach(obj => {
        if (obj.hasOwnProperty('\ufeffthi_truong')) {
          obj['thi_truong'] = obj['\ufeffthi_truong'];
          delete obj['\ufeffthi_truong']; 
        }
      });
    res.render('ca-phe/ca-phe', {caphe})
}
const getcapheTG = (req, res) => {
    res.render('ca-phe/ca-phe-the-gioi', {title: 'Hang Hoa'})
}

module.exports = {getHangHoa,getcaphe,getcapheTG};