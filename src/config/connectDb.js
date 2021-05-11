const mongoose  = require("mongoose")

module.exports = async () =>{
    await mongoose.connect(process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true
    },()=>{
        console.log("> Connected to Mongodb Atlas");
    })
}