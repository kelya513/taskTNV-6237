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

//Задачи https://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php#EDITOR

//5. Write a JavaScript function that reverse a number.
 function reverseNumber (number) {
    number = number.toString();
    return number.split("").reverse().join("");
 }
console.log(reverseNumber(123456));
*/

//6. Write a JavaScript function that checks whether a passed string is palindrome or not?
/*function isPalindrome(str) {
    let string = str.replace(/\s+/g, '');
    let strReverse = string.toLowerCase().split("").reverse().join("");
    if (strReverse == str.toLowerCase().replace(/\s+/g, '')) {
        console.log("String is a palindrome");
    } else {
        console.log("String isn't a palindrome");
    }
}
isPalindrome("AnnA");
isPalindrome("Madam");
isPalindrome("name");
isPalindrome("nurses run");
isPalindrome("А роза упала на лапу Азора");

//посимвольное сравнение
 function isPalindromeAnother(str) {
    let strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        if (str[i] === str[strLength - 1 -i]) {
            console.log("String is a palindrome");
        } else {
            console.log("String isn't a palindrome");
        }

    }

 }

isPalindromeAnother("AnnA");
isPalindromeAnother("Madam");
isPalindromeAnother("name");
isPalindromeAnother("nurses run");
isPalindromeAnother("А роза упала на лапу Азора");

//7. Write a JavaScript function that generates all combinations of a string.
function generateString(active, rest) {
    if (rest.length == 0) {
        console.log(active);
    } else {
        strRecurse(active + rest.charAt(0), rest.substring(1, rest.length));
        strRecurse(active, rest.substring(1, rest.length));
    }
}
generateString("", "dog");


//8. Write a JavaScript function that returns a passed string with letters in alphabetical order.
function returnAlphabetOrder(str) {
    console.log (str.split('').sort().join(''));
}
returnAlphabetOrder("webmaster");

//9. Write a JavaScript function that accepts a string as a parameter and converts the first letter
// of each word of the string in upper case.
function convertToUpperСase(str)
{
  var array = str.split(' ');
  var newArray = [];
    
  for(var x = 0; x < array.length; x++) {
      newArray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newArray.join(' ');
}
console.log(convertToUpperСase("the quick brown fox"));

// 10. Write a JavaScript function that accepts a string as a parameter and find the longest word 
// within the string.
// первый способ выводит самое длинное слово
function findLongestWord_1(str)
{
  var newArray = str.split(' ');
  var result = newArray[0];

  for(var i = 1 ; i < newArray.length ; i++)
  {
    if(result.length < newArray[i].length)
    {
        result = newArray[i];
    } 
}
return result;
}

console.log(findLongestWord_1("Web Development Tutorial"));


// второй способ выводит количество символов в самом длинном слове
function findLongestWord_2(str) {
    var strSplit = str.split(' ');
    var longWord = 0;
    for (var i = 0 ; i < strSplit.length; i++) {
        if (strSplit[i].length > longWord) {
            longWord = strSplit[i].length;
        }

    }
    return longWord;
}

console.log(findLongestWord_2("Web Development Tutorial"));


// третий способ выводит количество символов в самом длинном слове
function findLongestWord_3(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}
console.log(findLongestWord_3("Web Development Tutorial"));


//  способ выводит количество символов в самом длинном слове
function findLongestWord_4(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
console.log(findLongestWord_4("Web Development Tutorial"));

//11.Write a JavaScript function that accepts a string as a parameter and find the shortest word 
// within the string.
function shortestWord(str) {
    var strSplit = str.split(' ');
    var result = strSplit[0];
    for (var i = 0 ; i < strSplit.length; i++) {
        if (strSplit[i].length > result) {
            result = strSplit[i].length;
        }

    }
    return result;
}

console.log(shortestWord("Web Development Tutorial"));

//12.  Write a JavaScript function which will take an array of numbers stored and find the second lowest
// and second greatest numbers, respectively.
function findSecondLowGreat(array) {
    array.sort(function(x,y) {
        return x-y;
    });
    var uniqa = [array[0]];
    var result = [];

    for(var j = 1; j < array.length; j++) {
        if(array[j-1] !== array[j]) {
            uniqa.push(array[j]);
        }
    }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
    return result.join(',');
}

console.log(findSecondLowGreat([1,2,3,4,5]));

//13. Write a JavaScript function that accepts a string as a parameter and counts the number of 
// vowels within the string.
function countVowels(str) {
    return (str.match(/[aeiou]/gi) == null) ? 0 : str.match(/[aeiou]/gi).length;        
}
console.log(countVowels("The quick brown fox"));

//14. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other 
// than 1 and itself.

function isPrimeNumber_1(number) {
    if (number === 1) {
        return false;
    } else if(number === 2) {
        return true;
    } else {
        for(var x = 2; x < number; x++) {
            if(number % x === 0) {
                return false;
            }
        }
        return true;  
    }
}
console.log(isPrimeNumber_1(11));

//второй способ
function isPrimeNumber_2(num) {
    if (num <= 1) return false;
    if (num === 2) return true;

    var sqrt = Math.sqrt(num);

    for (var i = 2; i <= sqrt; i++) {
        if (num % i === 0) return false;
        return true;
    }
}
console.log(isPrimeNumber_2(37));

//15. Write a JavaScript function which accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function returnType(value) {
    var types = [Function, RegExp, Number, String, Boolean, Object],
        i, len;

    if (typeof value === "object" || typeof value === "function") {
        for (i = 0, len = dtypes.length; i < len; x++) {
            if (value instanceof dtypes[i]) {
                return dtypes[i];
            }
        }
    }
    console.log(typeof(value));
}
returnType(37);
returnType("Value");
returnType(false);


//16. Write a JavaScript function which returns the n rows by n columns identity matrix.
function matrix(n) {

    var i;
    var j;

    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i === j) {
                console.log('1');
            } else {
                console.log('0');
            }
        }
        console.log('------');
    }
}
matrix(3);
*/

//17. 