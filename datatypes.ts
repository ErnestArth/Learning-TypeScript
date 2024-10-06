let lname: string;

lname = "Arthur";

lname.toUpperCase();
let newname = lname.toUpperCase();
console.log(newname);

let age: number;
age = 20;

let dob = "20";

let result = parseInt(dob);

let isValid: boolean = false;
console.log(isValid);

let empList: string[];
empList = ["Jacob", "Victoria", "Regina"];

let numList: Array<number>;
numList = [1, 2, 3, 4, 5, 6, 7];

// let newNum = numList[7];

let results = numList.filter((num) => num > 2);

let emp = empList.find((emp) => emp === "Victoria");

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

console.log(emp);
// lname = 10; // Error: Type 'number' is not assignable to type 'string'

const enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Blue;

let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];

let department;

department = "11";
department = 20;
