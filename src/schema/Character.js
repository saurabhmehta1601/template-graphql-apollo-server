const mongoose =require("mongoose")

const AuthorSchema = new mongoose.Schema({
    name : {
        type:String,
        required : true,
        unique:true
    },
   
    age : {
        type:Number,
        required : true,
    }
})


module.exports = mongoose.model("author",AuthorSchema)