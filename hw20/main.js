// 1
class Test {
    #question;
    #variant;
    #answer;

    constructor(question, variant) {
        this.#question = question;
        this.#variant = variant;
    }

    printAnswer() {
        alert(this.#question)
        for (let i = 0; i < this.#variant.length; i++) {
            alert(`${i} - ${this.#variant[i]}`);
        }
    }

    set answer(value) {
        this.#answer = value;
    }

    get question() {
        return this.#question
    }

    get answer() {
        return this.#answer
    }

    get variant() {
        return this.#variant
    }

    checkAnswer(value) {
        value.split(",").forEach(el2 => {
            if (this.#answer.includes(+el2)) {
                alert("Відповідь правильна")
            } else {
                alert("Відповідь неправильна")
            }
        })
    }
}

// let test = new Test("Столиця України", ["Київ", "Нью-Йорк", "Львів"])
// test.answer = [0];
// test.printAnswer();
// test.checkAnswer(prompt("Введіть варіанти відповіді: "))


class MultipleChoiceTestItem extends Test {
    #hint;

    constructor(question, variant, hint) {
        super(question, variant);
        this.#hint = hint;
    }

    printAnswer() {
        alert(this.question)
        for (let i = 0; i < this.variant.length; i++) {
            alert(`${i} - ${this.variant[i]}`);
        }
        alert(`Підказка: ${this.#hint}`)
    }

    checkAnswer(value) {
        value.split(",").forEach(el2 => {
            if (this.answer.includes(+el2)) {
                alert("Відповідь правильна")
            } else {
                alert("Відповідь неправильна")
            }
        })
    }
}

// let multTest = new MultipleChoiceTestItem("Виберіть твори Шевченка", ["Заповіт", "ІЗ ЛІТ МОЄЇ МОЛОДОСТІ", "Учітеся, брати мої!"],  "Один із творів Шевченка виявляє його волю");
// multTest.answer = [0, 1, 2];
// multTest.printAnswer();
// multTest.checkAnswer(prompt("Введіть варіанти відповіді: "))


// 2
class Employer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    Print() {
        document.write(`<li>Employer: ${this.name} - ${this.age} years</li>`)
    }
}

class President extends Employer {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    Print() {
        document.write(`<li>President: ${this.name} - ${this.age} years. Salary: ${this.salary} $</li>`)
    }
}

let president = new President("Peter", 30, 100000)
president.Print();

class Manager extends Employer {
    constructor(name, age, salary, workTime) {
        super(name, age);
        this.salary = salary;
        this.workTime = workTime;
    }

    Print() {
        document.write(`<li>President: ${this.name} - ${this.age} years. Salary: ${this.salary} $. Work time: ${this.workTime} hours</li>`)
    }
}

let manager = new Manager("Kolya", 35, 2000, 150)
manager.Print();

class Worker extends Employer {
    constructor(name, age, salary, workTime, level) {
        super(name, age);
        this.salary = salary;
        this.workTime = workTime;
        this.level = level;
    }

    Print() {
        document.write(`<li>President: ${this.name} - ${this.age} years. Salary: ${this.salary} $. Work time: ${this.workTime} hours. Level: ${this.level}</li>`)
    }
}

let worker = new Worker("Andrii", 25, 1000, 150, "professional")
worker.Print();

let array = [
    {name: "Andrey", age: 23},
    {name: "Maksym", age: 24},
    {name: "Liosha", age: 25},
    {name: "Vanya", age: 26},
    {name: "Rostik", age: 27},
    {name: "Dyma", age: 28},
    {name: "Nazar", age: 29},
    {name: "Pasha", age: 30},
    {name: "Zenya", age: 31}
]

array.forEach(el => {
    let elWr = new Employer(el.name, el.age);
    elWr.Print()
})

class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }

    getHtml() {
        let table = document.getElementById("table");
        this.arr.map(el=> {
            return table.innerHTML += `<tr><th>${el.num}</th><th>${el.name}</th><th>${el.age}</th></tr>`;
        })
    }
}

let empTable = new EmpTable([
    {num: 23058, name: "Andrey", age: 23},
    {num: 23059,name: "Maksym", age: 24},
    {num: 33058,name: "Liosha", age: 25},
    {num: 23158,name: "Vanya", age: 26},
    {num: 23058,name: "Rostik", age: 27},
    {num: 23098,name: "Dyma", age: 28},
    {num: 36058,name: "Nazar", age: 29},
    {num: 23478,name: "Pasha", age: 30},
    {num: 23087,name: "Zenya", age: 31}
]);
empTable.getHtml()