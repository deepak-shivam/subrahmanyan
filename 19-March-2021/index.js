
// ARRAY
// // Array of numbers
// const a= [1,2,3,4]


// // Aray of strings
// const b = ["Deepak", "Kunal"]


// // Array of objects
// const c = [{
//   name: "Deepak Singh"
// },
// {
//   name: "Kunal Singh"
// }]

// // array of mix datatypes
// const d = [1, "Deepak", true]


// var first = ["Deepak","Pushkar", "Gopal"]

// var second = first
// var second = [...first]


// first[1] = "Attainu"

// console.log(first)
// console.log(second)

// cloning
// storing ref address

// object and array store ref add so if you want to make
// a copy, you have to clone

// es6 methods,
// higher order methods
// 2015
// Methods applicable on array

// find
// filter
// findIndex
var users = [{
    id: 0,
    name: "Deepak Singh",
    age: 23
},
{
    id: 1,
    name: "Kunal Singh",
    age: 24
},
{
    id: 1,
    name: "Pushkar Singh",
    age: 24
}]

const foundMember = users.find((user) => {
    return user.age === 35
})

console.log("yeah we got it", foundMember)

// const index = users.findIndex((user)=>{
//    return user.age ===  24

// }) 
// console.log("index", index)
// if not found it will return -1
// or else it will its index


// we have to filter out all the users whose age is 24


const allUser = users.filter((user) => {
    return user.age === 35
})

// return array consist of two object
console.log("allUser", allUser)
console.log("users", users)

// if not found it will return empty array


// function
// defining a functiom
function helloWorld() {
    console.log("Hello world")
}

// calling or invoking a function
helloWorld()























