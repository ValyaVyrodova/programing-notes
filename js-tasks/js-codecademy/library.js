class Media {
    constructor(title) {
        this._title = title
        this._isCheckedOut = false
        this._ratings = []
    }
    get title() {
        return this._title
    }

    get isCheckedOut() {
        return false
    }

    get ratings() {
        return []
    }

    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut
    }

    getAverageRating(newRatings) {
        let sum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0) // calculate sum
        const lengthOfArray = this._ratings.length
        return sum / lengthOfArray
    }

    addRating(newAddRating) {
        return this._ratings.push(newAddRating)
    }
}


class Book extends Media {
    constructor(title, isCheckedOut, ratings, author, pages) {
        super(title, isCheckedOut, ratings)
        this._author = author
        this._pages = ''
    }

    get author() {
        return this._author
    }

    get pages() {
        return this._pages
    }
}

class Movie extends Media {
    constructor(title, isCheckedOut, ratings, director, runTime) {
        super(title, isCheckedOut, ratings)
        this._director = director
        this._runTime = ''
    }

    get director() {
        return this._director
    }

    get runTime() {
        return this._runTime
    }
}

const historyOfEverything = new Book('A Short History of Nearly', 'Bill Bryson', 544)
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())


const speed = new Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating())











