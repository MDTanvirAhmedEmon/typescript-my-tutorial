class Animal {
    // name: string;
    // price: number;
    // parameters properties
    constructor(public name: string, public price: number){
        //public likhle opore and niche ar declare korte hobena
        
        // this.name = name;
        // this.price = price;
    }
    seePrice(){
        console.log(`${this.name} price is ${this.price}`);
    };
}

const cat = new Animal('Cat', 120);
cat.seePrice()
