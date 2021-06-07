// 9.

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift()
console.log(groceryList)
groceryList.unshift('popcorn')
console.log(groceryList)
console.log(groceryList.slice(1, 4))
console.log(groceryList)
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)

// 10.
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr) {
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept)

function removeElement(newArr) {
    const lastElement = newArr.pop()
    // return lastElement
}
console.log(removeElement(concept))
console.log(concept)

// 11.
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop()
console.log(secretMessage.length)
secretMessage.push('to ', 'Program')
secretMessage[7] = 'right'
secretMessage.shift()
secretMessage.unshift('Programming')
secretMessage.splice(6, 5, 'know')
console.log(secretMessage.join(' '))