export interface User {
  name: string;
  age?: number;
  id: number;
  email: string;
}

let user: User = { name: "John", id: 1, email: "ernest5arthur@gmail.com" };
console.log(user.email);

//Object Destructuring
let { name, email }: User = { name: "John", id: 1, email: "" };
console.log(name);

interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface Login {
  Login(): User;
}

let users: User[] = [
  { name: "Ernest", id: 1, email: "ernest5arthur@gmail.com" },
  { name: "Kwame", id: 2, email: "kwame@gmail.com" },
  { name: "Wilson", id: 3, email: "Wilsonwils@gmail.com" },
];

console.log(users[0]);
console.log(users[1]);

//Alternatively,
let [user1, user2, ...restUsers]: User[] = [
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
