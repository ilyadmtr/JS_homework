let mainForm = document.getElementById('color');
let typeSelect = document.getElementById('typeSelect');
let colorInput = document.getElementById('colorInput');
let codeInput = document.getElementById('codeInput');

let errorCode = document.getElementById('errorCode');
let errorColor = document.getElementById('errorColor');


class colorRectangle {
    constructor(color, type, code) {
        this.color = color;
        this.type = type;
        this.code = code;
    }
}

let array = [new colorRectangle("YELLOWGREEN", "RGB", "154,205,50"), new colorRectangle("DARKCYAN", "RGBA", "0, 139,139, 1"), new colorRectangle("ORANGERED", "HEX", "#FF4500")];


mainForm.onsubmit = function checkForm(e) {
    e.preventDefault();
    let select = typeSelect.value;
    let color = colorInput.value;
    let code = codeInput.value;


    if (color.length === 0) {
        errorColor.innerText = "Отсутствует значение";
        return false;
    } else if (code.length === 0) {
        errorCode.innerText = "Отсутсвует значение";
        return false;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].color === color) {
            errorColor.innerText = "Такой цвет уже существует";
            return false;
        }
    }

    if (!/^[a-zA-Za-яА-Я]+$/g.test(color)) {
        errorColor.innerText = "Не корректное значение"
        return false;
    } else {
        array.push(new colorRectangle(color, select, code))
        return Print();
    }
    if(select === "RGB"){
    if(!/^\d[0-255]+[,][0-255]+[,][0-255]+$/g.test(code)){
        errorCode.innerText = "Поле должно содержать три значения от 0 до 255"
        return false;
    }
    else{
        errorCode.innerText = '';
    }
    }
    else if(select === "RGBA"){
        if(!/^\d[0-255]+[,][0-255]+[,][0-255]+[,][0-1]+$/g.test(code)){
            errorCode.innerText = "Поле должно содержать три значения от 0 до 255 и одно от 0 до 1"
            return false;
        }
        else{
            errorCode.innerText = '';
        }
    }
    else{
        if(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(code)){
            errorCode.innerText = "Поле должно содержать кодировку типа HEX"
            return false;
        }
        else{
            errorCode.innerText = '';
        }
    }
}


let colorsBox = document.getElementById('colorsBox');


function Print() {
    colorsBox.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let wrapper = document.createElement('div');
        wrapper.classList = 'wrapper';
        let inside = document.createElement('div');
        inside.classList = 'inside';
        let colorIn = document.createElement('p');
        let typeIn = document.createElement('p');
        let codeIn = document.createElement('p');
        codeIn.innerText = array[i].code;
        colorIn.innerText = array[i].color;
        typeIn.innerText = array[i].type;
        console.log(array[i].code)
        if(array[i].type === "RGB"){
            wrapper.style = `background:rgb(${array[i].code});`
        }
        else if(array[i].type === "RGBA"){
            wrapper.style = `background:rgba(${array[i].code});`
        }
        else{
            wrapper.style = `background:${array[i].code};`
        }
        inside.append(colorIn, typeIn, codeIn);
        wrapper.append(inside);
        console.log(wrapper)
        colorsBox.append(wrapper);
    }
}

Print();