const Todo =require("../models/Todo");


exports.getTodo= async (req,res)=>{
    try{
        const todos=await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"Enter todo data is fetched",
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error",
        })
    }
}



exports.getTodoById= async (req,res)=>{
    try{
        const id= req.params.id;
        const todo = await Todo.findById({ _id:id});

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data founf with given id",
            })
        }

        res.status(200).json({
            success:true,
            data:todo,
            message:`todo ${id} data successfully`
        })

    }
    catch(err){

        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server error"
        })

    }
}