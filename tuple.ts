//In ts, a tuple is a special type of array that allow
// you to express an array with a fixed number of Element Internals, 
// where each element can have a different type.
    
let employee : readonly[number, string, boolean] = [1, "vivek", false]
//Array of tuple

let person: [number, string][] = [[1, "abc"],[3, "def"]]

console.log(employee)

// employee.push(2, "verma", true)
// console.log(employee)