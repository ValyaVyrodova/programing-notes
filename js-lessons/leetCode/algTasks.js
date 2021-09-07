// 1. Given a binary array nums, return the maximum number of consecutive 1's in the array.

const findMaxConsecutiveOnes = function (nums) {
    let result = 0
    let maxNum = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            maxNum = maxNum + nums[i]
            if (maxNum > result) {
                result = maxNum
            }
        } else {
            maxNum = 0
        }
    }
    return result
};
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))


const findMaxConsecutiveOnes1 = function (nums) {
    let maxSum = 0
    let newSum = 0

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            newSum = newSum + nums[j]
            if (newSum > maxSum) {
                maxSum = newSum
            }
        } else {
            newSum = 0
        }
    }

    return maxSum
};

// console.log(findMaxConsecutiveOnes1([1, 1, 0, 1, 1, 1]))


// 2. Given an array nums of integers, return how many of them contain an even number of digits.

let findNumbers = function (nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let numCount = 0

        while (num >= 1) {
            num = num / 10
            numCount += 1
        }

        if (numCount % 2 === 0) {
            result += 1
        }
    }
    return result
};

// console.log(findNumbers([12, 345, 2, 6, 7896]))


// 3. Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.


let sortedSquares = function (nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                let tempNum = nums[j + 1]
                nums[j + 1] = nums[j]
                nums[j] = tempNum
            }
        }
    }
    return nums
};

// console.log(sortedSquares([-7, -3, 2, 3, 11]))


// 4. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let twoSum = function (nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j]
            if (sum === target) {
                result.push(i, j)
                return result
            }
        }
    }
    return result
};

console.log(twoSum([2, 7, 11, 15], 9))

// 6.

let arraySign = function (nums) {
    let result = undefined
    let product = 1

    for (i = 0; i < nums.length; i++) {
        const num = nums[i]
        product = num * product

    }
    if (product > 0) {
        result = 1
    } else if (product === 0) {
        result = 0
    } else if (product < 0) {
        result = -1
    }

    return result
};



let arraySign = function (nums) {
    let result = undefined
    let res = 0

    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return result = 0
        } else if (nums[i] < 0) {
            res = res + 1
            if (res % 2 === 0) {
                result = 1
            } else if (res % 2 !== 0) {
                result = -1
            }
        } else {
            result = 1
        }
    }
    return result
};

// 7.

let fizzBuzz = function (n) {
    let res = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("FizzBuzz")
        } else if (i % 3 === 0) {
            res.push("Fizz")
        } else if (i % 5 === 0) {
            res.push("Buzz")
        } else {
            res.push(i.toString())
        }
    }
    return res
};