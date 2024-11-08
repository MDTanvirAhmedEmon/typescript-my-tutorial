class Counter {
    static count: number = 0;

    static addNumber(): number{
        return Counter.count = Counter.count + 1;
    };
    
    static subNumber(): number{
        return Counter.count = Counter.count - 1;
    };
}

// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.addNumber());
console.log(Counter.addNumber());