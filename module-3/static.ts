class Counter {
    static count: number = 0;

    static addNumber(): number{
        return Counter.count = Counter.count + 1;
    };
    
    static subNumber(): number{
        return Counter.count = Counter.count - 1;
    };
}

// const instance1 = new Counter(); // static use korle instance er jonno alada memory use hobena. Orthat duita instance created hoise porer ta 1 howyar kotha but oita 2 hobe karon alada hobena
// const instance2 = new Counter(); // static er jonno this er poriborte class er name use korte hobe
console.log(Counter.addNumber());
console.log(Counter.addNumber());
