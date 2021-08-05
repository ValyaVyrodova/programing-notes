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
    while (point2 >= 0) {
        let strCh = str[point1]
        let targetCh = target[point2]
        if (strCh != targetCh) {
            return false
        }
        point1--
        point2--
    }

    return true;
}

// console.log(confirmEnding("Bastian", "xBastian"))


// 7. Repeat a String

function repeatStringNumTimes(str, num) {
    let result = ''
    let numTimes = 1
    // debugger
    if (num <= 0) {
        result = '-'
    } else {
        while (numTimes <= num) {
            //numTimes = numTimes + 1
            numTimes += 1
            //result = result + str
            result += str
        }
    }
    return result;
}

// console.log(repeatStringNumTimes("abc", 2))

// 8. Truncate a String

function truncateString(str, num) {
    //debugger
    let result = []
    let lengthArr = str.split('')
    for (let i = 0; i < num; i++) {
        result += lengthArr[i]
    }
    return result + '...';
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))


// 9. Finders Keepers

function findElement(arr, func) {
    // debugger
    let num = 0
    let result = undefined
    for (let i = 0; i < arr.length; i++) {
        num = arr[i]
        if (func(num) === true) {
            result = num
            return result
        }
    }
    return result;
}

//console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))


// 10. Boo who. Check if a value is classified as a boolean primitive. Return true or false.

function booWho(bool) {
    if (bool === true || bool === false) {
        return true
    } else {
        return false
    }
    return bool;
}

// console.log(booWho(false))


//   function booWho(bool) {
//     return typeof bool === "boolean";
//   }


// 11. Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    let result = ''
    let words = str.split(' ');
    let alfabet = {
        'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G', 'h': 'H', 'i': 'I',
        'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N', 'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S',
        't': 'T', 'u': 'U', 'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z'
    }
    //debugger
    for (let i = 0; i < words.length; i++) {
        let word = words[i].split('')
        let bigLetter = alfabet[word[0]]
        if (bigLetter === undefined) {
            bigLetter = word[0]
        }
        word[0] = bigLetter
        let updatedWord = ''
        for (let j = 0; j < word.length; j++) {
            updatedWord += word[j]
        }
        result += updatedWord + ' '

    }
    return result
}

//console.log(titleCase("I'm a little tea pot"));


// 12. Slice and Splice

// Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     let result = [];
//     let i = 0
//     while (i < arr2.length) {
//         if (i === n) {
//             for (let j = 0; j < arr1.length; j++) {
//                 let el1 = arr1[j]
//                 result.push(el1)
//             }
//         }
//         let el2 = arr2[i]
//         result.push(el2)
//         i++
//     }

//     return result;
// }

// console.log(frankenSplice([10, 20, 30], [4, 5], 1))


function frankenSplice(arr1, arr2, n) {
    let res = []
    let i = 0
    while (i < arr2.length) {
        if (i === n) {
            let j = 0
            while (j < arr1.length) {
                res.push(arr1[j])
                j++
            }
        }
        res.push(arr2[i])
        i++
    }

    return res;
}

//console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))

// // 13. Falsy Bouncer
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
    let result = []
    let i = 0
    while (i < arr.length) {
        if (arr[i] === undefined || arr[i] === "" || arr[i] === false || arr[i] === null || arr[i] === 0 || arr[i] === NaN) {
            i++
            continue
        }
        result.push(arr[i])
        i++
    }
    return result
}

function bouncer1(arr) {
    let result = []
    let i = 0
    while (i < arr.length) {
        if (arr[i]) {
            result.push(arr[i])
        }
        i++
    }
    return result
}
// console.log(bouncer1([7, "ate", "", false, 9]))

// 14. Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) 
// once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] 
// and 19 is less than 20 (index 2) and greater than 5 (index 1).

// bubble sort

function getIndexToIns(arr, num) {
    for (j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1] // swap()
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

// task

function getIndexToIns(arr, num) {
    for (j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1] // swap()
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }
    }
    for (k = 0; k < arr.length; k++) {
        if (num < arr[k]) {
            return k-1
        
        }
    }
    return arr
}

console.log(getIndexToIns([5, 3, 50, 20, 2, 8, 15, 45], 21));
// 2, 3, 5, 8, 15, 20, 45, 50
