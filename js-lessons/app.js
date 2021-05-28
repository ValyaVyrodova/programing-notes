// const num = 42 // integer
// const float = 42.42 // float
// console.log(float)
// const pow = 10e3
// console.log(pow)
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53) - 1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('MAX_VALUE', Number.POSITIVE_INFINITY)
// console.log('MIN_VALUE', Number.NEGATIVE_INFINITY)
// console.log('1/0', 1 / 0)
// console.log(Number.NaN)
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))

// const stringInt = '40'
// const stringFloat = '40.40'
// console.log(stringInt + 2) // 402
// console.log(Number.parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
// console.log(+stringInt + 2)

// console.log(parseInt(stringFloat) + 2) //42
// console.log(parseFloat(stringFloat) + 2)
// console.log(+stringFloat + 2)

// console.log(0.4 + 0.2) // 0.60000001
// console.log((2/5) + (1/5)) //0.60000001
// console.log((0.4 + 0.2).toFixed(4)) // string
// console.log((0.4 + 0.2).toFixed(1)) // string
// console.log(+(0.4 + 0.2).toFixed(1))
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))

//BigInt

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(typeof 900719925474099199999)
// console.log(typeof 900719925474099199999n) //bigInt
// console.log(900719925474099199999n - 900719925474099199n)
// console.log(-900719925474099199999n)
// console.log(-900719925474099199999n.585) // error

//console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) //2n

// Math