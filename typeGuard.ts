
function printValue(value: string | number){
    if(typeof value === "string"){
      value.toUpperCase() ; 
    }else{
      value.toFixed(2)
    }
}

class Dog{
    bark(){
        console.log('Woof!')
    }
}

class Cat {
    meow(){
        console.log('Meow!')
    }
}

function speak (pet: Dog | Cat){
    if(isDog(pet)){
      pet.bark()  
    }else{
        pet.meow()
    }
}   


function isDog(pet: Dog | Cat): pet is Dog{
    return (pet as Dog).bark() !== undefined;
}