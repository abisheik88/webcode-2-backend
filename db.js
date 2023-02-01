const mongoose = require("mongoose");

function connectDB() {

    mongoose.set('strictQuery', true);

    mongoose.connect(`mongodb+srv://Abisheik:LL42NuJ0wA6y6nug@cluster0.0l6whfs.mongodb.net/test`, { useUnifiedTopology: true, useNewUrlParser: true })

    const connection = mongoose.connection

    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose