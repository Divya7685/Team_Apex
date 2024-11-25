//array

// let cities:string[] | number[] = ["hyderabad", "vizag", "vijayawada", "Tirupati"] //shorhand notation

// cities= [20,21,22,23, ]
// // Generic type notation

// let countries:Array<string | number> = ["India", "U.S", 26, 28,226555]

// cities[0] = 55 

// countries[1]= 895

const superHeros: string[] = []
// const heroPower: number[] = []
const heroPower: Array<number> = []

type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
heroPower.push(2)

allUsers.push({name: "", isActive: true})