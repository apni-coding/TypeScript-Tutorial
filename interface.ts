interface UserInfo {
  name: string;
  age: number | string;
  gender: string;
}

interface EmployeeInterface extends UserInfo {
  salary: number;
}

let studentInfo: UserInfo = {
  name: "Vivek",
  age: 20,
  gender: "Male",
};

let employeeInfo: EmployeeInterface = {
  name: "Vivek",
  age: 20,
  gender: "Male",
  salary: 25000,
};
