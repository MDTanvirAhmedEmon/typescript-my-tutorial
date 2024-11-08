class Person {
    takeNap (): void{
        console.log('I am sleeping 8 hours')
    }
}

class KamlaStudent extends Person{
    takeNap(): void {
        console.log('I am sleeping 10 hours') // extends kore functional modify kora hoise tai same zinis extend korar sotteo vinno result dekhabe eitai polymorphism
    }
}

class Developer extends Person{
    takeNap(): void {
        console.log('I am sleeping 6 hours') 
    }
}

function getNap(param: Person) {
    param.takeNap()
}

const person1 = new Person();
const student1 = new KamlaStudent();
const developer1 = new Developer();

getNap(person1)
getNap(student1)
getNap(developer1)