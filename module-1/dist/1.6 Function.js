"use strict";
// normal function
function add(num1, num2) {
    return num1 + num2;
}
// arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
// object --> function = method
var richUser = {
    name: 'Rahad',
    balance: 0,
    addBalance: function (balance) {
        return this.balance + balance;
    }
};
// callback function
var prices = [102, 103, 104, 105];
var sqrPrices = prices.map(function (price) { return price * price; });
