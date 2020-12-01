// ES 6 module system

export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails () {
        return this.name + ", " + this.age;
    }
}