const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/expenses.json");


const readExpenses = () => {
    try {
        const data = fs.readFileSync(filePath, "utf8");

        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};


const writeExpenses = (expenses) => {
    fs.writeFileSync(filePath, JSON.stringify(expenses, null, 2));
};

module.exports = {
    readExpenses,
    writeExpenses
};