class ExtendedDate extends Date{
    getDateText(){
        let month = this.getMonth();
        let day = this.getDay();
        switch (month+1){
            case 1: { return document.write(`<h3>${day} січня</h3>`); break;}
            case 2: {return document.write(`<h3>${day} лютого</h3>`); break;}
            case 3: {return document.write(`<h3>${day} березня</h3>`); break;}
            case 4: {return document.write(`<h3>${day} квітня</h3>`); break;}
            case 5: {return document.write(`<h3>${day} травня</h3>`); break;}
            case 6: {return document.write(`<h3>${day} червня</h3>`); break;}
            case 7: {return document.write(`<h3>${day} липня</h3>`); break;}
            case 8: {return document.write(`<h3>${day} серпня</h3>`); break;}
            case 9: {return document.write(`<h3>${day} вересня</h3>`); break;}
            case 10: {return document.write(`<h3>${day} жовтня</h3>`); break;}
            case 11: {return document.write(`<h3>${day} листопада</h3>`); break;}
            case 12: {return document.write(`<h3>${day} грудня</h3>`); break;}
        }
    }
    checkTimeDate(date){
        let cur = new Date();
        let date1 = new Date(date)
        if(cur.getTime() > date1.getTime()){
            return false;
        }
        else{
            return true;
        }
    }
    checkLeapYear(year){
        if(year%4==0){
            document.write("<h3>This year is leap year</h3>")
        }else{
            document.write("<h3>This year is not leap year</h3>")
        }
    }
    getNextDate(){
        document.write(new ExtendedDate(this.getTime() + 86400000))
    }
}

const date = new ExtendedDate();
date.getDateText();
console.log(date.checkTimeDate("2021.4.30"))
console.log(date.checkTimeDate("2023.4.30"))
date.checkLeapYear(2024)
date.checkLeapYear(2022)
date.getNextDate()
