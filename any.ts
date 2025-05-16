//  let something : any = "Hello World"
//  console.log(something.length)
//  something = 40;
//  something = ["abc"]

//  let arr : any[] = [{}, "abc", 2]

let something : unknown = "Hello world"
// something = 40;
// something = [];
// console.log(something.length)
if(typeof something === "string"){
    console.log(something.length)
}

if(Array.isArray(something)){
    something.push("abc")
}
