/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая возвращает новый массив только положительных чисел, умноженный вдвое

const array: number[] = [1, -5, 7, 8, -9, 0, -4];

function doubleNum(arr: number[]): number[] {
  return array.filter((num) => num > 0).map((num) => num * 2);
}
console.log(doubleNum(array));
