const icecream = {
    'small': {'price': 10},
    'big': {
        'price': 25,
        'topings': {
            'chocolate': 5,
            'caramel': 6,
            'berry': 10
        }
    },
    'marshmallow': {'price': 5}
}

class Icecream {
    private _size: string
    private _topings: string[]
    private _marshmallow: boolean
    set size (s:string){
        this._size = s;
    }
    get size():string{
        return this._size;
    }
    set marshmallow (m:boolean){
        this._marshmallow = m;
    }
    get marshmallow():boolean{
        return this._marshmallow;
    }
    set topings(t:string[]){
        this._topings = t;
    }
    getPrice():number{
        let price = 0;
        if(this._size === 'big'){
            price +=icecream.big.price;
            for(let i = 0; i < this._topings.length; i++){
                if(this._topings[i] === 'chocolate'){
                    price +=icecream.big.topings.chocolate;
                }
                else if(this._topings[i] === 'caramel'){
                    price +=icecream.big.topings.caramel;
                }
                else if(this._topings[i] === 'berry'){
                    price +=icecream.big.topings.berry;
                }
            }
            if(this._marshmallow){
                price+=icecream.marshmallow.price;
            }
        }
        else {
            price +=icecream.small.price;
            if(this._marshmallow){
                price+=icecream.marshmallow.price;
            }
        }
        return price;
    }
}
let order: boolean = true;

do{
    const icr = new Icecream();
    icr.size = prompt('Оберіть розмір стакану(big, small)', 'big');
    if(icr.size === 'small'){
        if(prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Так"){
            icr.marshmallow = true;
        }
        else if(prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Ні"){
            icr.marshmallow = false;
        }
        else{
            alert('Не коректне значення!')
        }
        alert(`Ціна вашого морозива ${icr.getPrice()}`)
    }
    else if(icr.size === 'big'){
        let toStr:string;
        do{
            toStr = prompt('Введіть топінги, які хочете додати (chocolate,caramel,berry)', 'chocolate,caramel,berry');
        }while(toStr === '')
        icr.topings =toStr.split(',');
        if(prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Так"){
            icr.marshmallow = true;
        }
        else if(prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Ні"){
            icr.marshmallow = false;
        }
        else{
            alert('Не коректне значення!')
        }
        alert(`Ціна вашого морозива ${icr.getPrice()}`)
    }
    else{
        alert('Некоректне значення')
    }

} while (order)