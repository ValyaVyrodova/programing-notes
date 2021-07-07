// 1.

/* shape-area.js */
const PI = Math.PI;

function circleArea(r) {
    return PI * r * r;
}

function squareArea(side) {
    return side * side;
}

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;


/* app.js */

const radius = 5;
const sideLength = 10;

// Option 1: import the entire shape-area.js module here.
const { circleArea, squareArea } = require("./shape-area.js")
// const areaFunctions = 'replace_me';

// Option 2: import circleArea and squareArea with object destructuring

// use the imported .circleArea() and .squareArea() methods here

const areaOfCircle = circleArea(radius);

const areaOfSquare = squareArea(sideLength);


// 2.

function changeText(domElement, newText) {
    domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// export the functions here
export { changeText, changeToFunkyColor }

// 3.
/* main.js */

// import the functions here, then uncomment the code below
import { changeText, changeToFunkyColor } from './module.js'
const header = document.getElementById("header");

changeText(header, 'I did it!')// call changeText here

setInterval(() => {
    return changeToFunkyColor(header)// call changeToFunkyColor() here
}, 200);


// 4.

function changeText(domElement, newText) {
    domElement.innerHTML = newText;
}

function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;

    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// use default export syntax below here
const textChange = {
    changeText,
    changeToFunkyColor
}
export default textChange