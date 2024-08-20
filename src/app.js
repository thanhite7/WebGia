const express = require('express');
const client = require('./config/database/db');
const app = express();
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');

const {engine} = require('express-handlebars');
require("dotenv").config();
const routes = require('./routes/route');
const PORT = 3000 ;


const listfile = ['giavang','tygianganhang','giaxangdau','ngoaite','giadauthothegioi','giavangthegioi','giacaphe']
app.engine('hbs', engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname+'/resource/views'));
app.use(express.static(path.join(__dirname, '/public/')));       

routes(app);

async function updateDataToMongoDB() {
    try {
        await client.connect();
        const db = client.db('webgia');
        listfile.forEach(async (file) => {
            const collection = db.collection(file);
            const newData = [];
            fs.createReadStream(file+'.csv')
                .pipe(csv())
                .on('data', (row) => {
                    newData.push(row);
                })
                .on('end', async () => {

                    const currentData = await collection.find({}).toArray();
                    const newDataJson = JSON.stringify(newData);
                    const currentDataJson = JSON.stringify(currentData);
                    if (newDataJson !== currentDataJson) {

                        await collection.deleteMany({});
                        await collection.insertMany(newData);
                    } 
                });
        });
    } catch (error) {
        console.error('Error:', error);
    }
}


const start = async () => {
    try {
        setInterval(async () => {
            await updateDataToMongoDB();
        }, 900000);
  
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
