// function printValue(){
//     //logic
// }

// printValue()

// function sum(a:number|string, b:number):number|string{
//     return Number(a)+b;
// }

// const result = sum(5, 10)
// console.log(result)

// function greetingUser(userName:string):void{
//     console.log(`Welcome to apni coding ${userName}`)
// }

// greetingUser("Vivek")

// function log(message:string, userId?: number){
//     console.log(`${message} ${userId ? userId : ""}`)
// }

// log("Guest")

// function greetUser(name:string = "Guest"){
//     console.log(`welcome to apni coding ${name}`)
// }

// greetUser()

//Arrow function

// const test = (a:number, b:number):number=>{
//     return a+b;
// }

//Rest Parameter

function sum(...value:number[]): number {
  console.log(value);
  const c = value.reduce((total, num) => total + num, 0);
  console.log(c);
  return c;
}

sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
