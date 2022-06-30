// ----------------------------------------------------------------------------------
// На жаль для отримання інформації про якийсь період днів треба мати платну підписку
// ----------------------------------------------------------------------------------


let weather = document.getElementById('weather');
let btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    get(`http://api.weatherstack.com/current?access_key=4ad6f6382b2d4ad2188a8dd4ddabfc07&query=${input}`)
        .then(text => {
            let response = JSON.parse(text);
            weather.innerHTML = `
<h1>${response.location.name}, ${response.location.country}</h1>
<div class="wrapper_weather">
<img class="icon" src="${response.current.weather_icons[0]}">
<div class="marginBlock"><h3>${response.current.temperature}°C</h3><p>Feels like ${response.current.feelslike}</p></div>
<div>
<p>${response.location.localtime}</p>
<p>Wind: ${response.current.wind_speed}kph</p>
<p>Precip: ${response.current.precip}mm</p>
<p>Presure: ${response.current.pressure}mb</p>
</div>
</div>`

        }, error => {
            alert("error " + error)
        })
})

function get(url) {
    return new Promise((suceed, fail) => {
            let request = new XMLHttpRequest();
            request.open("GET", url);
            request.addEventListener('load', () => {
                if (request.status === 200 && request.readyState === 4) {
                    suceed(request.responseText);
                } else {
                    fail(new Error('Request failed: ' + request.statusText))
                }
            })
            request.send();
        }
    )
}

