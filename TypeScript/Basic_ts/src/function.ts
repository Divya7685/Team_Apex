
function apples(){
    return "this is string"
}

let x = 99;
let y = "divya"

function users():number{
    return x
}

// function expression

const addingNumbers = function(x:number, y:number):number{
    return x+y
}

addingNumbers(55, 65)

// Optional Parameters

const product = (title:string, price:number)=>{
        return `The product name is ${title} and price is ${price}`
}

// console.log(product("samsung", 11500, "vivo"))

