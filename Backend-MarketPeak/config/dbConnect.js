//const { default: mongoose } = require("mongoose");

//const dbConnect = () => {
  //try {
    //const conn = mongoose.connect(process.env.MONGODB_URL);
    //console.log("Database Connected Successfully");
  //} catch (error) {
    //console.log("DAtabase error");
  //}
//};
//module.exports = dbConnect;

const mongoose = require('mongoose')

const dbConnect = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = dbConnect;
