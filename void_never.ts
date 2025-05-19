// //Void

// function print(): void{
//     console.log("Apni Coding");
//     // return "Apni Coding"
// };

// const result = print();
// console.log(result)

// // let nothing : void = undefined;
// // nothing = "vivek"

//Never

function loopFunction():never{
    while(true){
        console.log("Apni Coding")
    }
   
}

function throwError():never{
    throw new Error("Throw an error")
}

function add():string{
    console.log(2+2)
}

// loopFunction()