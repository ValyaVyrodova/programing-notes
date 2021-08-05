// 1.
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.')
  }
  else {
    reject('That item is sold out.')
  }
}
const orderSunglasses = () => {
  return new Promise(myExecutor)
}
const orderPromise = orderSunglasses()
console.log(orderPromise)


// 2.
console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log("This is not the first line of code");
}
setTimeout(usingSTO, 100)


// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

// 3.

const { checkInventory } = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolved) => {
  console.log(resolved)
};

const handleFailure = (rejected) => {
  console.log(rejected)
};

checkInventory(order).then(handleSuccess, handleFailure)

// 4.
const { checkInventory } = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:
checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure);


// 5. 

const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray)

  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray)
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });



// 6.

const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
  .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray)
  })
  .then((resolvedValueArray) => {
    return shipOrder(resolvedValueArray)
  })
  .then((successMessage) => {
    console.log(successMessage)
  })


// 7.

const { checkAvailability } = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
  console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')
const checkPants = checkAvailability('pants', 'Favorite Supply Co.')
const checkBags = checkAvailability('bags', 'Favorite Supply Co.')

Promise.all([checkSunglasses, checkPants, checkBags])
  .then(onFulfill)
  .catch(onReject)