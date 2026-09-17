/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая складывает все четные числа и возвращает результат

const array: number[] = [4, 33, 45, 20, 57, 0, 2];

function sumEven(numbers: number[]): number {
  return array.reduce((acc, curr) => (curr % 2 ? acc : acc + curr), 0);
}
console.log(sumEven(array));
