1
class PrintMachine{
    #font_size;
    #color;
    #font_family;
    constructor(font_size, color, font_family) {
        this.#font_size = font_size;
        this.#color = color;
        this.#font_family = font_family;
    }

    set color(value){
        this.#color = value;
    }
    print(text) {
        document.write(`<h2 style="color: ${this.#color}; font-size: ${this.#font_size} font-family:${this.#font_family}">${text}</h2>`)
    }
}

let printMachine = new PrintMachine("50px", "yellow", "Georgia")
printMachine.print("fohvrsivs")
printMachine.color = "blue";
printMachine.print("fohvrsivs")


class News{
    #h1;
    #text;
    #tags;
    #publication_date;
    constructor(h1, text, tags, publication_date) {
        this.#h1 = h1;
        this.#text = text;
        this.#tags = tags;
        this.#publication_date = publication_date;
    }
    getDayValue(){
        let currentDate = new Date();
        let ourDate = new Date(this.#publication_date);
        if(currentDate.toDateString() === ourDate.toDateString()){
            return "today"
        } else{
         let day = Math.floor((currentDate.getTime() - ourDate.getTime())/86400000)
            return day + " days ago";
        }
    }
    print(){
        document.write(`<h1>${this.#h1}</h1>`);
        document.write(`<span>${this.getDayValue()}</span>`);
        document.write(`<p>${this.#text}</p>`);
        this.#tags.forEach(el=>{
            return document.write(`<span>#${el}</span>`)
        })
    }
}

let news = new News("dfdvisd", "senofliaehfaefheafha9e", ["js", "react", "redux", "scss"], "2022.05.03")
news.print()