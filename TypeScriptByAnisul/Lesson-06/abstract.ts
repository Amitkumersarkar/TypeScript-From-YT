abstract class User {
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

class Student extends User {
    constructor(userName: string, age: number) {
        super(userName, age);
    }
}

const user1 = new Student("Amit", 22);
user1.disPlay();
