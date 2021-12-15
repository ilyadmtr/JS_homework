// 1
let namePrompt =  prompt('Как вас зовут?');

alert(`Привет, ${namePrompt}`);
// 2
const yearToday = 2021;
let birthdayUser = prompt('Укажите свой год рождения');

alert(`Ваш возраст: ${yearToday-birthdayUser}`);
// 3
let side = prompt('Укажите размер стороны квадрата(см):');
let perimeter = side*side;

alert(`Периметр квадрата(см2): ${perimeter}`);
// 4
let radius =  prompt('Введите радиус окружности(см)');
let S = Math.PI*radius*radius;

alert(`Площадь окружности(см2): ${S}`);
//5
let distance = prompt('Введите расстояние между городами(км)');
let time = prompt('Введите время, за которое хотите добраться(час)');
let speed = distance/time;

alert(`Скорость, с которой необходимо двигаться(км/час): ${speed}`)