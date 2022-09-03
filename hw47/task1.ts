abstract class Transport{
    abstract modelName: string;
    abstract company: string;
    protected engCapacity: number;
    abstract dateOfManufacture: string;
    protected  maxSpeed: number;
    //state (good - true, bad - false)
    public state: boolean;
    abstract showInfo():void;
}

class Auto extends Transport{
    public modelName:string;
    public company:string;
    protected maxSpeed:number;
    protected engCapacity:number;
    public dateOfManufacture:string;
    public state: boolean;
    constructor(modelName, company, maxSpeed, engCapacity, dateOfManufacture, state) {
        super();
        this.modelName = modelName;
        this.company= company;
        this.maxSpeed= maxSpeed;
        this.engCapacity= engCapacity;
        this.dateOfManufacture= dateOfManufacture;
        this.state= state;
    }
    showInfo() {
        let div = document.getElementById('content');
        let item = document.createElement('div');
        item.innerHTML = `Назва моделі: ${this.modelName}, Компанія: ${this.company}, Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engCapacity}, Дата виробництва: ${this.dateOfManufacture}, Стан: ${this.state ? "хороший" : "поганий"}`
        div.append(item);
    }
}
class Plane extends Transport{
    public modelName:string;
    public company:string;
    protected maxSpeed:number;
    protected engCapacity:number;
    public dateOfManufacture:string;
    public state: boolean;
    constructor(modelName, company, maxSpeed, engCapacity, dateOfManufacture, state) {
        super();
        this.modelName = modelName;
        this.company= company;
        this.maxSpeed= maxSpeed;
        this.engCapacity= engCapacity;
        this.dateOfManufacture= dateOfManufacture;
        this.state= state;
    }
    showInfo() {
        let div = document.getElementById('content');
        let item = document.createElement('div');
        item.innerHTML = `Назва моделі: ${this.modelName}, Компанія: ${this.company}, Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engCapacity}, Дата виробництва: ${this.dateOfManufacture}, Стан: ${this.state ? "хороший" : "поганий"}`
        div.append(item);
    }
}
class Ship extends Transport{
    public modelName:string;
    public company:string;
    protected maxSpeed:number;
    protected engCapacity:number;
    public dateOfManufacture:string;
    public state: boolean;
    constructor(modelName, company, maxSpeed, engCapacity, dateOfManufacture, state) {
        super();
        this.modelName = modelName;
        this.company= company;
        this.maxSpeed= maxSpeed;
        this.engCapacity= engCapacity;
        this.dateOfManufacture= dateOfManufacture;
        this.state= state;
    }
    showInfo() {
        let div = document.getElementById('content');
        let item = document.createElement('div');
        item.innerHTML = `Назва моделі: ${this.modelName}, Компанія: ${this.company}, Максимальна швидкість: ${this.maxSpeed}, Об'єм двигуна: ${this.engCapacity}, Дата виробництва: ${this.dateOfManufacture}, Стан: ${this.state ? "хороший" : "поганий"}`
        div.append(item);
    }
}

let auto1 = new Auto('Mercedec', "Mercedec", 300, 40, "24.12.2010", false);
let auto2 = new Auto('Shavrolet', "Shavrolet", 350, 50, "05.01.2020", true);
let plane1 = new Plane('Boing', "Boing", 1200, 350, "03.09.2022", false);
let plane2 = new Plane('Nester', "X", 1500, 1000, "10.01.2020", true);
let ship1 = new Ship('Craiser', "Avrora", 200, 1000, "14.06.2000", false);
let ship2 = new Ship('T-34', "Krai", 400, 900, "16.04.1999", true);

let array:Transport[] = [];
array.push(auto1)
array.push(auto2)
array.push(plane1)
array.push(plane2)
array.push(ship1)
array.push(ship2);

for (const transport of array) {
    transport.showInfo();
}