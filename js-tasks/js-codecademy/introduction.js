// 1. Kelvin Weather

const kelvin = 0 // forecast in Kelvin
let celsius = kelvin - 273 // forecast in Celsius
let fahrenheit = celsius * (9 / 5) + 32 // calculate the Fahrenheit
fahrenheit = Math.floor(fahrenheit) // korrect the result 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33 / 100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Newton.`)



// 2. Dogs years
const myAge = 22
let earlyYears = 2
earlyYears *= 10.5
let laterYears = myAge - 2
laterYears *= 4
console.log(earlyYears)
console.log(laterYears)
let myAgeInDogYears = earlyYears + laterYears
let myName = 'Valya'.toLowerCase()
console.log(myName)
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)