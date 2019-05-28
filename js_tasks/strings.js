/*
//1. Сделать первый символ заглавным
//Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом
// первый вариант
function ucFirst(str) {
	var newString = str.charAt(0).toUpperCase() + str.charAt(1) + str.charAt(2) + str.charAt(3);
	console.log(newString);
}
ucFirst("вася");

// второй вариант
function ucFirst_2(str) {
	var newString = str[0].toUpperCase() + str.slice(1);
	console.log(newString);
}
ucFirst_2("вася");

//2. Проверьте спам
//Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.
//Функция должна быть нечувствительна к регистру

function checkSpam(str) {
	var newStr = str.toLowerCase();
	return !!(~newStr.indexOf("viagra") || ~newStr.indexOf("xxx"));
}
console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx")); 
console.log(checkSpam("innocent rabbit"));


//3. Усечение строки
//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str, 
//и если она превосходит maxlength – заменяет конец str на "...", так чтобы ее длина стала равна maxlength.

function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 3) + '...';
	}
}
console.log(truncate("Account", 5));
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));


//4. Выделить число
//Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.
//Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.

function extractCurrencyValue(str) {
    str = str.substring(1, str.length);
    return str;
}
console.log(extractCurrencyValue("$120"));
*/