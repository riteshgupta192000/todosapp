const Todo=require("../models/Todo");


exports.createTodo = async(req,res)=>{
    try{
      const {title,description}=req.body;
    //create a new todo obj and insert into in DB
      const response = await Todo.create({
        title,
        description
      });

     res.status(200).json({
        success:true,
        data:response,
        message:"entry created successfully"
     });
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}