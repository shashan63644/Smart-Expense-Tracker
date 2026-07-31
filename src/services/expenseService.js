const { v4: uuidv4 } = require("uuid");
const {
    readExpenses,
    writeExpenses
} = require("../utils/fileHandler");

const addExpense = (expenseData) => {
    const expenses = readExpenses();

    const newExpense = {
        id: uuidv4(),
        ...expenseData
    };

    expenses.push(newExpense);

    writeExpenses(expenses);

    return newExpense;
};

const getAllExpenses = (category) => {
    const expenses = readExpenses();

    if (category) {
        return expenses.filter(
            expense =>
                expense.category.toLowerCase() === category.toLowerCase()
        );
    }

    return expenses;
};

const getTotalExpenses = (category) => {
    const expenses = readExpenses();

    let filteredExpenses = expenses;

    if (category) {
        filteredExpenses = expenses.filter(
            expense =>
                expense.category.toLowerCase() === category.toLowerCase()
        );
    }

    const total = filteredExpenses.reduce(
        (sum, expense) => sum + Number(expense.amount),
        0
    );

    return total;
};

const deleteExpense = (id) => {
    const expenses = readExpenses();

    const filteredExpenses = expenses.filter(expense => expense.id !== id);

    if (filteredExpenses.length === expenses.length) {
        return null;
    }

    writeExpenses(filteredExpenses);

    return true;
};

module.exports = {
    addExpense,
    getAllExpenses,
    getTotalExpenses,
    deleteExpense
};