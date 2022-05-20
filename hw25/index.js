// 1
let message = document.getElementById("message");
let i = 0;


function log(txt){
    message.insertAdjacentHTML('beforeend', `<li>${txt}</li>`)
}
function counter(){
i++;
}
document.addEventListener('readystatechange', () => {
    if(document.readyState === 'complete'){
        log('Успешно загружено -' + i)
        log('Ошибки загрузки -' + (3-i))
    }
});

// 2

let form = document.getElementById("form");
let text = document.getElementById("text")
let email = document.getElementById('email')

window.onbeforeunload = function (e){
    if(text.value.length > 0 || email.value.length > 0){
        e.returnValue = "Не сохранен текст";
        return "Не сохранен текст";
    }
    return null;
}


