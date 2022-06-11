// 1
let ul = document.getElementById("ul")

let str;
do{
    str = prompt("Введите наполнение елемента списка: ");
    if(str !== null && str !== ""){
        let li = document.createElement("li");
        li.textContent = str;
        ul.append(li);
    }
}while(str !== null && str !== "")

// 2
