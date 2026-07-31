const request = require("supertest");
const fs = require("fs");
const path = require("path");
const app = require("../src/app");

const filePath = path.join(__dirname, "../src/data/expenses.json");


beforeEach(() => {
    fs.writeFileSync(filePath, "[]");
});

describe("Smart Expense Tracker API", () => {

    test("POST /expenses - should add an expense", async () => {

        const response = await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 120,
                category: "Food",
                date: "2026-07-31"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe("Coffee");
    });

    test("GET /expenses - should return all expenses", async () => {

        await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 120,
                category: "Food",
                date: "2026-07-31"
            });

        const response = await request(app).get("/expenses");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.count).toBe(1);
    });

    test("GET /expenses?category=Food - should filter expenses", async () => {

        await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 120,
                category: "Food",
                date: "2026-07-31"
            });

        await request(app)
            .post("/expenses")
            .send({
                title: "Bus",
                amount: 60,
                category: "Transport",
                date: "2026-07-31"
            });

        const response = await request(app)
            .get("/expenses?category=Food");

        expect(response.statusCode).toBe(200);
        expect(response.body.count).toBe(1);
        expect(response.body.data[0].category).toBe("Food");
    });

    test("GET /expenses/total - should calculate total expenses", async () => {

        await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 100,
                category: "Food",
                date: "2026-07-31"
            });

        await request(app)
            .post("/expenses")
            .send({
                title: "Pizza",
                amount: 200,
                category: "Food",
                date: "2026-07-31"
            });

        const response = await request(app)
            .get("/expenses/total");

        expect(response.statusCode).toBe(200);
        expect(response.body.total).toBe(300);
    });

    test("DELETE /expenses/:id - should delete an expense", async () => {

        const createResponse = await request(app)
            .post("/expenses")
            .send({
                title: "Coffee",
                amount: 120,
                category: "Food",
                date: "2026-07-31"
            });

        const id = createResponse.body.data.id;

        const response = await request(app)
            .delete(`/expenses/${id}`);

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
    });

});