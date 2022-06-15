let root = document.getElementById('root');
let form = document.createElement('form');
form.id = "userInfo";
form.name = "userInfoForm";
form.method = "PUT";
form.action = "";
form.onsubmit = ()=>{return checkForm()};

let h3 = document.createElement('h3');
h3.innerText = "User Info";

let divWrapper = document.createElement("div");
divWrapper.classList = "wrapper";
let divLeft = document.createElement('div')
divLeft.classList = "left-side";
let divRight = document.createElement('div')
divRight.classList = "right-side";


let label = document.createElement('label');
let br = document.createElement('br');
let div = document.createElement('div');
div.classList = "text-content";
let span = document.createElement('span');
span.innerText = "First Name: ";
let spanError = document.createElement('span');
spanError.id = "errorFirstName";
spanError.classList = "error";
let input = document.createElement('input');
input.type="text";
input.name="name";
input.id="name";
div.append(span, spanError);
label.append(br, div, input);


let labelYearOfBirth = label.cloneNode(true);
labelYearOfBirth.childNodes[1].childNodes[0].innerText = "Year of birth: ";
labelYearOfBirth.childNodes[1].childNodes[1].id="errorYearOfBirth";
labelYearOfBirth.childNodes[2].type = "text";
labelYearOfBirth.childNodes[2].name = "yearOfBirthday";
labelYearOfBirth.childNodes[2].id = "yearOfBirthday";

let labelPhoneNumber = label.cloneNode(true);
labelPhoneNumber.childNodes[1].childNodes[0].innerText = "Phone number: ";
labelPhoneNumber.childNodes[1].childNodes[1].id="errorPhoneNumber";
labelPhoneNumber.childNodes[2].type = "text";
labelPhoneNumber.childNodes[2].name = "phoneNumber";
labelPhoneNumber.childNodes[2].id = "phoneNumber";

let labelLastName = label.cloneNode(true);
labelLastName.childNodes[1].childNodes[0].innerText = "Last name: ";
labelLastName.childNodes[1].childNodes[1].id="errorLastName";
labelLastName.childNodes[2].type = "text";
labelLastName.childNodes[2].name = "lastName";
labelLastName.childNodes[2].id = "lastName";

let labelSkype = label.cloneNode(true);
labelSkype.childNodes[1].childNodes[0].innerText = "Skype: ";
labelSkype.childNodes[1].childNodes[1].id="errorSkype";
labelSkype.childNodes[2].type = "text";
labelSkype.childNodes[2].name = "skype";
labelSkype.childNodes[2].id = "skype";


let select = document.createElement('select');
select.name = "sex";
let optionMale = document.createElement('option')
optionMale.value = "male";
optionMale.innerText = "male";
let optionFemale = document.createElement('option')
optionFemale.value = "female";
optionFemale.innerText = "female";
let spanSelect = document.createElement('span');
spanSelect.innerText = "Gender: ";
select.append(optionMale, optionFemale);

let labelSubmit = document.createElement('label')
let inputSubmit = document.createElement('input')
inputSubmit.type = "submit";
inputSubmit.value = "Save";
inputSubmit.id = "save";
labelSubmit.append(br, inputSubmit);

divRight.append(labelLastName,spanSelect, select, labelSkype)
divLeft.append(label, labelYearOfBirth, labelPhoneNumber);
divWrapper.append(divLeft, divRight);
form.append(h3, divWrapper, labelSubmit);
root.append(form);


function checkForm(){
    let name = input.value;
    let nameError = spanError;
    let surname = labelLastName.childNodes[2].value;
    let surnameError = labelLastName.childNodes[1].childNodes[1];
    let year = labelYearOfBirth.childNodes[2].value;
    let yearError = labelYearOfBirth.childNodes[1].childNodes[1];
    let phone = labelPhoneNumber.childNodes[2].value;
    let phoneError = labelPhoneNumber.childNodes[1].childNodes[1];


    if(!/^[a-zA-Za-яА-Я]+$/g.test(name)){
        nameError.innerText = "Не корректное значение"
        return false;
    }
    else if(name.length > 20){
        nameError.innerText = "Имя больше 20 символов"
        return false;
    }
    else{
        nameError.innerText = "";
    }

    if(!/^[a-zA-Za-яА-Я]+$/g.test(surname)){
        surnameError.innerText = "Не корректное значение"
        return false;
    }
    else if(surname.length > 20){
        surnameError.innerText = "Имя больше 20 символов"
        return false;
    } else{
        surnameError.innerText = "";
    }

    if(year.length === 0){
        yearError.innerText = "Отсутствует значение"
        return false;
    }
    else if(+year < 1900 || +year > 2022){
        yearError.innerText = "Некоректное значение даты"
        return false;
    } else{
        yearError.innerText = "";
    }

    if(!/^\+?\d{6,12}$/g.test(phone)){
        phoneError.innerText = "Некоректное значение номера телефона"
        return false;
    } else{
        phoneError.innerText = "";
    }
}