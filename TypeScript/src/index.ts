let age: number = 19;
if (age < 60)
    age += 20;
console.log(age);


// any type
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let level;

function render(document: any) {
    console.log(document);
}

// array
let numbers: number[] = [];
console.log(numbers)

// tuples[key,value]
let user = [9, 'Divya'];
console.log(user[0]);
console.log(user[1]);

// enum
// one way
// const small = 1;
// const medium = 2;
// const large = 3;
// PascalCase(first letter should be capital)
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear = 2024): number {
    if (taxYear < 2024)
        return income * 1.2;
    return income * 1.3;

}
calculateTax(10_000);




