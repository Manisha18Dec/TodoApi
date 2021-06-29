const express=require("express");
require("./db/conn");
const Todo=require("./models/todos");
// const todoRouter=require("./routers/todo");


const port=process.env.PORT || 8000;

const app=express();
app.use(express.json());


 app.post("/todos",async(req,res)=>{
     try{
         const user=new Todo(req.body);
   const createUser=await user.save();
    res.status(201).send(createUser);
        }catch(err){res.status(400).send(err);}
    
 })




//read the data of todos
app.get("/todos",async(req,res)=>{
    try{
const todoData=await Todo.find();
res.send(todoData);
    }catch(e){
res.send(e);
    }

})
//get the indivisual todo data
app.get("/todos/:id",async(req,res)=>{
    try{
const _id=req.params.id;
const todoData1=await Todo.findById(_id);
console.log(todoData1);
if(!todoData1){
 return res.status(404).send();
} else{
    res.send(todoData1);
}
// console.log(req.params.id);
// res.send(req.params.id);
    }catch(e){
res.send(e)
    }
}) 
// update todo
app.patch("/todos/:id",async(req,res)=>{
try{
    const _id=req.params.id;
   const updateTodo=await Todo.findByIdAndUpdate(_id,req.body,{
       new:true
   });
   res.send(updateTodo);
}catch(e){
   res.status(404).send(updateTodo);
}
})

//Delete todo
app.delete("/todos/:id",async(req,res) =>{
    try{
const _id=req.params.id;
const deleteTodo=await Todo.findByIdAndDelete(req.params.id);
if(!req.params.id){
    return res.status(404).send()
}
res.send(deleteTodo);
    }catch(e){
        res.status(500).send(e);

    }

})



app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})
