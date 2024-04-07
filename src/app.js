const express = require('express');
const connectDB = require('./config/database/db');
const app = express();
const path = require('path');
const {engine} = require('express-handlebars');
require("dotenv").config();
const routes = require('./routes/route');
const PORT = 3000 ;
const MONGO_URI = "mongodb+srv://thanhnguyentienusd:thanh20102003@cluster0.9e6vfas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname+'/resource/views'));
app.use(express.static(path.join(__dirname, '/public')));   

routes(app);

const start = async ()=>{
    try{
        await connectDB(MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();
