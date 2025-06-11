
// function identity (arg:number|string):number|string {
//     return arg;
// }

// let output1 = identity(20);
// let output2 = identity("vivek")

function identity<T>(arg:T):T{
    return arg;
}

let output1 = identity<string>("vivek");
let output2 = identity<number>(12)
let output3 = identity<boolean>(true)