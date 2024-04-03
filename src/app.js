const express = require('express');
const app = express();
const path = require('path');
const {engine} = require('express-handlebars');
require("dotenv").config();
const routes = require('./routes/route');
const PORT = process.env.PORT || 3000;


app.engine('hbs', engine({
    extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname+'/resource/views'));
app.use(express.static(path.join(__dirname, '/public')));   


routes(app);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);