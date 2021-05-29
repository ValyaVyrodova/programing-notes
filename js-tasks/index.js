
const newArray = [234, 48, 25, 93, 18, 64, 52]

// 1. printarr

function printArray(numbers) {
    for (let i = 0; i <= numbers.length; i++) {
        const number = numbers[i]
        console.log(number)
    }
}
//printArray(newArray)


// 2. sum

function newSumArray(numbers) {
    let result = 0
    //debugger
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        result = number + result
    }
    console.log(result)
    return result
}
newSumArray(newArray)


// 3. diff

function diffArray(numbers) {
    let results = 0
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        results = results - number
    }
    console.log(results)
}

//diffArray(newArray)

function newDiffArray(numbers) {
    let sum = newSumArray(numbers)
    let result = sum * -1
    console.log(result)
}

newDiffArray(newArray)



// 4. multiarr



// 5. max number
const newArray1 = [48, 25, 93, 18, 65, 52, 64]

function findMaxNumber(arrayNumbers) {
    let max = 0
    for (let i = 0; i < arrayNumbers.length; i++) {
        const number = arrayNumbers[i]
        if (number > max) {
            max = number
        }
    }
    return max
}

let maxNumber = findMaxNumber(newArray1)
console.log(maxNumber)

// 6. min number






















const namesArray = ['Valentyna', 'Elena', 'Oleksandra', 'Kostyantyn']
// function massivName(names) {
//     names[0] = 'Valentyna'
//     names[1] = 'Elena'
//     names[2] = 'Oleksandra'
//     names[3] = 'Kostyantyn'
// }

function printArray(names) {
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        console.log(name)
    }
}

// printArray(namesArray)
// printArray(namesArray)

// 2. a
const numberArray = [2, 3, 5, 10, 15, 25, 17]
function sumArray(numbers) {
    //debugger
    let result = 0
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        //        let temp = result + number 
        //        result = temp 
        result = result + number
    }
    console.log(result)

}
//sumArray(numberArray)

// 2. b
const numArray = [-1, 23, 754, 343, 45, 87, 745, 123, 94]

function multiArray(multiplications) {
    let result = 1
    for (i = 0; i < multiplications.length; i++) {
        const multiplication = multiplications[i]
        result = result * multiplication
    }
    console.log(result)
}

//multiArray(numArray)

// Implement a function that accepts an array
// and a number and returns true if a number exists in an array

function isNumberExist(numbers, findThisNumber) {
    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i]
        if (findThisNumber == currentNumber) {
            console.log('true')
        } else {
            console.log('false')
        }
    }
}

//isNumberExist(numArray, 6)

function printNumbers(maxNumber) {
    //console.log(maxNumber)
    for (let i = 0; i < maxNumber; i++) {
        console.log(i)
    }
}
//printNumbers(10000)

function colour(times) {
    const words = 'Black'
    // for (let i = 0; i < times; i++) {
    //     console.log(words)
    // }

    let i = 0;
    while (i < times) {
        console.log(words)
        i = i + 1
    }
}
//colour(10000)

function printSequence(maxNumber) {
    for (let i = 1; i <= maxNumber; i++) {
        console.log(i)
    }
}
//printSequence(10)

