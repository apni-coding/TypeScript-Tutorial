// function printValue(){
//     //logic
// }

// printValue()

function sum(a:number|string, b:number):number|string{
    return Number(a)+b;
}

const result = sum(5, 10)
console.log(result)

function greetingUser(userName:string):void{
    console.log(`Welcome to apni coding ${userName}`)
}

greetingUser("Vivek")