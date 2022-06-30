let result = document.getElementById('result');
let searchFilm=  document.getElementById('searchFilm')
searchFilm.onsubmit = ()=>{return formSubmit(event)}
function formSubmit(e){
    e.preventDefault();
    let filmName = document.getElementById('filmName').value;
    let filmYear = document.getElementById('filmYear').value;
    let typeSel = document.getElementById('typeSel').value;
    let btn = document.createElement('button');
    get(`http://www.omdbapi.com/?apikey=d3c0ef6a&t=${filmName}&y=${filmYear}&type=${typeSel}`)
        .then(text=>{
            let response= JSON.parse(text);
            document.cookie = JSON.stringify(response);
                result.innerHTML += `<div class="item"><img src="${response.Poster}"><div><h1>${response.Genre}</h1><h2>${response.Title}</h2><p>${response.Released}</p> <button onclick="return window.open('index1.html')">Detail</button></button></div></div>`
        }, error=>{
            alert("error "+error)
        })
    function get(url){
        return new Promise((suceed, fail)=>{
            let request = new XMLHttpRequest();
            request.open("GET", url);
            request.addEventListener('load', ()=>{
                if(request.status === 200 && request.readyState === 4){
                    suceed(request.responseText);
                }
                else{
                    fail(new Error('Request failed: ' + request.statusText))
                }
            })
            request.send();
            }
        )
    }

}