const mongoose = require('mongoose');

const URI = "mongodb+srv://Chawla:Chawla123@cluster0.8bgku.mongodb.net/ProductDb?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology:true,
        useNewUrlParser:true
    });
    console.log('db connected');
}

module.exports = connectDB;