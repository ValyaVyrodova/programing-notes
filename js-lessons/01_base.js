// 1 Variables 

//var name = 'Valentyna'
// const firstName = 'Valentyna'
//const lastName = 'Vyrodova' // string
//const age = 26 // number
// const isProgrammer = true // boolean
//name = 'Valya'
//age = false
//console.log(firstName)
//console.log(age)
//console.log(isProgrammer)
// const _ = 'private'
// const $ = 'some value'
// const if = 'mkef' // err
// const withNum5 = '5'
// const 5withNum = 5 // err

// 2 Mutation
//console.log('Person name: ' + firstName + ', person age: ' + age)
//console.log(age.toString())
//alert('Person name: ' + firstName + ', person age: ' + age)
//prompt('Please enter your last name')
//const lastname = prompt ('Please enter your last name')
//alert (firstName + ' ' + lastname)


// Operators

// let currentYear = 2021
// const birthYear = 1994

//const age = currentYear - birthYear
//console.log (age)
// const a = 10
// const b = 5
// let c = 32
//c = c + a
// c += a
// c -= a
// c *= a
// c /=a

// console.log(a + b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// //console.log(currentYear++)
// //console.log(currentYear)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Data types

// const isProgrammer = true // boolean
// const name = 'Valentyna'
// const age = 26
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5. Operator precedence
// const fullAge = 26
// const birthYear = 1994
// const currentYear = 2021

// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 26 >= 27
// console.log(isFullAge)

// 6. Conditional statement 
// const courseStatus = 'pending' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log( 'Курс пока находится в процессе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// const isReady = false

// if (isReady) {  // isReady === true
//     console.log('Все готово')
// } else {
//     console.log('Все не готово')
// }

//Тернарное выражение
// isReady ? console.log ('Все готово') : console.log('Все не готово')


// 7. Булевая логика

// // 8. Functions 
// function calculateAge(year) {
//    return 2020 - year
// }
// //const myAge = calculateAge(1994)
// //console.log(myAge)
// //console.log(calculateAge(1994))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)    
//     } else {
//         console.log('Вообще-то это уже будущее')
//     }
// }
// logInfoAbout('Валентина', 1994)
// logInfoAbout('Kostya', 1996)
// logInfoAbout('Женя', 2023)

// 9. Arrays
//const cars = ['Mersedess', 'Ford', 'Mazda']
//console.log(cars)
//const cars = new Array('Mersedess', 'Ford', 'Mazda')
//console.log(cars)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars.length)

// cars[0] = 'Porsche'
// cars[3] = 'Mersedes'
// cars[cars.length] = 'Zaporozhez'
// console.log(cars)

// 10. Loop
// const cars = ['Mersedess', 'Ford', 'Mazda']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// const cars = ['Mersedess', 'Ford', 'Mazda']
// for (let car of cars) {
// console.log(car)

// }

// 11. Objects
const person = {
    firstName: 'Valentyna',
    lastName: 'Vyrodova',
    Year: '1994',
    languages: ['Ukraine', 'Russian', 'English'],
    hasWife: false,  
    greet: function () {
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'Year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()
