// function sayHello(name, callback) {
//     console.log(name)
//     callback()
// }
// function goodBye() {
//     console.log("good bye")
// }
// sayHello("shisir", goodBye)


// const fruits = ['apple', 'mango', 'banana']
// fruits.forEach(function (fruit) {
//     console.log(fruit)
// })


// const numbers = [1, 2, 3, 4, 5]
// const squareNumbers = []
// numbers.forEach(function (number) {
//     squareNumbers.push(number ** 2)
// })

// console.log(squareNumbers)

//using the map functions

// const squareNumbers = numbers.map(function (number) {
//     return number ** 2

// })
// console.log(squareNumbers)


// const users = [
//     {
//         id: 1,
//         firstName: "shisir",
//         lastName: "shahi",
//         address: "salyan"

//     }, {

//         id: 2,
//         firstName: "kamal",
//         lastName: "thakuri",
//         address: "kalikot"
//     }, {

//         id: 3,
//         firstName: "kamala",
//         lastName: "singh",
//         address: "humla"
//     }
// ]

// users.forEach(function (user) {
//     console.log(user.firstName)
// })

// const result = users.map(function (user) {
//     return {
// id: user.id,
// firstName: user.firstName,
// lastName: user.lastName,
//         ...user,
//         fullName: user.firstName + ' ' + user.lastName
//     }

// })
// console.log(result)





// const numbers = [1, 2, 3, 4]
// [
//     {
//         number: 1,
//         name: 'A'
//     },
//     {
//         number: 2,
//         name: 'A'
//     },
//     {
//         number: 3,
//         name: 'A'
//     },
//     {
//         number: 4,
//         name: 'A'
//     }
// ]

// const demo = numbers.map(function (number) {
//     return {
//         number: number,
//         name: 'A'
//     }
// })
// console.log(demo)


//filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNumber = numbers.filter(function (number) {
//     return number % 2 == 0;
// })
// console.log(newNumber)

// const books = [
//     {
//         title: "shisir shahi",
//         auther: "shisir shahi",
//         year: 2000
//     },
//     {
//         title: "book2",
//         auther: "shisir shahi",
//         year: 2021
//     },
//     {
//         title: "book3",
//         auther: "shisir shahi",
//         year: 2008
//     },
//     {
//         title: "book4",
//         auther: "shisir shahi",
//         year: 1993
//     },
//     {
//         title: "book5 ",
//         auther: "shisir shahi",
//         year: 2005
//     },
//     {
//         title: "book6",
//         auther: "shisir shahi",
//         year: 1990
//     },
// ]

// const result = books.filter(function (book) {
//     return book.year > 2000
// })
// console.log(result)


//reduce



// const numbers = [1, 2, 3, 4, 5]

// const output = numbers.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0)
// console.log(output)


// const cardItems = [
//     {
//         name:"product A",
//         quantity:2,
//         price:50
//     },
//      {
//         name:"product A",
//         quantity:5,
//         price:200
//     },
//      {
//         name:"product A",
//         quantity:1,
//         price:20
//     },
// ]



const cardItems = [
    { name: "product A", quantity: 2, price: 50 },
    { name: "product B", quantity: 5, price: 200 },
    { name: "product C", quantity: 1, price: 20 },
];

const totals = cardItems.reduce((acc, item) => {
    // 1. Total Products (the number of objects in the array)
    acc.totalProducts += 1;

    // 2. Total Quantity (sum of all quantity fields)
    acc.totalQuantity += item.quantity;

    // 3. Total Price (sum of quantity * price for each item)
    acc.totalPrice += item.quantity * item.price;

    return acc;
}, {
    totalProducts: 0,
    totalQuantity: 0,
    totalPrice: 0
});

console.log(totals);



