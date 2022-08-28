const $ = require('jquery');
const _ = require('underscore');
function Parser(message){
    this.parseMessage = function (){
        let arr = [];
        let rep = 0;
        _.each(message, (ch)=>{
            _.each(message, (chIn)=>{
                if(ch === chIn) rep++;
            })
            arr.push({char: ch, rep})
            rep = 0;
        })
        return arr;
    }
}
module.exports=Parser;


