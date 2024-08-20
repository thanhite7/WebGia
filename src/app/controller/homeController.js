const client = require('../../config/database/db');
const getHome = async (req, res) => {
    await client.connect();
    const db = client.db('webgia');
    const collection = db.collection('giavang');
    const giavang = await collection.find().toArray();
    giavang.forEach(obj => {
        if (obj.hasOwnProperty('\ufeffkhu_vuc')) {
          obj['khu_vuc'] = obj['\ufeffkhu_vuc'];
          delete obj['\ufeffkhu_vuc']; 
        }
      });
    res.render('home',{giavang}); 
};
const sjc = (req,res)=>{
    res.render('gia-vang/sjc',{title:'SJC'})
}
const doji = (req,res)=>{
    res.render('gia-vang/doji',{title:'DOJI'})
}
const pnj = (req,res)=>{
    res.render('gia-vang/pnj',{title:'PNJ'})
}
const baotinminhchau = (req,res)=>{
    res.render('gia-vang/bao-tin-minh-chau',{title:'PNJ'})
}
const baotinmanhhai = (req,res)=>{
    res.render('gia-vang/bao-tin-manh-hai',{title:'baotinmanhhai'})
}
const phuquy = (req,res)=>{
    res.render('gia-vang/phu-quy',{title:'phuquy'})
}
const mihong = (req,res)=>{
    res.render('gia-vang/mi-hong',{title:'mihong'})
}
const ngoctham = (req,res)=>{
    res.render('gia-vang/ngoc-tham',{title:'ngoctham'})
}
module.exports = {getHome,sjc,pnj,doji,baotinminhchau,baotinmanhhai,phuquy,mihong,ngoctham};