class Vehicle{
    //Properties
    name;
    color;
    wheels;

    //constructor function
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    //methods
    getVehicleDetail(){
       return this.color; 
    }
}

const car = new Vehicle("BMW", "Black");
console.log(car.getVehicleDetail())