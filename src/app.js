const express = require("express");
const expenseRoutes = require("./routes/expenseRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();


app.use(express.json());


app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Smart Expense Tracker API is running 🚀"
    });
});


app.use(errorHandler);

module.exports = app;