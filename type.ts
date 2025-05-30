type UserInfo = {
    name: string;
    age: number;
    gender: string;
}

// type XYZ extends UserInfo= {

// }


let studentInfo: UserInfo = {
  name: "Vivek",
  age: 20,
  gender: "Male",
};

let employeeInfo: UserInfo= {
  name: "Vivek",
  age: 20,
  gender: "Male",
};

//Difference between interface and type
/*
1. interface: etend     type: not use
2. declaration merging: yes   type: no
3. Primitives/Union: No   type: yes
*/

interface Animal{
    name: string
}

interface Animal{
    age: number
}
//Becomes:
interface Animal{
    name: string,
    age: number
}
