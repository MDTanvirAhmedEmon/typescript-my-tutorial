class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    makeSleep(hours: number): string {
        return (`${this.name} will sleep ${hours}`)
    }
}

class Student extends Parent {
    constructor(name: string, age: number, address: string){
        super(name, age, address);
    }
}

const studend1 = new Student('Emon', 23, 'Dhaka');
console.log(studend1)

class Teacher extends Parent {
    designation: string;
    constructor(name:string, age: number, address: string, designation: string){
        super(name, age, address)
        this.designation = designation;
    }
}

const teacher1 = new Teacher('Rojot Qumar', 52, 'Dhaka', 'Head Of The Department');
const teacherSleep = teacher1.makeSleep(7);
console.log(teacherSleep)