class BankAccount{
    name: string;
    id: number;
    private _balance: number;
    constructor(name: string, id: number, balance: number){
        this.name = name;
        this.id = id;
        this._balance = balance;
    };
    // getter
    get hisBalance(): number {
        return this._balance; // getter private property ke baire theke access korar jonno
    }
    // setter
    set addBalance(amount: number) {
       this._balance = this._balance + amount; // private property ke modify korar jonno
    // setter a return kora jayna
    };

    seeBalance(): number{
        return this._balance; 
    };
}

const myaccount = new BankAccount('Emon', 1201, 100000);

myaccount.addBalance = 50000
// setter call korar somoy function er moto () call kora jabena = diye man dite hobe
console.log(myaccount);

