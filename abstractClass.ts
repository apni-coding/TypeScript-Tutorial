abstract class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greetUser(): void {
    console.log(`Welcome to apni coding ${this.name}`);
  }

  abstract findPerson(id: string): string;
}

// const test  = new Person("vivek")

class Employee extends Person {
  empCode: number;

  constructor(empCode: number, empName: string) {
    super(empName);
    this.empCode = empCode;
  }

  findPerson(id: string): string {
    return "vivek";
  }
}

let emp = new Employee(1, "Vivek");
emp.findPerson("vivek");
