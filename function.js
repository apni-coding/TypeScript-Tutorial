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
function sum() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    console.log(value);
    var c = value.reduce(function (total, num) { return total + num; }, 0);
    console.log(c);
    return c;
}
sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4);
