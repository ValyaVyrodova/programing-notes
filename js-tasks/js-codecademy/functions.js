// 1.

function getReminder() {
    console.log('Water the plants')
}

function greetInSpanish() {
    console.log('Buenas Tardes.')
}

// 2. 

function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.')
}

sayThanks()
sayThanks()
sayThanks()

// 3.

function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

sayThanks('Cole')
// 3.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}

// 4. 

function monitorCount(rows, columns) {
    return rows * columns
}
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)

// 5.

function monitorCount(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5, 4)
console.log(totalCost)


// 6.

const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
}
console.log(plantNeedsWater('Tuesday'))

// 7.

const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

// 8.

const plantNeedsWater = day => day === 'Wednesday' ? true : false;