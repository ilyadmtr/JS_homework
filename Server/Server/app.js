const express = require("express");
const app = express();
const jsonParser = express.json();

app.use(function (request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
    next();
})

// обработчик по маршруту localhost:3000/sum
app.post("/postuser",jsonParser, function(request, response){
    console.log(request);
    if(!request.body) return response.sendStatus(400);
    let login = request.body.login;
    let password = request.body.password;
    let item = {Login:login, Password: password};
    const fs = require('fs');

    fs.readFile('user.json', 'utf8', function readFileCallback(err, data){
        if(err){
            console.log(err)
        }
        else{
            let arr = [];
            try{
                arr = JSON.parse(data);
            }
            catch (err){
                console.log(err);
                arr =[];
            }
            if(!(arr.filter(i=>JSON.stringify(  Object.entries(i).sort()) == JSON.stringify(Object.entries(item).sort())).length > 0)){
                arr.push(item);
                let json = JSON.stringify(arr);
                fs.writeFileSync('user.json', json);
                response.json({"login": "Registered"})
            }
            else{
                response.json({"login": "Registered"})
            }
        }
    })
});
  
app.listen(3000);