const mongoose=require("mongoose");

require("dotenv").config();

const Dbconnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{ console.log("Db connection successfully"); })
    .catch((err)=>{ console.log("issue in db connection"); });
}


module.exports=Dbconnect;