const { MongoClient } = require('mongodb');
const MONGO_URI = "mongodb+srv://thanhnguyentienusd:thanh20102003@cluster0.9e6vfas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;

