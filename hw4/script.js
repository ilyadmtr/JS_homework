// 1
// let age = prompt("Введите ваш возраст: ")
// //В задании почему то не учитывается возраст от 2 до 12
// if(age <=2 && age >= 0){
//   alert("Вы малыш")
// }
// else if(age > 2 && age < 12){
//   alert("Вы ребенок")
// }
// else if(age>= 12 && age <=18){
//   alert("Вы подросток")
// }
// else if(age > 18 && age <60){
//   alert("Вы взрослый")
// }
// else if(age >= 60){
//   alert("Вы пенсионер")
// }
// else{
//   alert("Неккоректное значение")
// }
// 2
// let symbol = +prompt("Введите символ: ")
// switch(symbol){
//   case(1): {alert("!")}
//   break;
//   case(2): {alert("@")}
//   break;
//   case(3): {alert("#")}
//   break;
//   case(4): {alert("$")}
//   break;
//   case(5): {alert("%")}
//   break;
//   case(6): {alert("^")}
//   break;
//   case(7): {alert("&")}
//   break;
//   case(8): {alert("*")}
//   break;
//   case(9): {alert("(")}
//   break;
//   case(0): {alert(")")}
//   break
// }
// 3
// let num = +prompt("Введите трёхзначное число: ")
// let units = num%10;
// num = num/10;
// let tenths = Math.floor(num%10);
// num = num/10;
// let hundredths = Math.floor(num%10);

// if(units == tenths){
//   console.log(`Есть одиноковые числа, и это число: ${units}`)
// }
// else if(units == hundredths){
//   console.log(`Есть одиноковые числа, и это число: ${units}`)
// }
// else if(hundredths == tenths){
//   console.log(`Есть одиноковые числа, и это число: ${hundredths}`)
// }
// else{
//   console.log("Одинаковых чисел нет")
// }
// 4
// let year = prompt("Введите год: ");
// if(year%400 == 0 || year%4 == 0 && year%100 != 0){
//   console.log("Это высокосный год")
// }
// else{
//   console.log("Это не высокосный год")
// }
// 5
let num = prompt("Введите пятираззрядное число: ")
let five = num%10;
num = num/10;
let four = Math.floor(num%10);
num = num/10;
let three = Math.floor(num%10);
num = num/10;
let two = Math.floor(num%10);
num = num/10;
let one = Math.floor(num%10);

if(five == one && four == two){
  console.log("Число является палиндромом")
}
else{
  console.log("Число не является палиндромом")
}