// 1
class Marker{
    constructor({color, countInk}) {
        this.color = color;
        this.countInk = countInk;
    }
    print(string){
        let len = string.split(' ').join('').length;
        if(this.countInk > len*0.5){
        let h1 = document.getElementById("root");
        h1.innerText = string;
        h1.style.color = this.color;
        } else{
            alert("Недостаточно чернил в маркере!")
        }
    }
}

class RefueleresMarker extends Marker{
    seasoingMarker(seas){
        this.countInk =+ seas;
    }
}

const redMarker = new Marker({color: "red", countInk: 10})
// redMarker.print("WOOWOWOWOWOOW    "); // хватает чернил и выводится
// redMarker.print("WOOWOWOWOWOOW    ef09efy we 09euf09e7f  a-08f -e0f 09e7f 0w9e f"); // не хватает чернил и не выводится


const refRedMarker =  new RefueleresMarker({color: "red", countInk: 10});
// refRedMarker.print("WOOWOWOWOWOOW    ef09efy we 09euf09e7f  a-08f -e0f 09e7f 0w9e f"); // не хватает чернил и не выводится
// refRedMarker.seasoingMarker(50)
// refRedMarker.print("WOOWOWOWOWOOW    ef09efy we 09euf09e7f  a-08f -e0f 09e7f 0w9e f"); // хватает чернил и выводится

// 2

class ExtendedDate extends Date{
    getDateText(){
        let month = this.getMonth();
        let day = this.getDay();
        switch (month+1){
            case 1: { return console.log(`${day} января`); break;}
            case 2: {return console.log(`${day} фуевраля`); break;}
            case 3: {return console.log(`${day} марта`); break;}
            case 4: {return console.log(`${day} апреля`); break;}
            case 5: {return console.log(`${day} мая`); break;}
            case 6: {return console.log(`${day} июня`); break;}
            case 7: {return console.log(`${day} июля`); break;}
            case 8: {return console.log(`${day} августа`); break;}
            case 9: {return console.log(`${day} сентября`); break;}
            case 10: {return console.log(`${day} октября`); break;}
            case 11: {return console.log(`${day} ноября`); break;}
            case 12: {return console.log(`${day} декабря`); break;}
        }
    }
    checkTimeDate(yearP, monthP, dayP){
        let nowMonth = this.getMonth()+1;
        let nowDay = this.getDay();
        let nowYear = this.getFullYear();
        let dayAllNow = nowMonth*30+nowDay+nowYear*365;
        let dayAll = monthP*30+dayP+yearP*365;
        if(dayAllNow > dayAll){
            return false;
        }
        else{
            return true;
        }
    }
    checkLeapYear(year){
        if(year%4==0){
            console.log("This year is leap year")
        }else{
            console.log("This year is not leap year")
        }
    }
    getNextDate(year, month, day){
        console.log(`${day+1 < 10 ? "0"+(day+1) : day+1}.${month < 10 ? "0"+month : month}.${year}`)
    }
}

const date = new ExtendedDate();
// date.getDateText();
// console.log(date.checkTimeDate(2021, 4, 30))
// console.log(date.checkTimeDate(2023, 4, 30))
// date.checkLeapYear(2024)
// date.checkLeapYear(2022)
// date.getNextDate(2022, 30, 4)

// 3
class Empoloyee{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class EmpTable{
    constructor(array) {
        this.array = array;
    }
    getHtml(){
        let list_employee = document.getElementById("list_employee");
        this.array.map(el=> {
            return list_employee.innerHTML += `<div>${el.name} - ${el.age} лет</div>`;
        })
    }
}

//Создаем массив
let arr = [];
for(let i = 0; i < 10; i++){
    let employee = new Empoloyee("Andrey", i+20)
    arr[i] = employee;
}
let empltable = new EmpTable(arr);
empltable.getHtml();

class StyledEmpTable extends EmpTable{
    constructor(array, color,back_color) {
        super(array);
        this.color = color;
        this.back_color = back_color;
    }
    getStyles(){
        return `background: ${this.back_color}; color:${this.color};`;
    }
    getHtml() {
        let list_employee = document.getElementById("list_employee");
        list_employee.style = this.getStyles();
        this.array.map(el=> {
            console.log(list_employee)
            return list_employee.innerHTML += `<div>${el.name} - ${el.age} лет</div>`;
        })
    }
}

let styledemptable = new StyledEmpTable(arr, "white", "red");

styledemptable.getHtml();