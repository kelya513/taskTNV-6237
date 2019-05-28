/*
//1. Последнее значение цикла
let i = 3;
while (i) {
    console.log(i--);
}

//2. Какие значения i выведет цикл while?
// Префиксный вариант
var i = 0;
while (++i < 5) {
    console.log(i);
}

// Постфиксный вариант
var i = 0;
while (i++ < 5) {
    console.log(i);
}

//3. Какие значения i выведет цикл for?
//разницы в постф. и преф. формах нет

for (var i = 0; i < 5; i++) console.log(i);

for (var i = 0; i < 5; ++i) console.log(i);


//4. Выведите четные числа
for (var i = 1; i < 10; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}

//5. Замените for на while
//for (var i = 0; i < 3; i++) {
//    alert( "номер " + i + "!" );
//}

var i = 0;
while (i < 3) {
    console.log("номер " + i + "!");
    i++;
}

//6. Повторять цикл, пока ввод неверен
var number;
do {
    number = prompt("Введите число > 100");
} while (number <= 100 && number != null);

7. Вывести простые числа
simpleNumbers:
for (let i = 2; i <= 10; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue simpleNumbers;
    }
   console.log( i );
}
*/

