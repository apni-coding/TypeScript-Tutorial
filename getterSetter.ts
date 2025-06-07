class Person{
    private _name:string;

    get name():string{
        return `Mr. ${this._name}` //Infinite recursion
    }

    set name(newName: string){
        if(newName.length>0){
            this._name = newName; //Infinite recursion
        }else{
            throw new Error("Name must be non-empty")
        }
    }

    getingUser(){
        return this._name;
    }
}

const p1 = new Person();
// p1.getingUser()
p1.name = "vivek"
console.log(p1.name)

// p1.name = "vivek"
// console.log(p1.name)