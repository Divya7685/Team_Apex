"use strict";
var _a;
let age = 19;
if (age < 60)
    age += 20;
console.log(age);
let sales = 123456789;
let course = "TypeScript";
let is_published = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [];
console.log(numbers);
let user = [9, 'Divya'];
console.log(user[0]);
console.log(user[1]);
;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2024) {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employee = {
    id: 9,
    name: 'Divya',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity1 = 50;
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello!');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());

//# sourceMappingURL=index.js.map