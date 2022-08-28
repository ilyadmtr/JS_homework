import "../css/style.css";
const $ = require('jquery');
const Parser = require('../js/parser')

$('#parse-button').on('click', function (e){
    $('.table').empty();
    let parser= new Parser($('#input').val());
    parser.parseMessage().map(el=>{
        let tr = `<tr><td>${el.char}</td><td>${el.rep}</td></tr>`;
        $('.table').append(tr);
    })
    $('#input').val('');
})

