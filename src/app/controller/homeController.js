
const getHome = (req, res) => {
    res.render('home', {title: 'Home'})
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