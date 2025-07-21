//Named Export
 export const PI = 3.14;

function add (a:number, b: number):number{
    return a+b;
 }

 function subtract(a:number, b:number): number{
    return a-b;
 }

 //Default Export (Only one per file)
 export default function greet(){
    
 }


 //Export after declaration
//  export {subtract, add}

//Renaming export
 export {subtract as sub, add}
