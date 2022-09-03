interface IAccount{
    cash: number;
    addCash(c:number):void;
    getCash(c:number):void;
    checkCash():void;
}
interface IClient{
    name: string;
    setName(n:string);
}
class Client implements IAccount, IClient{
    cash: number;
    name: string
    constructor() {
    this.cash = 0;
    this.name = '';
    }
    setName(n: string) {
        this.name = n;
    }
    addCash(c: number) {
        this.cash += c;
    }
    getCash(c: number) {
        if(this.cash < c){
            console.log('Ви не можете сняти гроші, сумма занадто велика');
        }
        else{
            this.cash -= c;
        }
    }
    checkCash() {
        console.log(`${this.name}`)
        console.log(`Ваш рахунок: ${this.cash}`)
    }
}

const account = new Client();
account.setName('Ilya');
account.checkCash();
account.addCash(50);
account.checkCash();
account.getCash(25);
account.checkCash();
