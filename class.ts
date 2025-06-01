class Employee{
    //Properties
    empCode: number;
    empName: string;

    //Constructor
    constructor(code:number){
     this.empCode = code;
    }

    //Methods
    updateEmpName(name:string):void{
        this.empName = name;
    }

    getSalary():number{
        return 10000;
    }
}

let emp = new Employee(100);
emp.updateEmpName("vivek")
console.log(emp.getSalary())