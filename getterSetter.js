var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return "Mr. ".concat(this._name); //Infinite recursion
        },
        set: function (newName) {
            if (newName.length > 0) {
                this._name = newName; //Infinite recursion
            }
            else {
                throw new Error("Name must be non-empty");
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getingUser = function () {
        return this._name;
    };
    return Person;
}());
var p1 = new Person();
// p1.getingUser()
p1.name = "vivek";
console.log(p1.name);
// p1.name = "vivek"
// console.log(p1.name)
