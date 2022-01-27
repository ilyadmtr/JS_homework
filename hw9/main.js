// 6
//считает совершенно число, и если число совершенное - true, иначе false
// function perfectNum(number){
//   let perf = 0;
//   for(let j = 1; j < number; j++){
//     if(number%j == 0){
//       perf += j;
//     }
//   }
//   if(perf == number){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
// //Ищет совершенные числа на указанном диапазоне
// function checkRange(start, end){
//   let arr = [];
//   console.log("Совершенные числа: ")
//   for(let i = start; i < end; i++){
//     // console.log(perfectNum(i)," ", i)
//     if(perfectNum(i)){
//       console.log(i)
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(checkRange(1,2000))//28


// 7
// function timeScreen(hours, minutes = "00", seconds = "00"){
//   if(hours < 10){
//     hours = "0"+hours;
//   }
//   else if(minutes < 10){
//     minutes = "0"+minutes;
//   }
//   else if(seconds < 10){
//     seconds = "0"+seconds;
//   }
//   return `${hours}:${minutes}:${seconds}`
// }
// console.log(timeScreen(9, 27));

// 8
// function returnSec(hour, min, sec){
//   return ((hour*3600)+(min*60)+sec);
// }
// console.log(returnSec(13, 50, 13))

// 9
// function returnFullTime(sec){
//   return `${Math.floor(sec/3600)}:${Math.floor((sec%3600)/60)}:${Math.floor(((sec%3600)%60))}`;
// }
// // console.log(returnFullTime(49813))

// // 10
// function date(yearF, monthF, dayF, yearS, monthS, dayS){
//   //если предположим что во всех месяцах 30 дней
//   // просто очень много проверок будет, но основная логика вот:
//   let secF = (yearF*31536000) + ((monthF-1)*2592000) +(dayF*86400);
//   let secS = (yearS*31536000) + ((monthS-1)*2592000) +(dayS*86400);
//   let reult
//   if(secF >= secS){
//     result = secF - secS;
//   }
//   else{
//     result = secS - secF;
//   }

//   return returnFullTime(result);
// }

// console.log(date(2022, 02, 27, 2022, 01, 27))