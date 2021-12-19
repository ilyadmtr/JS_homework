let num = prompt("Введите трехзначное число: ")

let units = String(num%10);
num = num/10;

let tenths = String(Math.floor(num%10));
num = num/10;

let hundredths = String(Math.floor(num%10));
// alert(`Число задом-наперед: ${units.toString + tenths.toString + hundredths.toString}`);
alert(`Число задом-наперед: ${units + tenths + hundredths}`)

