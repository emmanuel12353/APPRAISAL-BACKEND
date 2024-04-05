const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;


const connectDB = async () => {
    console.log("Connecting to Mongo")
    try {
        // this database is on vic mongodb
            // let db = await mongoose.connect('mongodb://127.0.0.1:27017/mxg',
            //mongodb+srv://olubobokun97:olubobokun97@cluster0.kt3zxvs.mongodb.net/testdb?retryWrites=true&w=majority
        let db = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Mongo") 
        console.log(db.connection.name)

    } catch (error) {
        console.log("Connection error: " + error)
    }
    
}

module.exports = connectDB