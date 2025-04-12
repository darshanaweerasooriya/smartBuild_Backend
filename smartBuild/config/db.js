const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://darshana:Meekiri213@cluster0.bmrclmi.mongodb.net/SmartBuild?retryWrites=true&w=majority&appName=Cluster0').on('open', ()=>{
    console.log("MongoDb connected Successfully");
}).on('error',()=>{
    console.log("Database connection error");
});


module.exports = connection;


