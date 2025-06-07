class Person{
    name: string = "vivek";
    static isUserLogin: boolean = false;

    static checkUserLogin():boolean{
        return this.isUserLogin
    }
}

// const p1 = new Person();

// console.log(p1.isUserLogin)

console.log(Person.checkUserLogin())