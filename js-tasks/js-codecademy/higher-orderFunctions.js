// 1.
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
}

// Write your code below

let is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes
is2p2()
consol.log(is2p2.name)

// 2.

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
};

// Write your code below
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)
const checkConsistentOutput = (func, val) => {
    let f1 = func(val)
    let f2 = func(val)
    if (f1 === f2) {
        return f1
    } else {
        return 'This function returned inconsistent results'
    }
}
console.log(checkConsistentOutput(addTwo, 8))


// 3.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
// Iterate over fruits below
fruits.forEach(fruitsItem =>
    console.log('I want to eat a ' + fruitsItem))


// 4.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0])
console.log(secretMessage.join(''));
const bigNumbers = [100, 200, 300, 400, 500];
// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => bigNumber / 100)
console.log(smallNumbers)

// 5.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => randomNumber < 250)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(
    favoriteWord => favoriteWord.length > 7)


// 6.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal =>
    animal === 'elephant')
const startsWithS = animals.findIndex(startS =>
    startS[0] === 's')
console.log(foundAnimal)
console.log(startsWithS)

// 7.

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of aaccumulator: ', accumulator)
    console.log('The value of currentValue: ', currentValue)
    return accumulator + currentValue
}, 10)
console.log(newSum)

// 8.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word =>
  word.length > 5)

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
 return word.length > 5
 } ));

 // 9.
 //  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);


