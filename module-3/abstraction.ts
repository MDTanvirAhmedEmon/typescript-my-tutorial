// abstraction by interface

interface IVehicle{
    startEngin(): void,
    stopEngin(): void,
    move(): void,
}
// interface er maddhome class er methods gula kemon hobe ta declare kora hoy

class Vehicle implements IVehicle {
    constructor(public name: string, public price: number){
    }

    startEngin(): void {
        console.log('engin started');
    }
    stopEngin(): void {
        console.log('endin stopped');
    }
    move(): void {
        console.log('car moved');
    }
}
const vehicle1 = new Vehicle('Toyota', 100000);

// abstraction class

abstract class Vehicle2{ // abstract deyay eitar kono instance banano zabena sudhu onno class a extend kora zabe
    constructor(public name: string, public price: number){
    }

    abstract startEngin():void; // function ta sudhu ki type er ta bole dibo implementation eikhane hobena
    abstract stopEngin():void;

}

class Car extends Vehicle2{
    startEngin(): void {
        console.log('engin started');
    }
    stopEngin(): void {
        console.log('endin stopped');
    }
}

const Car1 = new Car('car', 111);
Car1.startEngin()