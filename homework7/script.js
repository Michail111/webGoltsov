console.log("Программа на JavaScript!");
let num1 = 10;
let num2 = 5;
console.log("Первое число:", num1);
console.log("Второе число:", num2);

let sum = num1 + num2;
console.log("Сумма чисел:", sum);

let text = "JavaScript это интересно!";
console.log("Верхний регистр:", text.toUpperCase());
console.log("Нижний регистр:", text.toLowerCase());

console.log("Сложение:", num1 + num2);
console.log("Вычитание:", num1 - num2);
console.log("Умножение:", num1 * num2);
console.log("Деление:", num1 / num2);
console.log("Остаток от деления:", num1 % num2);
console.log("Возведение в квадрат num1:", num1 ** 2);
console.log("Возведение в квадрат num2:", Math.pow(num2, 2));


let firstName = "Михаил";
let greeting = "Привет, " + firstName + "!";
console.log(greeting);

function multiply(a, b) {
    return a * b;
}
console.log("Умножение через функцию:", multiply(num1, num2));