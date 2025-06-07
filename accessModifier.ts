class Person {
  name: string;
  private isPersonLogin: boolean;
  protected salary: number;
   readonly xyz:boolean;

  constructor(name: string) {
    this.name = name;
    this.xyz = false;
  }

  public greetUser(): void {
    // this.xyz = true;
    console.log(`Welcome to apni coding ${this.name}`);
  }
}


class Emp extends Person{
    
    getEmpSalary(){
        return this.salary
    }
}

const p1 = new Person("Vivek");
p1.name;
p1.greetUser()
