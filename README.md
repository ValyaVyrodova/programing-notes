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


### CLASSES

Classes are templates for objects.

#### Constructor

Javascript calls a constructor method when we create a new instance of a class.

```js
class emptyClass {
  constructor(propertyOne, propertyTwo, propertyThree) {
    this._propertyOne = propertyOne;
    this._propertyTwo = propertyTwo;
    this._propertyThree = propertyThree;
  } 
}
```


```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
```

```js
constructor(inputOne, inputTwo) {
  this.inputOne = inputOne;
  this.inputTwo = inputTwo;
}

```

#### Instance /пример

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  } 
}
 
const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
```

To create an instance of a class, you can use the syntax below:

`const instance = ClassName('arg1', 'arg2');`


#### Methods

Class method and getter syntax is the same as it is for objects except you can not include commas between methods.

Property names with underscores (`_name` and `_behavior`) indicate that these properties should not be accessed directly.

```js
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}
```

```js
get keyOne() {
  return this._keyOne;
}
```

```js
methodOne(keyOne) {
  // Do something here
}
```

#### Inheritance

Inheritance is when we create a parent class with properties and methods that we can extend to child classes.
(Purpose is to share data and methods between objects)

```js
class ChildClass extends ParentClass {
 
}
```

```js
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
```
The extends keyword makes the methods of the animal class available inside the cat class.

- The super keyword `calls` the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.

In a `constructor()`, you must always call the `super` method before you can use the `this` keyword — if you do not, JavaScript will throw a `reference error`. To avoid reference errors, it is best practice to call `super` on the first line of subclass constructors.

```js
bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance 
console.log(bryceCat.behavior); // Log value saved to behavior
```
In addition to the inherited features, child classes can contain their own properties, getters, setters, and methods.

#### Static Methods

The `.now()` method is static, so you can call it directly from the class, but not from an instance of the class.
Static methods are called on the class, but not on instances of the class.

```js
static generatePassword() {
    return Math.floor(Math.random() * 10000)
}
```



####  ***

If the value is true, then change it to false. If the value is false, then change it to true.

```js
methodName() {
  this._booleanProperty = !this._booleanProperty;
}
```

### BROWSER COMPATIBILITY AND TRANSPILATION

caniuse.com — a website you can use to look up HTML, CSS, and JavaScript browser compatibility information.
Babel — A JavaScript package that transpiles JavaScript ES6+ code to ES5.

Транспиляция — преобразование программы, при котором используется исходный код программы, написанной на одном языке программирования в качестве исходных данных, и производится эквивалентный исходный код на другом языке программирования.

Transpilation is the process of converting one programming language to another.


Use Babel to transpile the new, easy-to-write version of JavaScript (ES6) to the old, browser-compatible version of JavaScript (ES5).


- Wrote one command in your terminal to transpile ES6 code to ES5
In the terminal window type:

`npm install babel-cli` //в терминале!!! This installs one of the two required Babel packages.
`npm install babel-preset-env` // This installs the second of two required Babel packages.
`npm run build`


- Setup a JavaScript project that transpiles code when you run `npm run build` from the root directory of a JavaScript project.

Before we install Babel, we need to setup our project to use the node package manager (npm).

`npm init`
Before we can add Babel to our project directory, we need to run `npm init`. 

- `npm init` — A terminal command that creates a package.json file.
- package.json — A file that contains information about a JavaScript project.



Run `ls` in the terminal to see the file structure of your current directory.\

#### Install Node Packages

- `npm install` — A command that installs Node packages.

The install command creates a folder called node_modules and copies the package files to it. The install command also installs all of the dependencies for the given package.
`npm install`

- `babel-cli` — A Node package that contains command line tools for Babel.
- `babel-preset-env` — A Node package that contains ES6+ to ES5 syntax mapping information.


`$ npm install babel-cli -D`
`$ npm install babel-preset-env -D`

The -D flag instructs npm to add each package to a property called devDependencies in package.json.

`touch .babelrc`

The preset specifies the version of your initial JavaScript file.


To specify that we are transpiling code from an ES6+ source, we have to add the following JavaScript object into .babelrc:
```js
{
  "presets": ["env"]
}
```

The property’s value, `"babel src -d lib"`, is a command line method that transpiles ES6+ code to ES5.

```js
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
```

#### Build


Runs the build script in package.json.

`"build": "babel src -d lib"`

`npm run build`

`.babelrc` — A file that specifies the version of the JavaScript source code.
- `"build"` script — A package.json script that you use to tranpsile ES6+ code to ES5.
- `npm run build` — A command that runs the build script and transpiles ES6+ code to ES5.


#### The steps needed to set up a project for transpilation:

1. Initialize your project using `npm init` and create a directory called `src`

2. Install babel dependencies by running

`npm install babel-cli -D`
`npm install babel-preset-env -D`

3. Create a `.babelrc` file inside your project and add the following code inside it:
*Run `touch .babelrc` to add the .babelrc file to the root directory.

```js
{
  "presets": ["env"]
}
```

4. Add the following script to your scripts object in package.json:
`"build": "babel src -d lib"`// under the "test'

5. Run `npm run build` whenever you want to transpile your code from your src to lib directories.


### Runtime Environment

A runtime environment is where your program will be executed. 

JavaScript code may be executed in one of two runtime environments:

- a browser’s runtime environment
- the Node runtime environment

In each of these environments, different data values and functions are available, and these differences help distinguish front-end applications from back-end applications.

Front-end JavaScript applications are executed in a browser’s runtime environment and have access to the window object.
Back-end JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks attached to the server.

#### Modules

Modules are reusable pieces of code in a file that can be exported and then imported for use in another file. A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

Note: The words “module” and “file” are often used interchangably

#### Implementations of Modules in JavaScript: Node.js vs ES6

1. The Node runtime environment and the module.exports and require() syntax.
2. The browser’s runtime environment and the ES6 import/export syntax.

Executing this file using Node would look something like this:
```js
 $ node water-limits.js
The freezing point of water in Fahrenheit is 32
The boiling point of water in Fahrenheit is 212
```

To create a module, you simply have to create a new file where the functions can be declared. Then, to make these functions available to other files, add them as properties to the built-in module.exports object:
```js
/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}
 
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
 
module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};
```
`module.exports` is an object that is built-in to the Node.js runtime environment. Other files can now import this object, and make use of these two functions, with another feature that is built-in to the Node.js runtime environment: the `require()` function.

The `require()` function accepts a string as an argument. That string provides the file path to the module you would like to import.

```js
/* water-limits.js */
const converters = require('./converters.js');
 
const freezingPointC = 0;
const boilingPointC = 100;
 
const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);
 
console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
```

In this case, `./` is a relative path indicating that converters.js is stored in the same folder as water-limits.js. When you use `require()`, the entire module.exports object is returned and stored in the variable converters. This means that both the .`celsiusToFahrenheit()` and `.fahrenheitToCelsius()` methods can be used in this program!

#### Using Object Destructuring to be more Selective With require()

With this approach, the remainder of the program works the same way but the program avoids importing a function it does not need.

```js
/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js');
 
const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(input);
 
console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);
```


To export a value from a Node module, you can assign a value to the module.exports object like so:
```js
// Export a named function.
module.exports.functionToExport = functionToExport;
 
// or... export a function expression.
module.exports.functionToExport = () => {};
```

Or you can assign module.exports to an object of the exported values:

```js
module.exports = {
  functionToExportA,
  functionToExportB
};
```

Use the require() function to import a module. Your code should look something like this:

`const myModule = require('path/to/myModule.js');`

#### type="module"

```js
<!-- secret-messages.html --> 
<html>
  <head>
    <title>Secret Messages</title>
  </head>
  <body>
    <button id="secret-button"> Press me... if you dare </button>
    <p id="secret-p" style="display: none"> Modules are fancy! </p>
    <script type="module" src="./secret-messages.js"> </script>
  </body>
</html>
```

#### Renaming Imports to Avoid Naming Collisions

ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:

`import { exportedResource as newlyNamedResource } from '/path/to/module'`

Let’s see how this could work within main.js

```js
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour
```

#### Default Exports and Imports

The syntax for exporting a default object looks like this:

```js
const resources = { 
  valueA, 
  valueB 
}
export { resources as default };
```

The clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value.

```js
const resources = {
  valueA,
  valueB
}
export default resources;
```

#### Importing default values

`import importedResources from 'module.js';`

This syntax is actually shorthand for import `{ default as importedResources } from 'module.js` and the imported default value may be given any name the programmer chooses.

It should be noted that if the default export is an object, the values inside cannot be extracted until after the object is imported, like so:

```js
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```

```js
import domFunctions from '../modules/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

If you recall, the syntax used in the snippet above is shorthand for:

`import { default as domFunctions } from '../modules/dom-functions.js';`



 ### PROMISES

 An asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. 

Promises are objects that represent the eventual outcome of an asynchronous operation. 

A `Promise` object can be in one of three states:

- Pending: The initial state— the operation has not completed yet.

- Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.

- Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.

#### Constructing a Promise Object

A new Promise object

```js
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
```

The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. 

JavaScript will pass its own resolve() and reject() functions into the executor function.


- resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().

- reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject().

```js
const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
```

```js
const anExampleExecutor = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!');
    }
}
```
`setTimeout()` is a Node API (a comparable API is provided by web browsers) that uses callback functions to schedule tasks to be performed after a delay. 
`setTimeout()` has two parameters: a callback function and a delay in milliseconds.

```js
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
```

Asynchronous JavaScript uses something called the event-loop. After two seconds, `delayedHello()` is added to a line of code waiting to be run. 
Before it can run, any synchronous code from the program will run. 
Next, any code in front of it in the line will run. This means it might be more than two seconds before `delayedHello()` is actually executed.

```js
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();
```

#### Consuming Promises

Promise objects come with an aptly named `.then()` method. 
It allows us to say, “I have a promise, when it settles, `then` here’s what I want to happen…”

`.then()` is a higher-order function— it takes two callback functions as arguments. We refer to these callbacks as handlers.

- The first handler, sometimes called onFulfilled, is a success handler, and it should contain the logic for the promise resolving.

- The second handler, sometimes called onRejected, is a failure handler, and it should contain the logic for the promise rejecting.

`.then()` is that it always returns a promise.

We can invoke `.then()` with one, both, or neither handler! This allows for flexibility, but it can also make for tricky debugging. 

#### Success and Failure Callback Functions

```js
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'
```

With typical promise consumption, we won’t know whether a promise will resolve or reject, 
so we’ll need to provide the logic for either case. 
We can pass both a success callback and a failure callback to `.then()`.

```js
let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};
 
prom.then(handleSuccess, handleFailure);
```

#### Using catch() with Promises

`.then()` will return a promise with the same settled value as the promise it was called on if no appropriate handler was provided. 

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .then(null, (rejectionReason) => {
    console.log(rejectionReason);
  });

  ```
The `.catch()` function takes only one argument, `onRejected` 

```js
prom
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
  ```
  We pass a success handler to `.then()` and a failure handler to `.catch()`.

  If the promise rejects, `.then()` will return a promise with the same rejection reason as the original promise and `.catch()`‘s failure handler will be invoked with that rejection reason.

  #### Chaining Multiple Promises

  Process of chaining promises together is called composition. 
  Promises are designed with composition in mind! Here’s a simple promise chain in code:

  ```js
  firstPromiseFunction()
.then((firstResolveVal) => {
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal) => {
  console.log(secondResolveVal);
});
```

```js
const myFirstSuccessHandler = (resolvedValueArray) => {
  return processPayment(resolvedValueArray);
};
```

#### Avoiding Common Mistakes

- Mistake 1: Nesting promises instead of chaining them.

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })
})
```
We invoke a second .then() to handle the logic for the second promise settling all inside the first then()!

Instead of having a clean chain of promises, we’ve nested the logic for one inside the logic of the other. 
Imagine if we were handling five or ten promises!

- Mistake 2: Forgetting to return a promise.

```js
returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
```
Inside the success handler, we create our second promise, but we forget to return it!

Since forgetting to return our promise won’t throw an error, this can be a really tricky thing to debug!


#### Using Promise.all()

`Promise.all()` accepts an array of promises as its argument and returns a single promise. 
That single promise will settle in one of two ways:

- If every promise in the argument array resolves, the single promise returned from `Promise.all()` will resolve with an array containing the resolve value from each promise in the argument array.

- If any promise from the argument array rejects, the single promise returned from `Promise.all()` will immediately reject with the reason that promise rejected. This behavior is sometimes referred to as failing fast.


```js
let myPromises = Promise.all([returnsPromOne(), returnsPromTwo(), returnsPromThree()]);
 
myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
  ```

  ```js
  const firstPromise = returnsPromOne();
const secondPromise =  returnsPromTwo();
const thirdPromise =  returnsPromThree();
 
const promiseArray = [firstPromise, secondPromise, thirdPromise];
 
Promise.all(promiseArray);
```

#### Review

- Promises are JavaScript objects that represent the eventual result of an asynchronous operation.

- Promises can be in one of three states: pending, resolved, or rejected.

- A promise is settled if it is either resolved or rejected.

- We construct a promise by using the `new` keyword and passing an executor function to the `Promise` constructor method.

- `setTimeout()` is a Node function which delays the execution of a callback function using the event-loop.

- We use `.then()` with a success handler callback containing the logic for what should happen if a promise resolves.

- We use `.catch()` with a failure handler callback containing the logic for what should happen if a promise rejects.

- Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple `.then()`‘s and `.catch()`‘s.

- To use promise composition correctly, we have to remember to return promises constructed within a `.then()`.

- We should chain multiple promises rather than nesting them.

- To take advantage of concurrency, we can use `Promise.all()`.


### bubble sort
```js
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
```