const expenseService = require("../services/expenseService");

exports.addExpense = (req, res) => {
    try {
        const { title, amount, category, date } = req.body;

        if (!title || !category || !date || amount === undefined) {
            return res.status(400).json({
                success: false,
                message: "Title, amount, category and date are required."
            });
        }

        if (Number(amount) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Amount must be greater than 0."
            });
        }

        const expense = expenseService.addExpense({
            title: title.trim(),
            amount: Number(amount),
            category: category.trim(),
            date
        });

        res.status(201).json({
            success: true,
            message: "Expense Added Successfully",
            data: expense
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

exports.getAllExpenses = (req, res) => {

    const { category } = req.query;

    const expenses = expenseService.getAllExpenses(category);

    res.status(200).json({
        success: true,
        count: expenses.length,
        data: expenses
    });

};

exports.getTotalExpenses = (req, res) => {

    const { category } = req.query;

    const total = expenseService.getTotalExpenses(category);

    res.status(200).json({
        success: true,
        category: category || "All",
        total
    });

};

exports.deleteExpense = (req, res) => {

    const { id } = req.params;

    const deleted = expenseService.deleteExpense(id);

    if (!deleted) {
        return res.status(404).json({
            success: false,
            message: "Expense not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "Expense deleted successfully"
    });

};