// Напишите функцию, которая проверяет не содержит ли слово повторяющихся букв

const str1 = "Android";
const str2 = "Iphone";

function hasUniqueLetters(word: string): boolean {
  const letters = word.toLowerCase().split("");
  return new Set(letters).size !== letters.length;
}

console.log(hasUniqueLetters(str1));
console.log(hasUniqueLetters(str2));
