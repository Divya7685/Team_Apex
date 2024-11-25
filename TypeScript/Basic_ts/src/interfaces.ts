
interface Student{
    name: string;
    age: number;
    height?: string
}

interface Player extends Student{
        playerId: string
}

const captain:Player ={
    name: "divya",
    age: 19,
    height : "167 cms",
    playerId: "Ads9"
}

console.log(`student name is ${captain.name} and ${captain.height} with id ${captain.playerId}`)



// const student:Student = {
//     name: "deepthi",
//     age: 20,

// }




// console.log(`student name is ${newStudent.name} and ${newStudent.age}`)

// Type Aliases

type dataSampleType = string | number 

interface Product{
    name: dataSampleType;
    desc: dataSampleType;
    price: dataSampleType;
    discount: dataSampleType | boolean ;

}

const sampleProduct:Product ={
    name: "Mobile",
    desc: "best mobile",
    price: 15000, 
    discount: false
    
}

console.log(sampleProduct.price)

