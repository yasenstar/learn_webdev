const massMark = 78;
const heightMark = 1.69;
const massJohn = 95;
const heightJohn = 1.88;

let bmiMark = massMark / (heightMark ** 2);
let bmiJohn = massJohn / (heightJohn ** 2);

let markHigherBMI = bmiMark > bmiJohn ? true : false;

console.log("Mark BMI: ", bmiMark);
console.log("John BMI: ", bmiJohn);
console.log("Mark has higher BMI? ", markHigherBMI);