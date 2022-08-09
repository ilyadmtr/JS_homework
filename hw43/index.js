const http =require('http')
const url =require('url')

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
let message = 'Hello Node'

http.createServer(function (request, response){
    let url_string = url.parse("http://" + request.headers.host +request.url , true)
    let html = `<h1 style="text-align: center">Homework 43</h1> <p>Host: ${url_string.host}</p><p>Pathname: ${url_string.pathname}</p><ul>`

    for (const key in url_string.query){
        html += `<li>${key} - ${url_string.query[key]}</li>`
    }
    html += `</ul>`
    response.end(html)
}).listen(3000, '127.0.0.1', ()=>{
    console.log('Сервер начал прослушивание запросов')
})