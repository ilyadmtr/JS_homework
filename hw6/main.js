// 6
// let a, b, symbol
// let con = true
// do{
//   a = Number(prompt("Введите первое число"))
//   b = Number(prompt("введите второе число"))
//   symbol = prompt("Введите знак")
// switch(symbol){
// case "+": alert(a+b); break;
// case "-": alert(a-b); break;
// case "*": alert(a*b); break;
// case "**": alert(a**b); break;
// case "/": alert(a/b); break;
// default: alert(`${a} и ${b}`)
// }
// con = prompt("Хотите продолжить?")
// if(con == "да"){
//   con = true
// }
// else{
//   con = false
// }
// }
// while(con)

// 7
// let value, shft;
// let arr = [];


// value = prompt("Введите число")
// shft = prompt("Введите число, на которое нужно сдвинуть")

// arr = value.split('');
// for(let i = 0; i < +shft; i++){
//   arr.push(arr.shift());
// }

// alert(arr.join``)

// 8
// let i = 1;
// do{
//   console.log(i)
//   switch(i){
//     case 1: alert("Понедельник"); break;
//     case 2: alert("Вторник"); break;
//     case 3: alert("Среда"); break;
//     case 4: alert("Четверг"); break;
//     case 5: alert("Пятница"); break;
//     case 6: alert("Суббота"); break;
//     case 7: alert("Воскресенье"); break;
//   }
//   i += 1;
//   console.log(i)
//   if(i == 8){
//     i = 1
//   }
// }while(confirm("Хотите увидеть следующий день?"))

// 9
// var oneRow = '';
// for(let i = 2; i <= 9; i++){
//   for (var j = 1; j < 10; j++) {
//     oneRow  += (j*i) + " ";
//   }
//   console.log(oneRow);
//   oneRow = '';
// }

// 10
// let sortedArray = [];
// let lessMore;
// let start = 0;
// //Заполнение массива
// for(let i = 0; i < 100; i++){
//   sortedArray[i] = i;
// }
// let end = sortedArray.length - 1;

// alert("Загадайте число от 0 до 100")

//Бинарный поиск
//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         alert(middle);
//         moreLess = prompt("Введите = если число угадали, < если число меньше выведенного или > если число больше выведенного")
//         if(moreLess == "="){
//           let complete = alert("Ура! Число угадано!");
//           break;
//         }
//         else if(moreLess == ">"){
//           start = middle + 1;
//         }
//         else if(moreLess == "<"){
//           end = middle - 1;
//         }
//     }

