// 1
class Button {
    #width;
    #height;
    #text;

    constructor(width, height, text) {
        this.#height = height;
        this.#width = width;
        this.#text = text;
    }

    showBtn() {
        document.write(`<button style="width: ${this.#width}; height: ${this.#height};">${this.#text}</button>`)
    }

    get getHeight() {
        return this.#height;
    }

    get getWidth() {
        return this.#width;
    }

    get getText() {
        return this.#text;
    }
}

class ChildButton extends Button {
    #color;
    constructor(width, height, text, color) {
        super(width, height, text);
        this.#color = color;
    }

    showBtn() {
        document.write(`<button style="width: ${this.getWidth}; height: ${this.getHeight}; color: ${this.#color}">${this.getText}</button>`)
    }
}

let btn = new ChildButton("300px", "200px", "WOW", "red");
btn.showBtn();


// 2
class Figure{
    #name;
    constructor(name, sideCount, arraySizes) {
        this.#name = name;
        this.sideCount = sideCount;
        this.arraySizes = arraySizes;
    }
    get nameFigure(){
        return this.#name;
    }
    printInfo(){
        document.write(`<h2>${this.nameFigure}</h2>`)
        for(let i = 0; i <this.arraySizes.length; i++){
            document.write(`<li>Сторона ${i+1} - ${this.arraySizes[i]}</li>`)
    }
        document.write(`<h4>Площадь - ${this.calcS()}</h4>`)
        document.write(`<h4>Периметр - ${this.calcP()}</h4>`)
    }
    calcS(){

    }
    calcP(){
        let P=0;
        this.arraySizes.forEach(el=>{
            P+=el
        })
        return P;
    }
}

class Square extends Figure{
    constructor(name, sideCount, arraySizes) {
        super(name, sideCount, arraySizes);
    }
    calcS() {
        return this.arraySizes[0]**2;
    }
}

let sqr = new Square("Квадрат", 4, [4,4,4,4])
sqr.printInfo();

class Rectangle extends Figure{
    constructor(name, sideCount, arraySizes) {
        super(name, sideCount, arraySizes);
    }
    calcS() {
        return this.arraySizes[0]*this.arraySizes[1];
    }
}

let rec = new Rectangle("Прямоугольник", 4, [4,5,4,5])
rec.printInfo();

class Triangle extends Figure{
    constructor(name, sideCount, arraySizes) {
        super(name, sideCount, arraySizes);
    }
    calcS() {
        let p = this.calcP()/2;
        return Math.sqrt(p*(p-this.arraySizes[0])*(p-this.arraySizes[1])*(p-this.arraySizes[2]));
    }
}

let tri = new Triangle("Треугольник", 3, [4,5,4])
tri.printInfo();

let array = [
    {
        name: "Треугольник",
        sideCount: 3,
        arraySizes: [4,5,6]
    },
    {
        name: "Прямоугольник",
        sideCount: 4,
        arraySizes: [10,5,10,5]
    },
    {
        name: "Квадрат",
        sideCount: 4,
        arraySizes: [6,6,6,6]
    },
]

array.forEach(el=>{
    let arrFig = new Figure(el.name, el.sideCount, el.arraySizes);
    arrFig.printInfo()
    return arrFig;
})