var Person = /** @class */ (function () {
    function Person() {
        this.name = "vivek";
    }
    Person.checkUserLogin = function () {
        return this.isUserLogin;
    };
    Person.isUserLogin = false;
    return Person;
}());
// const p1 = new Person();
// console.log(p1.isUserLogin)
console.log(Person.checkUserLogin());
