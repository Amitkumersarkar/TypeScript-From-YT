class User {
    public userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log("Hello");
    }
}

class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(
            `userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
        );
    }

    setStudentId(studentId: number): void {
        this.studentId = studentId;
    }
}

let student1 = new Student("Amit", 23, 22235103283);
student1.setStudentId(999999);
student1.display();

let user1 = new Student("Niloy", 22, 22235103285);
user1.userName = "Rupak";
console.log(user1);
