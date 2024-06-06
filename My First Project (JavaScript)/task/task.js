const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

const prices = {
    'Bubblegum': 2,
    'Toffee': 0.2,
    'Ice cream': 5,
    'Milk chocolate': 4,
    'Doughnut': 2.5,
    'Pancake': 3.2
}

const sales = {
    'Bubblegum': 202,
    'Toffee': 118,
    'Ice cream': 2250,
    'Milk chocolate': 1680,
    'Doughnut': 1075,
    'Pancake': 80
};

function printPrices(prices) {
    console.log('Prices');
    for (let key in prices) {
        console.log(`${key}: $${prices[key]}`);
    }
}

function printSales(sales) {
    console.log('Earned amount:');
    for (let key in sales) {
        console.log(`${key}: $${sales[key]}`);
    }
}

function calculateTotalSales(sales) {
    return Object.values(sales).reduce((sum, amount) => sum + amount, 0);
}

function calculateNetIncome(sales, staffExpenses, otherExpenses) {
    return calculateTotalSales(sales) - staffExpenses - otherExpenses;
}


function printTotalSales(sales) {
    console.log(`Income: $${calculateTotalSales(sales)}`);
}

function printNetIncome(sales, staffExpenses, otherExpenses) {
    console.log(`Net income: $${calculateNetIncome(sales, staffExpenses, otherExpenses)}`);
}

printSales(sales);
printTotalSales(sales);

let staffExpenses = input('Staff expenses: ');
let otherExpenses = input('Other expenses: ');
printNetIncome(sales, staffExpenses, otherExpenses);