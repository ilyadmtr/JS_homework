var Client = /** @class */ (function () {
    function Client() {
        this.cash = 0;
        this.name = '';
    }
    Client.prototype.setName = function (n) {
        this.name = n;
    };
    Client.prototype.addCash = function (c) {
        this.cash += c;
    };
    Client.prototype.getCash = function (c) {
        if (this.cash < c) {
            console.log('Ви не можете сняти гроші, сумма занадто велика');
        }
        else {
            this.cash -= c;
        }
    };
    Client.prototype.checkCash = function () {
        console.log("".concat(this.name));
        console.log("\u0412\u0430\u0448 \u0440\u0430\u0445\u0443\u043D\u043E\u043A: ".concat(this.cash));
    };
    return Client;
}());
var account = new Client();
account.setName('Ilya');
account.checkCash();
account.addCash(50);
account.checkCash();
account.getCash(25);
account.checkCash();
