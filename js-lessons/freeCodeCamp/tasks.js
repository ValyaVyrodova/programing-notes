// 1.

function convertToF(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return fahrenheit;
}

//console.log(convertToF(-30))

// 2. Reverse a String. Reverse the provided string. 
//You may need to turn the string into an array before you can reverse it. Your result must be a string.

function reverseString(str) {
    const charsArray = str.split('');
    let result = ""
    for (let i = charsArray.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}
//console.log(reverseString('Hello'))


// 3. Return the factorial of the provided integer.

function fuctorialize(num) {
    let result
    if (num === 0) {
        return 1
    } else {
        return num * fuctorialize(num - 1)
    }
}
// console.log(fuctorialize(5))

// 4. Find the Longest Word in a String

function findLongestWordLength(str) {
    const wordsArray = str.split(' ')
    let result = 0;
    for (let i = 0; i < wordsArray.length; i++) {
        let wordLength = wordsArray[i].length
        if (result < wordLength) {
            result = wordLength
        }
    }
    return result;
}

// console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"))

// 5. Return Largest Numbers in Arrays

function largestOfFour(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let littleArr = arr[i]
        let maxNumber = 0
        for (let j = 0; j < littleArr.length; j++) {
            if (maxNumber < littleArr[j]) {
                maxNumber = littleArr[j]
            }
        }
        result.push(maxNumber)
    }

    return result
}

// console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))


// 6. Confirm the Ending

function confirmEnding(str, target) {
    let point1 = str.length - 1;
    let point2 = target.length - 1;
    while(point2 >= 0) {
        let strCh = str[point1]
        let targetCh = target[point2]
        if (strCh != targetCh){
            return false
        }
        point1--
        point2--
    }
    
    return true;
  }
  
  console.log(confirmEnding("Bastian", "xBastian"))
