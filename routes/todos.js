const express=require("express");
const router=express.Router();

const {createTodo}= require("../controllers/createTodo");
const {getTodo,getTodoById}= require("../controllers/getTodo");
const {updateTodo}= require("../controllers/updateTodo");
const {deleteTodo}= require("../controllers/deleteTodo");

router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodo/:id",getTodoById);
router.delete("/deleteTodo/:id",deleteTodo);
router.put("/updateTodo/:id",updateTodo);
module.exports=router;