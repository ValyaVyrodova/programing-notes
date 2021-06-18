const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers() {
        return this._courses.appetizers
    },
    get mains() {
        return this._courses.mains
    },
    get desserts() {
        return this._courses.desserts
    },

    set appetizers(appetizers) {
        this._courses.appetizers - appetizers
    },
    set mains(mains) {
        this._courses.mains - mains
    },
    set desserts(desserts) {
        this._courses.desserts - desserts
    },

    get courses() {
        return _courses
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        this._courses[courseName].push(dish)
    },

    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName]
        const randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex]
    },

    generateRandomMeal: function () {
        const appetizer = this.getRandomDishFromCourse('appetizers')
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')
        const totalPrice = appetizer.price + main.price + dessert.price
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}`
    }
}

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25)
menu.addDishToCourse('appetizers', 'wings', 5)
menu.addDishToCourse('appetizers', 'Fries', 3)

menu.addDishToCourse('mains', 'steak', 7)
menu.addDishToCourse('mains', 'salmon', 8)
menu.addDishToCourse('mains', 'tofu', 6)

menu.addDishToCourse('desserts', 'ice cream', 2.25)
menu.addDishToCourse('desserts', 'cake', 4)
menu.addDishToCourse('desserts', 'choclate', 6)


let meal = menu.generateRandomMeal()
console.log(meal)
