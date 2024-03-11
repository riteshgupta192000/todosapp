const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const todoRoutes= require("./routes/todos");
app.use("/api/v1",todoRoutes);

const dbconnect=require("./config/database");
dbconnect();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to homepage</h1>");
});




app.listen(3000,()=>{
    console.log("server started at port 3000");
});



// app.post("/api/users", (req, res) => {
//     const { name, age } = req.body;
//     console.log(name);
//     console.log(age);
//     res.send("User submitted successfully");
// });

