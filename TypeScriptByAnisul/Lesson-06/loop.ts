type User = { userName: string; userId: number };

let users: User[] = [
    { userName: "Amit", userId: 283 },
    { userName: "Niloy", userId: 285 },
    { userName: "Anik", userId: 288 }
];

for (let u of users) {
    console.log(u.userName, u.userId);
}
