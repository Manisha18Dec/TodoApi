const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/todos-api",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=> {
    console.log("connection is successful");


}).catch((err)=> {
    console.log("No Connection")

})
