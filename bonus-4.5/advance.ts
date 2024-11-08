interface IUser {
    firstName: string;
    lastName: string;
}

interface IMethods {
    fullName(): string;
}

interface Model<TData, TMethods>{
    data: TData;
    methods: TMethods;
};

type model = Model<IUser, IMethods>

class User implements model {
    data: IUser;
    methods: IMethods;
    constructor(firstName: string, lastName: string){
        this.data = {firstName, lastName};
        this.methods = {
            fullName: () => `${firstName} ${lastName}`, // anonymous function
        };
    };
};

const user1 = new User("Tanvir Ahmed", "Emon");
console.log(user1.methods.fullName());
