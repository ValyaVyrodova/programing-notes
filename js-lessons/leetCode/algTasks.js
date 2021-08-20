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
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))


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

console.log(findMaxConsecutiveOnes1([1, 1, 0, 1, 1, 1]))


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

console.log(findNumbers([12, 345, 2, 6, 7896]))





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

console.log(sortedSquares([-7, -3, 2, 3, 11]))