"use strict"

// 1

let timeObj = {
  hours: 9,
  minutes: 35,
  seconds: 0,

  showTime(){
    console.log(`${((this.hours < 10) && "0"+this.hours) || this.hours}:${((this.minutes < 10) && "0"+this.minutes) || this.minutes}:${((this.seconds < 10) && "0"+this.seconds) || this.seconds}`)
    return;
  },
  timeInSeconds(){
    return this.hours*3600+this.minutes*60+this.seconds;
  },
  secEdit(seconds=0){
    let addSec = this.timeInSeconds() + seconds;
    return {
      hours: Math.floor(addSec / 3600),
      minutes: Math.floor((addSec - Math.floor(addSec/3600)*3600)/60),
      seconds: Math.floor(((addSec - Math.floor(addSec/3600)*3600)/60)*60) - Math.floor((addSec - Math.floor(addSec/3600)*3600)/60)*60
    }
  },
  minEdit(minutes=0){
    let addSec = this.timeInSeconds() + minutes*60;
    return {
      hours: Math.floor(addSec / 3600),
      minutes: Math.floor((addSec - Math.floor(addSec/3600)*3600)/60),
      seconds: Math.floor(((addSec - Math.floor(addSec/3600)*3600)/60)*60) - Math.floor((addSec - Math.floor(addSec/3600)*3600)/60)*60
    }
  },
  hourEdit(hours=0){
    let addSec = this.timeInSeconds() + hours*3600;
    return {
      hours: Math.floor(addSec / 3600),
      minutes: Math.floor((addSec - Math.floor(addSec/3600)*3600)/60),
      seconds: Math.floor(((addSec - Math.floor(addSec/3600)*3600)/60)*60) - Math.floor((addSec - Math.floor(addSec/3600)*3600)/60)*60
    }
  }
}

timeObj.showTime();
console.log(timeObj.secEdit(30))
console.log(timeObj.minEdit(60))
console.log(timeObj.hourEdit(2))