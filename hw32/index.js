let data = [10,20,30,40]
let color = ["red","green","blue","yellow"]
var prevAngle = 0;
let c = document.getElementById('c').getContext('2d');
let summary = 0;
for(let el of data){
    summary+=el;
}

for(var i=0; i<data.length; i++) {
    let fraction = data[i]/summary;
    // найти все данных для сегмента.
    // вычисляем начальный угол
    var angle = prevAngle + fraction*Math.PI*2;
    // задаем цвет для сегмента
    // создаём контур
    console.log(angle)
    c.fillStyle = color[i];
    let metrics = c.measureText(`${data[i]}`);
    c.beginPath();
    c.moveTo(250,250);
    c.arc(250,250, 100, prevAngle, angle, false);
    c.lineTo(250,250);
    c.closePath();
    c.fill();
    c.fillText(metrics, prevAngle, angle)
    // заливаем его
    // обводим его
    // обновляем для следующей итерации цикла
    prevAngle = angle;
}
