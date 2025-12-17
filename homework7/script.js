// 1. Файл script.js создан и подключен к index.html через <script src="script.js"></script>

// 2. Консоль разработчика открывается через F12 или Ctrl+Shift+I

// 3. Выводим любое значение в консоль
console.log("Привет, это моя первая программа на JavaScript!");

// 4. Создаем две переменные с числами и выводим их
let num1 = 10;
let num2 = 5;
console.log("Первое число:", num1);
console.log("Второе число:", num2);

// 5. Складываем две переменные и выводим результат
let sum = num1 + num2;
console.log("Сумма чисел:", sum);

// 6. Преобразуем строку в верхний и нижний регистр
let text = "JavaScript это интересно!";
console.log("Верхний регистр:", text.toUpperCase());
console.log("Нижний регистр:", text.toLowerCase());

// 7. Базовые операции над числами
console.log("Сложение:", num1 + num2);
console.log("Вычитание:", num1 - num2);
console.log("Умножение:", num1 * num2);
console.log("Деление:", num1 / num2);
console.log("Остаток от деления:", num1 % num2);
console.log("Возведение в квадрат num1:", num1 ** 2);
console.log("Возведение в квадрат num2:", Math.pow(num2, 2));

// 8. Два дополнительных задания (примеры):
//    - Конкатенация строк
let firstName = "Иван";
let greeting = "Привет, " + firstName + "!";
console.log(greeting);

//    - Использование функции
function multiply(a, b) {
    return a * b;
}
console.log("Умножение через функцию:", multiply(num1, num2));