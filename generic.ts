
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


//Generic Classes
class GenericNumber<T, K>{
    zeroValue:T
    dummy: K

    printNumber(x:T, y:K){
        console.log(x)
    }
}

const numberInstance = new GenericNumber<number, string>()
numberInstance.zeroValue = 0

//Generic Interfaces
interface Box<T, K>{
    value:T;
    xyz: K
}

const strBox : Box<string, boolean> = {
    value: "vivek",
    xyz: true
}
const numBox: Box<number, string> = {
    value: 20,
    xyz:"vivek"
}