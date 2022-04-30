// 1
function compareString(str1, str2){
    if(str1.length > str2.length ){
        return 1;
    }
    else if(str1.length < str2.length){
        return -1;
    }
    else{
        return 0;
    }
}

console.log(compareString("Check string", "Check string"));
console.log(compareString("Check string", "Check string euf9fu"));

// 2
function firstUpper(str){
    return str[0].toUpperCase() + str.slice(1);
}
console.log(firstUpper("srjpejepaogj"))

// 3
let count = 0;
let stringsearch = ["у","е","ы","а","о","э","я","и","ю"];

function checkVowels(str){
    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < stringsearch.length; j++){
            if(str[i].toUpperCase() === stringsearch[j].toUpperCase()){
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(checkVowels("Ыоапр ывряО"))

// 4
function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return Boolean(lowerStr.includes('100% бесплатно') || lowerStr.includes('только сегодня') || lowerStr.includes('не удаляйте') || lowerStr.includes('ххх'));
}

console.log(checkSpam("100% бесплатно ы09кагу  фуа9фуна явмршвя0м иясошяв не удаляйте"))
console.log(checkSpam("100ы09кагу  фуа9фуна явмршвя0м иясошяв "))

// 5
function reductionStr(str, num) {
    return str.slice(-num)+"...";
}

console.log(reductionStr("aaoifhaeoifh", 3))

// 6
function checkPalindrom(str){
    return str.split()[0] === str.split().reverse()[0];
}

console.log(checkPalindrom("Ыоапр ывряО"))
console.log(checkPalindrom("123454321"))

// 7
function checkWord(str){
    return str.split(" ").length
}

console.log(checkWord("Ыоапр ывряО dizuge elgies zsfiihyae"))

// 8

function checkLonger(str){
    let arr = str.split(" ");
    let mostWord = 0;
    let index;
    arr.forEach(el=>{
        if(mostWord < el.length){
            mostWord = el.length;
            index = arr.indexOf(el);
        }
    })
    return arr[index];
}

console.log(checkLonger("Ыоапр ывряО dizuge elgies zsfiihyae"))

// 9
function checkChar(str, char){
    let arr = Array.from(str)
    let index = [];
for(let i = 0; i <arr.length; i++){
        if(arr[i] === char){
            index.push(i);
        }
    }
    return {index, count: index.length};
}

console.log(checkChar("vhaeiuv aosifh a asiufc a sidu asdpau awf ewe e", "e"))//4

// 10
function checkSummary(str){
    let arr = str.split(" ");
    let sum = 0;
    for(let i = 0;i < arr.length; i++){
        sum += arr[i].length;
    }
    return sum / arr.length;
}

console.log(checkSummary("vhaeiuv vhaeiuv"))//7