const getHangHoa = (req, res) => {
    res.render('hang-hoa', {title: 'Hang Hoa'})
}
const getcaphe = (req, res) => {
    res.render('ca-phe/ca-phe', {title: 'Hang Hoa'})
}
const getcapheTG = (req, res) => {
    res.render('ca-phe/ca-phe-the-gioi', {title: 'Hang Hoa'})
}

module.exports = {getHangHoa,getcaphe,getcapheTG};