// let fruits = ["apple", "oranage", false]

// 1. using square brackets:-
// let fruits : string[] = ["apple", "Orange"]

//2. using generic array type
let fruits : Array<string> = ["apple"]

// Array declaration
let num: number[];
// Array initialization
num = [4]

let arr : (string | number | boolean)[] = ["abc", 20, "def", true]

let arr1 : Array<string | number> = [40, "abc"]

console.log(arr[0])

for(var index in arr){
    console.log(arr[index])
}