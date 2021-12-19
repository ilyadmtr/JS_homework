const mgbInGgb = 1024;
const fileSize = 820;
let gigabyte = prompt("Введите количевство гигабайт: ")

alert(`Количество файлов размером 820мб, что помещается в указанное количество гигабайт: ${Math.floor((gigabyte*mgbInGgb)/fileSize)} `)
