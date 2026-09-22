// Написать функцию, которая поменяет переменные местами, не создавая дополнительную переменную

let num1 = 5;
let num2 = 7;

function swap(): undefined {
  [num1, num2] = [num2, num1];
}
swap();
console.log(num1, num2);
