#### Smart Expense Tracker API   #####

# About the Project

This project is a REST API built using "Node.js", "Express.js", and "JavaScript". It helps users keep track of their personal expenses by allowing them to add, view, filter, calculate totals, and delete expenses.

The expense data is stored in a local JSON file, so no database setup is needed.



# Features

* Add a new expense
* View all expenses
* Filter expenses by category
* Calculate the total of all expenses
* Calculate the total for a specific category
* Delete an expense
* Input validation
* Error handling
* Automated testing using Jest and Supertest



# Technologies Used

* Node.js
* Express.js
* JavaScript
* Jest
* Supertest
* UUID

---

# Project Structure

Smart-Expense-Tracker/
│
├── src/
│   ├── app.js
│   ├── server.js
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── middleware/
│   ├── utils/
│   └── data/
│       └── expenses.json
│
├── tests/
│   └── expense.test.js
│
├── README.md
├── AI_NOTES.md
├── package.json
└── package-lock.json




# Installation

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Move into the project folder.

```bash
cd Smart-Expense-Tracker
```

3. Install all required packages.

```bash
npm install
```

---

# Run the Application

To start the server in development mode:

```bash
npm run dev
```

To start the application normally:

```bash
npm start
```

The API runs on:

```text
http://localhost:3000
```

---

# Run the Tests

To run all the automated tests:

```bash
npm test
```

---

# API Endpoints

| Method | Endpoint                      | Description                           |
| ------ | ----------------------------- | ------------------------------------- |
| GET    | /                             | Check if the API is running           |
| POST   | /expenses                     | Add a new expense                     |
| GET    | /expenses                     | Get all expenses                      |
| GET    | /expenses?category=Food       | Filter expenses by category           |
| GET    | /expenses/total               | Get the total of all expenses         |
| GET    | /expenses/total?category=Food | Get the total for a specific category |
| DELETE | /expenses/:id                 | Delete an expense using its ID        |

---

# Example Request

```json
{
  "title": "Coffee",
  "amount": 120,
  "category": "Food",
  "date": "2026-07-31"
}
```

---

# Validation

The API checks that:

* Title is provided
* Amount is provided and greater than 0
* Category is provided
* Date is provided

If any required field is missing or invalid, the API returns a proper error message.

---

## Testing

I used *Jest* and *Supertest* to test the API.

The tests cover:

* Adding an expense
* Getting all expenses
* Filtering by category
* Calculating total expenses
* Deleting an expense

Run the tests using:


npm test




# Future Improvements

If I continue working on this project, I would like to add:

* Update expense functionality
* Database support (MongoDB or PostgreSQL)
* User authentication




# Author

Shashank M

