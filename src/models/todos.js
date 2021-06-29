const mongoose=require("mongoose");
const validator= require("validator");
const todoSchema=new mongoose.Schema({
    id:{
        type:String,
        
        
    },
    todo:{
        type:String,
        
        
    
    }
});

//we will create collections
const Todo=new mongoose.model('Todo',todoSchema);
module.exports=Todo;