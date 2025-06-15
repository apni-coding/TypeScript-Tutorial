type Person = {
    name: string;
    age: number
}

type Employee = {
    employeeId: number;
    department: string;
}

type EmployeePerson = Person & Employee 
type UnionType = Person | Employee

const john:EmployeePerson = {
    name: "john",
    age: 40,
    employeeId: 50,
    department: "Engineering"
}