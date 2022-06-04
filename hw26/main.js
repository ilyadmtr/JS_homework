class userComment{
    #name;
    #date;
    #time;
    #comment;
    constructor(name, time, date, comment) {
        this.#name = name;
        this.#time = time;
        this.#date = date
        this.#comment = comment;
    }
    Print(){
        return `<li><h2>${this.#name}</h2><br><span>${this.#time}   ${this.#date}</span><br><br><span>${this.#comment}</span><hr></li>`
    }
}

let commentsArray = [];

let comments = document.getElementById("comments")
let name = document.getElementById("name")
let text = document.getElementById("text")
let ok = document.getElementById("ok")
let show = document.getElementById("show")


ok.addEventListener("click", ()=>{
    let now = new Date();
    let commentObj = new userComment(name.value, `${now.getHours() < 10 ? ("0" + now.getHours()) : now.getHours()}:${now.getMinutes() < 10 ? ("0" + now.getMinutes()) : now.getMinutes()}:${now.getSeconds() < 10 ? ("0" + now.getSeconds()) : now.getSeconds()}`,`${now.getDate() < 10 ? ("0"+now.getDate()) : now.getDate()}.${now.getMonth()+1 < 10 ? ("0"+(now.getMonth()+1)) : (now.getMonth()+1)}.${now.getFullYear()}`, text.value)
    commentsArray.push(commentObj);
    comments.innerHTML = `${commentObj.Print()}`;
})

show.addEventListener("click", ()=>{
    for(let i = 0; i < commentsArray.length; i++){
        comments.innerHTML += `${commentsArray[i].Print()}`;
    }
})
