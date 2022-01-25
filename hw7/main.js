// 1
// function check(a, b){
//   if(a<b){
//     return -1;
//   }
//   else if(a>b){
//     return 1;
//   }
//   else if(a == b){
//     return 0;
//   }
// }
// console.log(check(1,2)) // -1
// console.log(check(2,1)) // 1
// console.log(check(2,2)) // 0

// 2
// let fact = 1;
// function factorial(num){
//   for(let i = 1; i <= num; i++){
//     fact *= i;
//   }
//   return fact;
// }

// console.log(factorial(9))

// 3
// function concatenation(a,b,c){
//   return Number(String(a)+String(b)+String(c));
// }
// console.log(concatenation(3,8,0))

// 4
// function square(widthFig, lengthFig = widthFig){
//   return widthFig*lengthFig;
// }
// console.log(square(4))

// 5
// let perf = 0;
// function perfectNum(number){
//   for(let i = 1; i < number; i++){
//     if(number%i == 0){
//       perf += i;
//     }
//   }
//   if(perf == number){
//     return "число совершенное";
//   }
//   else{
//     return "число не соверешенное";
//   }
// }
// console.log(perfectNum(496))