let root = document.getElementById('root');
let form = document.createElement('form');
form.id = "signUp";
form.name = "signUpForm";
form.method = "PUT";
form.action = "";
form.onsubmit = ()=>{return checkForm()}
// form.addEventListener("submit",()=> checkForm());

let h3 = document.createElement('h3');
h3.innerText = "Registration";
form.append(h3);

let label = document.createElement('label');
let br = document.createElement('br');
let div = document.createElement('div');
div.classList = "text-content";
let span = document.createElement('span');
span.innerText = "Email";
let spanError = document.createElement('span');
spanError.id = "errorEmail";
spanError.classList = "error";
let input = document.createElement('input');
input.type="email";
input.name="email";
input.id="email";

div.append(span, spanError);
label.append(br, div, input);


let labelPassword = label.cloneNode(true);
labelPassword.childNodes[1].childNodes[0].innerText = "Password";
labelPassword.childNodes[1].childNodes[1].id="errorPassword";
labelPassword.childNodes[2].type = "password";
labelPassword.childNodes[2].name = "password";
labelPassword.childNodes[2].id = "password";

let labelRepeat = label.cloneNode(true);
labelRepeat.childNodes[1].childNodes[0].innerText = "Repeat";
labelRepeat.childNodes[1].childNodes[1].id="errorPasswordRep";
labelRepeat.childNodes[2].type = "password";
labelRepeat.childNodes[2].name = "passwordRepeat";
labelRepeat.childNodes[2].id = "passwordRepeat";

let labelSubmit = document.createElement('label')
let inputSubmit = document.createElement('input')
inputSubmit.type = "submit";
inputSubmit.value = "Sign Up";
inputSubmit.id = "signUpBtn";

labelSubmit.append(br, inputSubmit);

form.append(label, labelPassword, labelRepeat, labelSubmit);
root.append(form)

let errorPassword = labelPassword.childNodes[1].childNodes[1];
let errorEmail = spanError;
let errorPasswordRep = labelRepeat.childNodes[1].childNodes[1];




function checkForm(){
    let email = input.value;
    let password = labelPassword.childNodes[2].value;
    let passwordRepeat = labelRepeat.childNodes[2].value;

    if(email.length === 0) {
        errorEmail.innerText = "Поле email должно быть заполнено";
        return false;
    } else {
        errorEmail.innerText = "";
    }
    if(password.length === 0){
        errorPassword.innerText = "Поле password должно быть заполнено";
        return false;
    }
    else{
        errorPassword.innerText = "";
    }
    if(passwordRepeat.length === 0){
        errorPasswordRep.innerText = "Поле repeat должно быть заполнено";
        return false;
    }
    else{
        errorPasswordRep.innerText = "";
    }

    if(email[0] !== email[0].toUpperCase()){
        errorEmail.innerText = "Email должен начинаться с заглавной буквы";
        return false;
    }
    else if(email.split("").indexOf("-") === -1){
        errorEmail.innerText = "Должен присутствовать знак -";
        return false;
    }
    else if(email.split("-")[0].length < 4 || email.split("-")[0].length > 7){
        errorEmail.innerText = "В email до знака - должно быть не меньше 4 и не больше 7 символов";
        return false;
    }
    else if(parseInt(email.replace( /\D/g, '')) || 0){
        errorEmail.innerText = "В части до знака - не должно быть цифр";
        return false;
    }
    else{
        errorEmail.innerText = "";
    }

    let upBool = false;
    let lowBool = false;
    password.split("").forEach(el=>{
        if(el === el.toUpperCase()) {
            upBool = true;
        }
        if(el === el.toLowerCase()){
            lowBool = true;
        }
    })
    let arr = password.match(/\d/g);
    console.log(arr)

    if(password.length  < 6){
        errorPassword.innerText = "Пароль должен быть не меньше 6 символов";
        return false;
    }
    else if(!upBool){
        errorPassword.innerText = "Пароль должен содержать минимум один символ верхнего регистра"
        return false;
    }
    else if(!lowBool){
        errorPassword.innerText = "Пароль должен содержать минимум один символ нижнего регистра"
        return false;
    }
    else if(arr === null){
        errorPassword.innerText = "Пароль должен содержать минимум одну цифру"
        return false;
    } else{
        errorPassword.innerText = ""
    }

    if(passwordRepeat !== password){
        errorPasswordRep.innerText = "Пароль не совпадает с значением выше";
        return false;
    }
    else{
        return window.open("second.html");
    }
}