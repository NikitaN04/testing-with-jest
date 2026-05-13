const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    stack.push(x);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return "fel"(); //osäker om man kan göra det såhär lätt i inlämningen..
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack); // Det här är medvetet felaktigt (fixad)
}