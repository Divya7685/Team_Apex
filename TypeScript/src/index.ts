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

// Type aliases

type Employee = {

    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 9,
    name: 'Divya',
    retire: (date: Date) => {
        console.log(date);
    }
}

// union types
function kgToLbs(weight: number | string): number {
    // narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else return parseInt(weight) * 2.2;

}

kgToLbs(10);
kgToLbs('10kg');

// intersection type
type Draggable = {
    drag: () => void
};
type Resizable = {
    resize: () => void
};
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}


// literal type(exact,specific)
let quantity1: 50 | 100 = 50;
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';

//Nullable type
function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hello!');
}
greet(null);

// optional chaining
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer);
//optional property access operator
console.log(customer?.birthday?.getFullYear());
// optional ele access operator

let log: any = null;
log('a')

// only if log is referencing an actual fun otherwise we will get undefined