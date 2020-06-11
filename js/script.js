let money = +prompt('Ваш бюджет на месяц?', ''),
    time = +prompt('Введите дату в формате ГГГГ-ММ-ЧЧ', '');
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
let a1 = prompt('Введите обязательную статью расходов в этом месяце?', ''),
    a2 = prompt('Во сколько это обойдётся?', ''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце?', ''),
    a4 = prompt('Во сколько это обойдётся?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

// МОЁ ДЗ №1:

// let year = confirm('Поехали?', '');

// switch (year) {
//     case (year = true):
//         let money = prompt('Ваш бюджет на месяц?', '');
//         let time = prompt('Введите дату в формате YYYY-MM-DD', '');
//         let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         let b = prompt('Во сколько обойдется?', '');
//         const month = 30;

//         let appData = {
//             budget: money,
//             timeData: time,
//             expenses: {
//                 a,
//                 b,
//             },
//             optionalExpenses: '',
//             income: ['', '', ''],
//         };
//         alert(appData.budget / month);
//         break;
//     default:
//         alert('Ну и пошёл к чёрту!');
//         break;
// }





// switch (num) {
//     case num < 49:
//         console.log('Мало!');
//         break;
//     case (num = 50):
//         console.log('Круто!');
//         break;
//     default:
//         console.log('что-то пошло не так!');
//         break;
// }
// let num = 22;
// let num = +prompt('22?', '');
// switch (num) {
//     case (num = 22):
//         console.log('super');
//         break;
//     default:
//         console.log('bad');
//         break;
// }

// let start = +prompt('how mutch?', '');
// console.log(start);
// switch (start) {
//     case start == 10:
//         alert('nice');
//         break;
//     default:
//         alert('bad');
// }

// switch (start) {
//     case start == 10:
//         let money = prompt('Ваш бюджет на месяц?', '');
//         let time = prompt('Введите дату в формате YYYY-MM-DD', '');
//         let a = prompt('Введите обязательную статью расходов в этом месяце', '');
//         let b = prompt('Во сколько обойдется?', '');
//         const month = 30;

//         let appData = {
//             budget: money,
//             timeData: time,
//             expenses: {
//                 a,
//                 b,
//             },
//             optionalExpenses: '',
//             income: ['', '', ''],
//         };
//         alert(money / month);
//         break;
//     default:
//         alert('Ну и пошёл нахуй!');
// }

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// let odd = confirm('вы согласны?');

// console.log(odd);
// // alert(appData.expenses);
// console.log(appData.expenses);
// // 'use strict';111
// // let persone = {
// //     name: "John",
// //     age: 25,
// //     isMarried: false
// // };11

// // let money = a,
// //     time = b;
// console.log('2+1');

// // console.log(persone.name);

// // let arr = ['plum.png', 'orange.jpg', 'apple.ico'];

// // console.log(arr[1]);

// // let obj = {
// //     name: 'Alex'
// // };

// // const arrow = [
// //     1, 3, 5, 6
// // ];

// // let fruit = ['apple', 'orange', 'plum'];

// // let answer = confirm('Are you here?');
// // let fruit = ['apple', 'orange', 'plum'];

// // let answer = +prompt('Есть ли вам 18?', '');

// // console.log(typeof answer);

// // let incr = 10,
// //     decr = 10;

// // console.log(incr++);
// // console.log(decr--);

// // function showMessage() {
// //     alert('Всем привет!');
// // }

// // let num = 50;

// // if (num < 49) {
// //     console.log('Мало!');
// // } else if (num > 100) {
// //     console.log('Много');
// // } else {
// //     console.log('Верно!');
// // }

// // num == 50 ? console.log('Верно!') : console.log('Неверно!');

// // switch (num) {
// //     case num < 49:
// //         console.log('Мало!');
// //         break;
// //     case (num = 50):
// //         console.log('Круто!');
// //         break;
// //     default:
// //         console.log('что-то пошло не так!');
// //         break;
// }
// // showMessage();
// // //ПЕРВОЕ ДЗ:

// // // let money = +prompt('Ваш бюджет на месяц?', ''),
// // //     time = prompt('Введите дату в формате YYYY-MM-DD', '');

// // // let appData = {
// // //     budget: money,
// // //     expenses: {},
// // //     optionalExpenses: {},
// // //     income: {},
// // //     timeData: time,
// // //     savings: false,
// // // };

// // // for (let i = 0; i < 2; i++) {
// // //     let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
// // //         b = prompt('Во сколько обойдется?', '');
// // //     if (typeof a === 'string' && typeof a != null && typeof b != null && a != '' && b != '' && a.length < 50) {
// // //         console.log('done');
// // //         appData.expenses[a] = b;
// // //     } else {}
// // // }

// // // appData.moneyPerDay = appData.budget / 30;

// // // alert('ежедневный бюджет:' + appData.moneyPerDay);

// // // if (appData.moneyPerDay < 100) {
// // //     console.log('минимальный уровень достатка');
// // // } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
// // //     console.log('Средний уровень достатка');
// // // } else if (appData.moneyPerDay > 2000) {
// // //     console.log('Высокий уровень достатка');
// // // } else {
// // //     console.log('Произошла ошибка');
// // // }

// // //ФУНКЦИИ:

// // // let num = 20;

// // // function showFirstMessage(text) {
// // //     alert(text);
// // //     console.log(num);
// // // }

// // // showFirstMessage("Hello World");
// // // console.log(num);

// // // var calc = function (a, b) {
// // //     return (a + b);
// // // };
// // // let calc = (a, b) => a + b;

// // // console.log(calc(3, 4));

// // // console.log(calc(5, 4));

// // // function retVar() {
// // //     let num = 50;
// // //     return num;
// // // }

// // // let anotherNum = retVar();
// // // console.log(anotherNum);

// // // let str = "test";
// // // console.log(str.length);

// // // console.log(str.toUpperCase());
// // // console.log(str.toLowerCase());

// // // let twelve = "12.2px";

// // // // console.log(Math.round(twelve));
// // // console.log(parseInt(twelve));
// // // console.log(parseFloat(twelve));

// // // a = 5;

// // // console.log(a);

// // // var leftBorderWidth = 1;

// // // var number = 5;
// // // var string = 'hello';
// // // var sym = Symbol();
// // // var boolean = true;
// // // null;
// // // undefined;
// // // var obj = {};

// // // let something = 1;
// // // console.log(something);

// // // let person = {
// // //     name: 'john',
// // //     age: 25,
// // //     isMarried: false,
// // // };

// // // const obj = {
// // //     name: 'alex',
// // // };

// // // const arr = [1, 2, 3, 4];

// // // console.log(person['name']);

// // // let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

// // // console.log(arr[0]);

// // // true / false;
// // // null;
// // // undefined;

// // // // - to String

// // // // 1)

// // // console.log(typeof ('ww' + 'false'));

// // // // 2)

// // // console.log('ww' + '10');

// // // console.log('http://vk.com/catalog/' + 5);

// // // // to number
// // // //1)
// // // console.log(typeof Number('5'));
// // // //2)
// // // console.log(typeof (5 + +'5'));
// // // //3)
// // // console.log(typeof parseInt('15px', 10));

// // // let ans = +prompt('Hello?', '');

// // // //false: 0, '', null, undefined, NaN\

// // // let switcher = null;

// // // if (switcher) {
// // //     console.log('working..');
// // // }

// // // switcher = 1;

// // // if (switcher) {
// // //     console.log('working..');
// // // }

// // // //2)
// // // console.log(typeof Boolean('5'));
// // // //3)
// // // console.log(typeof !!'5');

// // // let arr = ['plum.png', 'orange.jpeg', 'apple.bmp'];

// // // console.log(arr[0]);

// // // alert('hellow world');

// // // let answer = confirm("Are you here?");

// // // console.log(answer);

// // // let answer = +prompt("Есть ли вам 18?", "Да");

// // // console.log(typeof (answer));

// // // var x = 4;
// // // var b = x;
// // // var c = b * 2 - 2;
// // // console.log(c);

// // // console.log('arr' + '- object');
// // // console.log('4' + +'- object');

// // // let incr = 10,
// // //     decr = 10;

// // // console.log(incr++);
// // // console.log(decr--);

// // // console.log(5 % 2);
// // // console.log("2" === 2);

// // // let isChecked = false,
// // //     isClose = false;
// // // console.log(isChecked || !isClose);

// // //условия:

// // // if (1) {
// // //     console.log('Верно!');
// // // } else {
// // //     console.log("Неверно");
// // // }

// // // let num = 50;
// // // if (num < 49) {
// // //     console.log('Неверно');
// // // } else if (num > 100) {
// // //     console.log("Много!");
// // // } else {
// // //     console.log('Верно!');
// // // }
// // // (num == 50) ? console.log('Верно!'): console.log('Неверно');

// // // switch (num) {
// // //     case num < 49:
// // //         console.log('Неверно!');
// // //         break;
// // //     case num > 100:
// // //         console.log("Много!");
// // //         break;
// // //     case num > 80:
// // //         console.log('Всё ещё много');
// // //         break;
// // //     case 50:
// // //         console.log('Верно!');
// // //         break;
// // //     default:
// // //         console.log("Что-то пошло не так");
// // //         break;
// // // }

// // // //ЦИКЛЫ:

// // // let num = 50;
// // // // while (num < 55) {
// // // //     console.log(num);
// // // //     num++;
// // // // }
// // // do {
// // //     console.log(num);
// // //     num++;
// // // }
// // // while (num < 55);

// // // for (let i = 1; i < 8; i++) {
// // //     if (i == 6) {
// // //         continue
// // //     }
// // //     console.log(i);
// // // }
// // // console.log(x);
// // // let x = 5;
// // // console.log([] + false - null + true);

// // // let y = 1;
// // // let x = y = 2;
// // // alert(x);

// // // console.log([] + false - null + true);

// // // let y = 1;
// // // let x = y = 2;
// // // console.log(null || 2 && 3 || 4);