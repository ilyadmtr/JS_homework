// 1
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);


let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.classList = "bor"
heading_1.innerHTML = "Firstname";
let heading_2 = document.createElement('th');
heading_2.classList = "bor"
heading_2.innerHTML = "Lastname";
let heading_3 = document.createElement('th');
heading_3.classList = "bor"
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);



let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.classList = "bor";
row_2_data_1.innerHTML = "Bill";
let row_2_data_2 = document.createElement('td');
row_2_data_2.classList = "bor";
row_2_data_2.innerHTML = "Gates";
let row_2_data_3 = document.createElement('td');
row_2_data_3.classList = "bor";
row_2_data_3.innerHTML = "Microsoft";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);



let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.classList = "bor";
row_3_data_1.innerHTML = "Timothy";
let row_3_data_2 = document.createElement('td');
row_3_data_2.classList = "bor";
row_3_data_2.innerHTML = "Cook";
let row_3_data_3 = document.createElement('td');
row_3_data_3.classList = "bor";
row_3_data_3.innerHTML = "Apple";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.classList = "bor";
row_4_data_1.innerHTML = "Larry";
let row_4_data_2 = document.createElement('td');
row_4_data_2.classList = "bor";
row_4_data_2.innerHTML = "Page";
let row_4_data_3 = document.createElement('td');
row_4_data_3.classList = "bor";
row_4_data_3.innerHTML = "Google";

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.classList = "bor";
row_5_data_1.innerHTML = "Mark";
let row_5_data_2 = document.createElement('td');
row_5_data_2.classList = "bor";
row_5_data_2.innerHTML = "Zuckerberg";
let row_5_data_3 = document.createElement('td');
row_5_data_3.classList = "bor";
row_5_data_3.innerHTML = "Facebook";

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
tbody.appendChild(row_5);

document.getElementById('body').appendChild(table);

let styleTd = document.querySelectorAll('.bor');
for( let i = 0; i < styleTd.length; i++){
    styleTd[i].style.border = "1px solid black";
    styleTd[i].addEventListener("mouseenter", ()=>{
        styleTd[i].style.background = "red";
    })
    styleTd[i].addEventListener("mouseleave", ()=>{
        styleTd[i].style.background = "white";
    })
}


// 2


