# programing-notes

## Git commands

Set user name: `git config user.name --global "<First_Name Last_Name>"`

Set user email: `git config user.email --global "<email@example.com>"`

Stage changes: `git add .`

Commit: `git commit -m "<Text>"`

Push to remote repository: `git push`

## JS

### variables

Переменная - проименнованная область памяти, которую можно использовать для доступа к данным

`let x = 10` - это ключевое слово определяющее переменную значение которой может менятся
`const y = 5` - это ключевое слово опредедляющее переменную значение которой не меняется 
`var z = 3` - это устаревшее ключевое слово определяющее переменную, значение которой меняется.
Не используется потому, что использует не обьявленную ранее переменную, что приводит к ошибкам.

### codecademy
#### introduction 
Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.
An operator is a character that performs a task in our code.
A variable is a container for a value, they contain values and represent them with a name.
Var, short for variable, is a JavaScript keyword that creates, or declares, a new variable.
The let keyword signals that the variable can be reassigned a different value.

Another concept that we should be aware of when using let (and even var) is that we can declare a variable without assigning the variable a value. In such a case, the variable will be automatically initialized with a value of undefined

Data Types:
- Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
- String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ". Though we prefer single quotes. Some people like to think of string as a fancy word for text.
- Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
- Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
- Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null.
- Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
- Object: Collections of related data.

Arithmetic Operators
Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %
The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

Concatenation - the process of appending one string to another. 

Methods are actions we can perform
We call, or use, these methods by appending an instance with:
- a period (the dot operator)
- the name of the method
- opening and closing parentheses
E.g. 'example string'.methodName().
console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim()); // Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

There are a few general rules for naming variables:

Variable names cannot start with numbers.
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.
Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN’s keyword documentation.


increment operator (++) and decrement operator (--)

The typeof keyword returns the data type (as a string) of a value.

#### Conditional Statements

 A conditional statement checks a specific condition(s) and performs a task based on the condition(s).

- if, else if, and else statements
- comparison operators
- logical operators
- truthy vs falsy values
- ternary operators
- switch statement

```js
if (true) {
  console.log('This message will print!');
}
// Prints: This message will print!
```

`if...else` statements allow us to automate solutions to yes-or-no questions, also known as binary decisions.

When writing conditional statements, sometimes we need to use different types of operators to compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

Less than: <
Greater than: >
Less than or equal to: <=
Greater than or equal to: >=
Is equal to: ===
Is not equal to: !==

In JavaScript, there are operators that work with boolean values known as logical operators. 

- the and operator (&&)
- the or operator (||)
- the not operator, otherwise known as the bang operator (!)

Truthy and Falsy

Sometimes, you’ll want to check if a variable exists and you won’t necessarily want it to equal a specific value — you’ll only check to see if the variable has been assigned a value.

```js
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}
```
The list of falsy values includes:

- 0
- Empty strings like "" or ''
- null which represent when there is no value at all
- undefined which represent when a declared variable lacks a value
- NaN, or Not a Number

Truthy and Falsy Assignment

```js
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

// OR

let defaultName = username || 'Stranger';

```

Ternary Operator

```js 
let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// OR

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

```
In the example above:

The condition, isNightTime, is provided before the ?.
Two expressions follow the ? and are separated by a colon :.
If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes.
Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.


A switch statement provides an alternative syntax that is easier to read and write.
let groceryItem = 'papaya';
 
```js
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
// Prints 'Papayas are $1.29'
```

