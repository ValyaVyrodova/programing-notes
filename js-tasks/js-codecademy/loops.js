// 1.

for (let i = 5; i < 11; i++) {
    console.log(i)
}

// 2. The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0

for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}

// 3. 

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i])
}

// 4. 

const bobsFollowers = ['Nastya', 'Max', 'Anna', 'Dmytro']
const tinasFollowers = ['Katya', 'Nastya', 'Anna']
let mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(tinasFollowers[j])
        }
    }
}
console.log(mutualFollowers)

// 5.

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = ''
while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)]
    console.log(currentCard)
}

// 6.

let cupsOfSugarNeeded = 5
let cupsAdded = 0
do {
    cupsAdded++
    console.log(cupsAdded + 'cups was added')
} while (cupsAdded < cupsOfSugarNeeded)

// 7.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i])
    if (rapperArray[i] === 'Notorious B.I.G.') {
        break
    }
}
console.log(`And if you don't know, now you know.`)

// 8.
let input = 'a whale of a deal!'
const vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []
for (let i = 0; i < input.length; i++) {
    // console.log('i is ' + i)
    for (let j = 0; j < vowels.length; j++) {
        //console.log('j is '+ j);
        if (input[i] === vowels[j]) {
            resultArray.push(vowels[j])
            //console.log(resultArray)
        }
    }
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i])
    }
}
console.log(resultArray.join('').toUpperCase())