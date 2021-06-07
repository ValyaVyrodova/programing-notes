console.log('====SCO2PE====')

let x1 = 'x1';

function scope1(x) {
    let x2 = 'x2';
    if(x > 2) {
        let x3 = 'x3'
        console.log(x2)
    }

    console.log(x3)
}

scope1(5)

// console.log(x2);
// console.log(x1);