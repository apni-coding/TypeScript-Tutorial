class Person{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    greetUser():void{
        console.log(`Welcome to apni coding ${this.name}`)
    }
}

class Employee extends Person{
    empCode: number;

    constructor(empCode:number, empName:string){
        super(empName)
        this.empCode = empCode;
    }

    displayName():void{
        console.log(this.name)
    }
}

let emp = new Employee(101, "vivek")
console.log(emp.greetUser())