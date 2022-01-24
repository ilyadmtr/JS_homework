// 1
// let start = +prompt("Введите начало диапазона");
// let end = +prompt("Введите конец диапазона");
// let sum = 0;


// for(start; start <= end; start++){
//   sum+=start;
// }
// console.log(`Сумма чисел: ${sum}`)

// 2
// let a = +prompt("Введите первое число")
// let b = +prompt("Введите второе число")
// let comDivisor

// if(a >= b){
//   for(let i = 1; i <= a; i++){
//     if(a%i == 0 && b%i == 0){
//       comDivisor = i;
//     }
//   }
//   alert(`Наибольший общий делитель: ${comDivisor}`)
// }
// else if(b >= a){
//   for(let i = 1; i <= b; i++){
//     if(a%i == 0 && b%i == 0){
//       comDivisor = i;
//     }
//   }
//   alert(`Наибольший общий делитель: ${comDivisor}`)
// }

// 3

// let num = prompt("Введите число: ")

// console.log("Делители числа: ", num)
// for(let i = 1; i <= num; i++){
//   if(num%i == 0){
//     console.log(i)
//   }
// }

// 4

// var numb1 = prompt("Введите  число : ");
// alert(numb1.length);

// 5
// let even = 0, zero = 0, odd= 0, plus= 0, minus = 0;

// for(let i = 0; i<10; i++){
//   let num = +prompt("Введите число: ")

//   if(num < 0){
//     minus++
//   }

//   if(num > 0){
//     plus++
//   }

//   if(num%2 !== 0){
//     odd++
//   }

//   if(num%2 == 0){
//     even++
//   }

//   if(num == 0){
//     zero++
//   }
// }
// console.log(`Положительных чисел: ${plus}`)
// console.log(`Отрицательных чисел: ${minus}`)
// console.log(`Четных чисел: ${even}`)
// console.log(`Нечетных чисел: ${odd}`)
// console.log(`Нулей: ${zero}`)
