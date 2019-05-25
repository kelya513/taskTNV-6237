/*
//1. Обязателен ли else?
//нет, функции вернут одинаковые значения
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}

//2. Перепишите функцию, используя оператор "?" или "//"
//function checkAge(age) {
//    if (age > 18) {
//        return true;
//    } else {
//        return confirm('Родители разрешили?');
//    }
//}

function checkAge(age) {
    (age > 18) ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
    (age > 18) || confirm("Родители разрешили?");
}

//3. Функция min
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
   return (a < b) ? a : b;
}
*/
//4. Функция pow (x, n)
//Напишите функцию pow(x,n), которая возвращает x в степени n.
//Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("Введите x ", " ");
let n = prompt("Введите n ", " ");

if (n <= 1) {
    console.log("Степень " + n + " неверна, введите степень больше 1");
} else {
    console.log( pow(x, n) );
}
