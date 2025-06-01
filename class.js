var Employee = /** @class */ (function () {
    //Constructor
    function Employee(code) {
        this.empCode = code;
    }
    //Methods
    Employee.prototype.updateEmpName = function (name) {
        this.empName = name;
    };
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var emp = new Employee(100);
emp.updateEmpName("vivek");
console.log(emp.getSalary());
