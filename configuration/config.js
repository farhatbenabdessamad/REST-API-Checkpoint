const mongoose= require("mongoose")
exports.config = async()=>{
try {
    await mongoose.connect("mongodb://127.0.0.1:27017/workshop")
    console.log("database is connected")
} catch (error) {
    console.log(error)
}
}
//module.exports=config//