import { Login, User } from "./interface";

interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}

class Employee implements Login {
  #id: number;
  protected name: string;
  address: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }

  Login(): User {
    return { name: "John", id: 1, email: "" };
  }
  //Methods
  getNameWithAddress(): string {
    // return this.name + " " + "stays at " + this.address;
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", "Highway 71");

john.empId = 100;
console.log(john.empId);
// Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let address = john.getNameWithAddress();
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
let mike = new Manager(2, "Mike", "Charlie Drive");

console.log(address);
console.log(mike.getNameWithAddress());
