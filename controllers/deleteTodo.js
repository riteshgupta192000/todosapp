const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await Todo.findByIdAndDelete(id);

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                error: "Todo not found",
                message: "Todo not found",
            });
        }

        res.json({
            success: true,
            message: "Todo deleted successfully",
            data: deletedTodo, // Optionally, you can send the deleted todo back as a response
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        });
    }
};
