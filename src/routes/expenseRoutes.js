const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");

router.get("/total", expenseController.getTotalExpenses);

router.get("/", expenseController.getAllExpenses);


router.post("/", expenseController.addExpense);

router.delete("/:id", expenseController.deleteExpense);

module.exports = router;