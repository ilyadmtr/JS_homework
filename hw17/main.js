// 1
function task1(str){
    let num = str.match(/\d+/g).join('').length;
    let words = str.match(/[a-z]/gi).join('').length;
    let other = str.length - num - words;
    return {num, words, other}
}

console.log(task1("vhaeiuv vhaeiuv 14- dfdvkh# 309"))

// 2
function task2(str){
    let arr = Array.from(str);
    for(let i = 0; i < arr.length;i++){
        if(arr[i].match(/\d+/g)){
            arr[i] = "_";
        }
        else if(arr[i].match(/[a-z]/gi)){
            if(arr[i] === arr[i].toLowerCase()){
                arr[i] = arr[i].toUpperCase();
            }
            else if(arr[i] === arr[i].toUpperCase()){
                arr[i] = arr[i].toLowerCase();
            }
        }
    }
    return arr;
}

console.log(task2("aA1efaOPOj902"))

// 3
function task3(str){
    let arr = str.split("-");
    return arr[0]+arr[1][0].toUpperCase()+arr[1].slice(1);
}

console.log(task3("font-size"))

// 4
function task4(str){
    let arr = str.split(" ");
    let abb = '';
    arr.forEach(el=>{
        return abb += el[0].toUpperCase();
    })
    return abb
}

console.log(task4("cascading style sheets"))

// 5
function task5(...str){
    let sum = "";
    str.forEach(el=>{
        sum += el
    })
    return sum;
}

console.log(task5("cascadingstylesheets", "efpeojv", "nogiae"))

// 6
function task6(url) {
    let arr1 = url.split("://");
    let arr2 = arr1[1].split("/");

    let protocol = arr1[0];
    let domain = arr2[0];
    arr2.shift();
    let way = arr2.join("/");

    return {protocol, domain, way}
}

console.log(task6("https://itstep.org/ua/about"))