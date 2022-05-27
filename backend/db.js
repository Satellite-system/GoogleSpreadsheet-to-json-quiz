const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://tester:0PswSY22WC2bNFtv@cluster0.zi02l.mongodb.net/?retryWrites=true&w=majority"


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to MongoDB Atlas")
    })
}

module.exports = connectToMongo;