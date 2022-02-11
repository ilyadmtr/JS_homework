"use strict"

// 1
// let auto = {
//   producer: "BMW",
//   model: "X5",
//   year: 1999,
//   averageSpeed: 150,

//   showInfo(){
//     console.log(`Автомобиль от автопроизводителя ${this.producer} модели ${this.model}, год выпуска: ${this.year}, средняя скорость: ${this.averageSpeed} км/ч`)
//     return;
//   },
//   calcTime(distance){
//     let time = distance/this.averageSpeed;

//     let timeCopy = time;
//     if(timeCopy >= 4){
//     while(timeCopy > 0){
//       time+=1;
//       timeCopy-=4;
//     }
//   }
//     return time;
//   }
// };
// console.log(auto.showInfo())
// console.log(auto.calcTime(1800))

// 2
let functionsFraction = {
  firstFraction: {numerator: 6, denominator: 8},
  secondFraction: {numerator: 7, denominator: 21},

  fractAdditions(){
    let commonDenom = this.firstFraction.denominator * this.secondFraction.denominator;
    let commonNumer = this.firstFraction.numerator* this.secondFraction.denominator + this.secondFraction.numerator * this.firstFraction.denominator;
    return {numerator: commonNumer, denominator: commonDenom}
  },
  fractSubtraction(){
    let commonDenom = this.firstFraction.denominator * this.secondFraction.denominator;
    let commonNumer = this.firstFraction.numerator* this.secondFraction.denominator - this.secondFraction.numerator * this.firstFraction.denominator;
    return {numerator: commonNumer, denominator: commonDenom}
  },
  fractMultiple(){
    let commonDenom = this.firstFraction.denominator * this.secondFraction.denominator;
    let commonNumer = this.firstFraction.numerator * this.secondFraction.numerator;
    return {numerator: commonNumer, denominator: commonDenom}
  },
  fractDivision(){
    let commonDenom = this.firstFraction.denominator * this.secondFraction.numerator;
    let commonNumer = this.firstFraction.numerator * this.secondFraction.denominator;
    return {numerator: commonNumer, denominator: commonDenom}
  },
  fractShorten(){
    let num = this.firstFraction.numerator;
    let den = this.firstFraction.denominator;

    if(num <= den){
    for(let i = 1; i <= num; i++) {
      if(num%i == 0 && den%i == 0){
        num = num / i;
        den = den / i;
      }
    }
    }
    else{
    for(let i = 1; i <= den; i++) {
      if(num%i == 0 && den%i == 0){
        num = num / i;
        den = den / i;
      }
    }
    }
    return {numerator: num, denominator: den}
  }
}
console.log(functionsFraction.fractAdditions())
console.log(functionsFraction.fractSubtraction())
console.log(functionsFraction.fractMultiple())
console.log(functionsFraction.fractDivision())
console.log(functionsFraction.fractShorten())