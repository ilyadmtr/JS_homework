let json = document.getElementById('json')
let btn = document.getElementById('btn')
let js = document.getElementById('js')
let errorS = document.getElementById('error')

btn.addEventListener('click', ()=>{
    let jsonValue = json.value;
    let jsValue;
        if(jsonValue.length){
        try{
            let jsValueO = JSON.parse(jsonValue);
            jsValue = JSON.stringify(jsValueO, null, 4);
            js.value += jsValue;
        }
        catch (error){
            errorS.innerText = '[format error]';
        }
    }
})


