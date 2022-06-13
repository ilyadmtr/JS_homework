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
        let h2 = document.createElement("h2");
        h2.innerText = this.#name
        let br = document.createElement("br");
        let spanTime = document.createElement('span');
        spanTime.innerText = `${this.#time}   ${this.#date}`
        let spanComment = document.createElement('span');
        spanComment.innerText = this.#comment;
        let hr = document.createElement('hr');

        li.append(h2, br, spanTime, br, br, spanComment, hr);
    }
}

let commentsArray = [];
let li = document.createElement("li");

let comments = document.getElementById("comments")
let name = document.getElementById("name")
let text = document.getElementById("text")
let ok = document.getElementById("ok")


ok.addEventListener("click", ()=>{
    let now = new Date();
    let commentObj = new userComment(name.value, `${now.getHours() < 10 ? ("0" + now.getHours()) : now.getHours()}:${now.getMinutes() < 10 ? ("0" + now.getMinutes()) : now.getMinutes()}:${now.getSeconds() < 10 ? ("0" + now.getSeconds()) : now.getSeconds()}`,`${now.getDate() < 10 ? ("0"+now.getDate()) : now.getDate()}.${now.getMonth()+1 < 10 ? ("0"+(now.getMonth()+1)) : (now.getMonth()+1)}.${now.getFullYear()}`, text.value)
    commentsArray.push(commentObj);
    commentObj.Print();
    comments.append(li);
})


