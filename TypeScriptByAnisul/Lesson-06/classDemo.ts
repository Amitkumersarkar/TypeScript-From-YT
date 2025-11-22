class User {
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    disPlay() {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

const user1 = new User("Amit", 22);
user1.disPlay();
