"use strict";
let lname;
lname = "Arthur";
lname.toUpperCase();
let newname = lname.toUpperCase();
console.log(newname);
let age;
age = 20;
let dob = "20";
let result = parseInt(dob);
let isValid = false;
console.log(isValid);
let empList;
empList = ["Jacob", "Victoria", "Regina"];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7];
// let newNum = numList[7];
let results = numList.filter((num) => num > 2);
let emp = empList.find((emp) => emp === "Victoria");
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
console.log(emp);
let c = 2 /* Color.Blue */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[0];
swapNumbs[1];
let department;
department = "11";
department = 20;
//# sourceMappingURL=datatypes.js.map