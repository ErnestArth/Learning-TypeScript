"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "ernest5arthur@gmail.com" };
console.log(user.email);
//Object Destructuring
let { name, email } = { name: "John", id: 1, email: "" };
console.log(name);
let employee = { name: "John", id: 1, email: "", salary: 1000 };
let users = [
    { name: "Ernest", id: 1, email: "ernest5arthur@gmail.com" },
    { name: "Kwame", id: 2, email: "kwame@gmail.com" },
    { name: "Wilson", id: 3, email: "Wilsonwils@gmail.com" },
];
console.log(users[0]);
console.log(users[1]);
//Alternatively,
let [user1, user2, ...restUsers] = [
    { name: "Ernest", id: 1, email: "ernest5arthur@gmail.com" },
    { name: "Wil", id: 2, email: "kwame@gmail.com" },
    { name: "Wilson", id: 3, email: "Wilsonwils@gmail.com" },
    { name: "Exhibit", id: 4, email: "Exhibit@gmail.com" },
    { name: "Reigns", id: 5, email: "Reignson@gmail.com" },
];
console.log(user1);
console.log(restUsers);
let result = restUsers.filter((user) => user.id > 3);
console.log(result);
//# sourceMappingURL=interface.js.map