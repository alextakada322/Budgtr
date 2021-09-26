const express = require('express');
const app = express();
const port = 3000;

const budget = require("./models/budget.js")


// MIDDLEWARE - functions that run before your routes
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))



// Index Route: Match http://localhost:3000/ to send " "
app.get('/budget/', (req, res) => {
    res.render("index.ejs", {
        allBudget:budget,
    });
});


// New Route
app.get('/budget/new', (req, res) => {
    res.render("new.ejs", {title: "Add a new item"})
})

// Create Route - makes a new item
app.post('/budget', (req, res) => {
    console.log(req.body)
    budget.push(req.body)
    res.redirect("/budget")
})

// Show Route
app.get('/budget/:indexOfBudgetArray', (req, res) => {
    res.render("show.ejs", {val: budget[req.params.indexOfBudgetArray]})
})


// Web Server. listen on port 3000
app.listen(port, () => {
    console.log("Hello Alex. I'm listening...");
});