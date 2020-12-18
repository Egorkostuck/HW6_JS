//task 1

console.log('task 1' + '\n'+'Дана строка aaa@bbb@ccc. Замените все @ на ! с помощью глобального поиска и замены.' + '\n');
console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

//task 2

console.log('task 2' + '\n'+'В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.' + '\n');

let date = '2025-12-31';
console.log(date.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));

//task 3
console.log('task 3' + '\n'+'Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).' + '\n');
let str = 'Я учу javascript!';

//метод substr
console.log('метод substr: ' + str.substr(2,3) +' '+ str.substr(6,10));

//метод substring
console.log('метод substring: ' + str.substring(2,5) +' '+ str.substring(6,16));

//метод slice
console.log('метод slice: ' + str.slice(2,5) +' '+ str.slice(6,16));

//task 4
console.log('task 4' + '\n'+'Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.' + '\n');
let sum = 0;
let arr = [4, 2, 5, 19, 13, 0, 10];
for (let i=0; i<arr.length; i++){
    sum += Math.pow(arr[i],3);
}
console.log(Math.sqrt(sum));

//task 5
console.log('task 5' + '\n'+'Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.' + '\n');
let a = +prompt('введите число a: ');
let b = +prompt('Введите число b:');
let c = a - b;
console.log(Math.abs(c));

//task 6
console.log('task 6' + '\n'+'Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).' + '\n');

let dateNow = new Date(),
    number = dateNow.getDate(),
    month = dateNow.getMonth(),
    year = dateNow.getFullYear(),
    hour = dateNow.getHours(),
    minute = dateNow.getMinutes(),
    seconds = dateNow.getSeconds();

if (number < 10){
    number = '0' + number;
}
if (month < 10){
    month = '0' + month;
}
console.log(hour + ':' + minute + ':' + seconds + ' ' + number + '.' + month + '.' + year);


//task 7
console.log('task 7' + '\n'+'Дана строка "aa aba abba abbbaabca abea". Напишите регулярку, которая найдет строки "aba, abba, abbba" по шаблону: буква "a", буква "b" любое количество раз, буква "a".' + '\n');

let str2 = 'aa aba abba abbbaabca abea';
let rezult = str2.replace(/ab+a/g, '!');
console.log(rezult);

//task 8
console.log('task 8' + '\n'+'Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.' + '\n');

function phoneNumber(phone){
    var regExp = /^\+[0-9]{3}[-]([0-9]{2})[-]([0-9]{3})[-]([0-9]{2})[-]([0-9]{2})$/;
    rezult = regExp.test(phone);
    if (rezult == true) {
        return true;
    } else {
        return false;
    }
}
console.log(phoneNumber('+375-29-526-91-74'));

//task 9
console.log('task 9' + '\n'+'Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия: ...' + '\n');

function email(adres){
    var regExp = /[a-z-0-9]{2}[-_]?[a-z-0-9]?@[a-z]{2,11}.[a-z]{2,11}/;
    if (regExp.test(adres) == true){
        return true;
    } else {
        return false;
    }
}
console.log(email('turak_09@mail.ru'));


//task 10
console.log('task 10' + '\n'+'Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.' + '\n');


// function link(address){
//     // var arr =address.split(/[/][0-9]{4}[/][0-9]{2}[/][0-9]{2}[/][a-z]{4}-[a-z]{2}-[0-9]{3}[/]/gi, ',');
//     var arr =address.split('/2018/04/26/smart-do-200/?', ',');

// }
// console.log(link('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'));

var address = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3';
var arr6 =address.split(/^\[0-9]{4}[/][0-9]{2}[/][0-9]{2}[/][a-z]{4}-[a-z]{2}-[0-9]{3}[/]$/gi, ',');
console.log(arr6);