/*
//1. if (строка с нулем)
if ("0") {
    alert("Привет");
}

//2. проверка стандарта
let value = prompt("Каково «официальное» название JavaScript?");
if (value == "ECMAScript") {
    alert("Верно!");
} else {
   alert("Не знаете? «ECMAScript»!");
}

//3. получить знак числа
let number = prompt("Введите число");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

//4. проверка логина
//Везде, кроме Safari, нажатие «Отмена» возвращает null, а вот Safari возвращает при отмене
//пустую строку, поэтому в браузере Safari можно было бы добавить дополнительную проверку на неё.

let login = prompt("Введите логин");
if (login == "Админ") {
    let password = prompt("Введите пароль");
    if (password == "Черный властелин") {
        alert("Добро пожаловать, господин!");
    } else if (password == null) {
        alert("Вход отменен");
    } else {
        alert("Пароль неверен!");
    }
} else if (login == null) {
    alert("Вход отменен");
} else {
    alert("Я вас не знаю!");
}

//5. перепишите if в "?"
let a = 2, b = 1;
alert (result = (a + b < 4) ? "Мало" : "Много");


//6. перепишите "if..else" в "?"
let login = (prompt("Введите логин"));
let message = (login == "Вася") ? "Привет" :
    (login == "Директор") ? "Здравствуйте" :
        (login == null) ? "Нет логина" :
            " ";
alert(message);

//7. Что выведет alert ИЛИ(?)
alert (null || 2 || undefined);

//8. Что выведет alert ИЛИ(?)
alert(alert(1) || 2 || alert(3));

//9. Что выведет alert И(?)
alert(1 && null && 2);

//10. Что выведет alert И(?)
alert(alert(1) && alert(2));

// 11. Что выведет этот код?
alert(null || 2 && 3 || 4);

//12. Проверка if внутри диапазона
let age = prompt("Введите возраст (14 до 90)");
if (age >= 14 && age <= 90) {
    alert("Добро пожаловать!");
} else if (age < 14) {
    alert("Лицам моложе 14 лет вход запрещен!")
} else {
    alert("Вам точно сюда? :)");
}

//13. Вопрос про if
if (-1 || 0) alert("первое");
if (-1 && 0) alert("второе");
if (null || -1 && 1) alert("третье");
*/