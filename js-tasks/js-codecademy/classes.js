// 1.

class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')


// 2.

class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20
    }
    get name() {
        return this._name
    }

    get department() {
        return this._department
    }

    get remainingVacationDays() {
        return this._remainingVacationDays
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff
    }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');


// 3.

class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name)
surgeonRomero.takeVacationDays(3)
console.log(surgeonRomero.remainingVacationDays)


// 4.

class HospitalEmployee {
    constructor(name, insurance) {
        this._name = name;
        this._insurance = insurance;
        this._remainingVacationDays = 20;
        //this._certifications = certifications;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff
    }

    addCertification() {

    }
}


// 5.

class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics'])


// 6.
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5)
console.log(nurseOlynyk.remainingVacationDays)


// 7.

class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification)
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics')
console.log(nurseOlynyk.certifications)


// 8.

static generatePassword() {
    return Math.floor(Math.random() * 10000)
}
