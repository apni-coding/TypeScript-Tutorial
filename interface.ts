// interface UserInfo {
//   name: string;
//   age: number | string;
//   gender: string;
// }

// interface EmployeeInterface extends UserInfo {
//   salary: number;
// }

// let studentInfo: UserInfo = {
//   name: "Vivek",
//   age: 20,
//   gender: "Male",
// };

// let employeeInfo: EmployeeInterface = {
//   name: "Vivek",
//   age: 20,
//   gender: "Male",
//   salary: 25000,
// };

interface KeyValueProcessor {
  (key: number, value: string): void;
}

let result: KeyValueProcessor = function (key: number, value: string): void {
  console.log(key, value);
};

result(1, "abc");

// function print(key:number, value: string):void{
//     console.log(key, value)
// }

// print(1, "abc")


interface NumStr{
    [index:number]:(number|string|boolean)
}

let numArr:NumStr = [1, 2, 3, "one"];
