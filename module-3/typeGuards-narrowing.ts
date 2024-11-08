
// typeof Guard
const addTwoElement = (param1: string|number, param2: string|number): string | number => {
    if(typeof param1 === 'number' && typeof param2 === 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
};

addTwoElement(5, 10);
addTwoElement('5', '10');

// in Guard 

type normalType = {
    name: string;
};

type adminType = {
    name: string;
    role: 'admin';
};

const isAdmin = (user: normalType | adminType): string => {
    if('role' in user){
        return `${user.name} is an Admin`;
    }
    else{
        return `${user.name} is a normal user`;
    }
};

const normalUser: normalType = {
    name: 'Emon'
}; 

const adminUser: adminType = {
    name: 'Abir',
    role: 'admin',
};

console.log(isAdmin(adminUser))

// instanceOf Guard 

class Prani {
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species= species;
    }
    makeSound() {
        console.log(`I am making sound`);
    }
}

class Cat extends Prani {
    constructor(name: string, species: string){
        super(name, species);
    }
    soundMeow() {
        console.log(`I am meowing`);
    }
}

class Dog extends Prani {
    constructor(name: string, species: string){
        super(name, species);
    }
    soundGhew() {
        console.log(`I am ghew ghew`);
    }
}

function isDog(object: Prani): object is Dog {
    return object instanceof Dog;
}

function getSound(object: Prani) {
    if(object instanceof Cat) { 
        object.soundMeow();
    }
    else if(isDog(object)) { // functional way 
        object.soundGhew(); 
    }
    else{
        object.makeSound();
    }
}

const cat1 = new Cat('parcian Cat', 'Dami'); // instance of Cat
const dog1 = new Dog('parcian Dog', 'Dami'); // instance of Dog

getSound(cat1)


