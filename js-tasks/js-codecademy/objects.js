// 1.
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission']


console.log(spaceship[propName])

// 2.

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold'
spaceship.numEngines = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
delete spaceship['Secret Mission']


// 3.
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat() {
        console.log(retreatMessage)
    },
    takeOff() {
        console.log('Spim... Borp... Glix... Blastoff!')
    }
}
alienShip.retreat()

alienShip.takeOff()


// 4.


let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = spaceship.crew.captain['favorite foods'][0]
spaceship.passengers = [{ name: 'Space Dog', age: 100 }]
let firstPassenger = spaceship.passengers[0]
console.log(firstPassenger)



// 5.

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below
let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
    obj.disabled = true
}

greenEnergy(spaceship)
remotelyDisable(spaceship)

console.log(spaceship)




// 6.

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
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below

for (let crewRoles in spaceship.crew) {
    console.log(`${crewRoles}: ${spaceship.crew[crewRoles].name}`)
}

for (let crewDegrees in spaceship.crew) {
    console.log(`${spaceship.crew[crewDegrees].name}: ${spaceship.crew[crewDegrees].degree}`)
}




// 7.

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};
console.log(robot.provideInfo())

// 8.

const robot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();

const robot = {
    energyLevel: 100,
    checkEnergy: function () {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();




// 9.

const robot = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
robot._energyLevel = 'high'

robot.recharge()


// 10.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return 'My current energy level is ' + this._energyLevel
        } else {
            return 'System malfunction: cannot retrieve energy level'
        }
    }
}

console.log(robot.energyLevel)


// 11.

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors() {
        if (typeof this._numOfSensors === 'number') {
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num
        } else {
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};
robot.numOfSensors = 100
console.log(robot.numOfSensors)


// 12.
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop')
        }
    }
}

const tinCan = robotFactory('P-500', true)
tinCan.beep()


// 13.

function robotFactory(model, mobile) {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


// 14.

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot
//const { beep } = robot.functionality
functionality.beep()


// 15.

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({
    laserBlaster: true,
    voiceRecognition: true
}, robot)

console.log(newRobot);
