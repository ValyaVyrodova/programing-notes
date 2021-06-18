# programing-notes

`ctrl + K + C ` закоментировать код
`ctrl + K + U` раскоментировать код
`alt + shift + F` отформатировать код

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

String interpolation is when we insert, or interpolate, variables into strings using template literals.

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
Add: `+`
Subtract: `-`
Multiply: `*`
Divide: `/`
Remainder:`%`
The remainder operator, sometimes called modulo, returns the number that remains after the right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals 2 because 3 fits into 11 three times, leaving 2 as the remainder.

Concatenation - the process of appending one string to another. 

Methods are actions we can perform
We call, or use, these methods by appending an instance with:
- a period (the dot operator)
- the name of the method
- opening and closing parentheses
E.g. 
example 
```js
string.methodName().
console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim()); // Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
```

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

- Less than: `<`
- Greater than: `>`
- Less than or equal to: `<=`
- Greater than or equal to: `>=`
- Is equal to: `===`
- Is not equal to: `!==`

In JavaScript, there are operators that work with boolean values known as logical operators. 

- the and operator `(&&)`
- the or operator `(||)`
- the not operator, otherwise known as the bang operator `(!)`

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
- Empty strings like `""` or `''`
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

- The condition, isNightTime, is provided before the `?`.
- Two expressions follow the `?` and are separated by a colon :.
- If the condition evaluates to true, the first expression executes.
- If the condition evaluates to false, the second expression executes.
- Like if...else statements, ternary operators can be used for conditions which evaluate to true or false.


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

The break keyword tells the computer to exit the block and not execute any more code or check any other cases inside the code block. 

Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.

An if statement checks a condition and will execute a task if that condition evaluates to true.

`if...else` statements make binary decisions and execute different code blocks based on a provided condition.

We can add more conditions using else if statements.
- Comparison operators, including `<, >, <=, >=, ===,` and `!==` can compare two values.

- The logical and operator, `&&`, or `“and”`, checks if both provided expressions are truthy.

- The logical operator `||`, or `“or”`, checks if either provided expression is truthy.

- The bang operator, `!`, switches the truthiness and falsiness of a value.

- The ternary operator is shorthand to simplify concise `if...else` statements.

A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.


#### FUNCTIONS

A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

- Arguments are the values passed into a function. 
- Parameters act as placeholders for argument values.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

a function declaration binds a function to an identifier

Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called.

- Function Declaration: функция в основном потоке кода
```js
function sum(a, b) {
  let result = a + b;

  return result;
}
```
- Function Expression: функция как часть выражения
```js
let sum = function(a, b) {
  let result = a + b;

  return result;
};
```
- Стрелочные функции:
```js
// выражение в правой части
let sum = (a, b) => a + b;

// многострочный код в фигурных скобках { ... }, здесь нужен return:
let sum = (a, b) => {
  // ...
  return a + b;
}

// без аргументов
let sayHi = () => alert("Привет");

// с одним аргументом
let double = n => n * 2;
```
Функции всегда что-нибудь возвращают. Если нет оператора `return`, результатом будет `undefined`.

RETURN

To return a value from a function, we use a return statement.

When a function is called, the computer will run through the function’s code and evaluate the result of calling the function. By default that resulting value is undefined.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { }

It’s good to be aware of the differences between function expressions, arrow functions, and function declarations.

#### Blocks and Scope

Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.

Blocks are statements that exist within curly braces {}.

Global scope refers to the context within which variables are accessible to every part of the program.

Global variables are variables that exist within global scope.

Block scope refers to the context within which variables that are accessible only within the block they are defined.

Local variables are variables that exist within block scope.

Global namespace is the space in our code that contains globally scoped information.

Scope pollution is when too many variables exist in a namespace or variable names are reused.

#### Arrays

- Arrays are lists that store data in JavaScript.

- Arrays are created with brackets `[]`.

- Each item inside of an array is at a numbered position, or index, starting at 0.

- We can access one item in an array using its index, with syntax like: `myArray[0]`.

- We can also change an item in an array using its index, with syntax like `myArray[0] = 'new string';`

- Arrays have a length property, which allows you to see how many items are in an array.

- Arrays have their own methods, including `.push()` and `.pop()`, which add and remove items from an array, respectively.

- Arrays have many methods that perform different tasks, such as `.slice()` and `.shift()`, you can find documentation at the Mozilla Developer Network website.

- Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.

- Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.

- Arrays mutated inside of a function will keep that change even outside the function.
Arrays can be nested inside other arrays.

- To access elements in nested arrays chain indices using bracket notation.

#### Loops

A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 

A for loop contains three expressions separated by `;` inside the parentheses:

- an initialization starts the loop and can also be used to declare the iterator variable.
- a stopping condition is the condition that the iterator variable is evaluated against — if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
- an iteration statement is used to update the iterator variable on each loop.

Nested loop -  a loop running inside another loop.

`do...while` loops run code at least once— only checking the stopping condition after the first execution

The `break` keyword allows programs to leave a loop during the execution of its block

#### Iterator methods

- `.forEach()` is used to execute the same code on every element in an array but does not change the array and returns `undefined`.

```js
// 1
groceries.forEach(groceryItem => console.log(groceryItem));

// 2
function printGrocery(element){
  console.log(element);
}
 groceries.forEach(printGrocery);
```

- When `.map()` executes the same code on every element in an array and returns a new array with the updated elements.

```js
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
  console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
});
```
- `.filter()` checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.

- `.findIndex()` returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.

- `.reduce()`  iterates through an array and takes the values of the elements and returns a single value.
The `.reduce()` method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!).

 Mozilla Developer Network - others iterator methods




### Object Literals

Objects in JavaScript are containers that store data and functionality.

Use curly braces `{}` to designate an object literal:

`let spaceship = {}; // spaceship is an empty object`

We fill an object with unordered data. This data is organized into key-value pairs.

We make a key-value pair by writing the key’s name, or identifier, followed by a colon and then the value.


- Objects store collections of key-value pairs.

- Each key-value pair is a property—when a property is a function it is known as a method.

- An object literal is composed of comma-separated key-value pairs surrounded by curly braces.


```js
// An object literal with two key-value pairs
let spaceship = {           // OBJECT
  'Fuel Type': 'diesel',   // 'key': *value
  color: 'silver'         // key': *value
};
```

```js
let objectName = {
  'Property Name': 'Property Value',
  propName: 'Prop Value'
}
```
- `let variableName = objectName['propertyName']`

- `console.log(objectName[variableName])`

Objects are mutable meaning we can update them after we create them!

- We can use either dot notation, ., or bracket notation, [], and the assignment operator, = to add new key-value pairs to an object or change an existing property.

Add 

objectName['Property Name'] = 'New Property Value';
objectName.propName = 'New Prop Value';

```js
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'


const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe' 
};
 
delete spaceship.mission;  // Removes the mission property
```


```js
let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, т.к. обе переменные ссылаются на один и тот же объект
alert( a === b ); // true


let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // -false
```

#### Methods

When the data stored on an object is a function we call that a method.
Функцию, которая является свойством объекта, называют методом этого объекта.

A property is what an object has, while a method is what an object does.


#### Looping Through Objects (for ... in)

```js
for (key in object) {
  // тело цикла выполняется для каждого свойства объекта
}
```

```js
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
```


```js
for (let variableName in outerObject.innerObject) {
  console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
};


for (let variableName in outerObject.innerObject) {
  console.log(`${variableName}: ${outerObject.innerObject[variableName].propertyName}`)
};
```
#### Arrow Functions and this 

Avoid using arrow functions when using this in a method!

```js
const goat = {
  name: 'Billy',
  color: 'biege',
  giveDetails(){
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}

// -OR

const goat = {
  name: 'Billy',
  color: 'biege',
  giveDetails: function() {
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}
```

#### Getters and Setters

Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи. При литеральном объявлении объекта они обозначаются get и set

Getters can return the value of internal properties and setters can safely reassign property values. 

```js
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'
```
#### Factory Functions

```js
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

```
#### Property Value Shorthand

```js
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
```

#### Destructured Assignment

```js
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania'

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
```

The object that a method belongs to is called the calling object.
