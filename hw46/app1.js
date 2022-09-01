var icecream = {
    'small': { 'price': 10 },
    'big': {
        'price': 25,
        'topings': {
            'chocolate': 5,
            'caramel': 6,
            'berry': 10
        }
    },
    'marshmallow': { 'price': 5 }
};
var Icecream = /** @class */ (function () {
    function Icecream() {
    }
    Object.defineProperty(Icecream.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (s) {
            this._size = s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Icecream.prototype, "marshmallow", {
        get: function () {
            return this._marshmallow;
        },
        set: function (m) {
            this._marshmallow = m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Icecream.prototype, "topings", {
        set: function (t) {
            this._topings = t;
        },
        enumerable: false,
        configurable: true
    });
    Icecream.prototype.getPrice = function () {
        var price = 0;
        if (this._size === 'big') {
            price += icecream.big.price;
            for (var i = 0; i < this._topings.length; i++) {
                if (this._topings[i] === 'chocolate') {
                    price += icecream.big.topings.chocolate;
                }
                else if (this._topings[i] === 'caramel') {
                    price += icecream.big.topings.caramel;
                }
                else if (this._topings[i] === 'berry') {
                    price += icecream.big.topings.berry;
                }
            }
            if (this._marshmallow) {
                price += icecream.marshmallow.price;
            }
        }
        else {
            price += icecream.small.price;
            if (this._marshmallow) {
                price += icecream.marshmallow.price;
            }
        }
        return price;
    };
    return Icecream;
}());
var order = true;
do {
    var icr = new Icecream();
    icr.size = prompt('Оберіть розмір стакану(big, small)', 'big');
    if (icr.size === 'small') {
        if (prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Так") {
            icr.marshmallow = true;
        }
        else if (prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Ні") {
            icr.marshmallow = false;
        }
        else {
            alert('Не коректне значення!');
        }
        alert("\u0426\u0456\u043D\u0430 \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430 ".concat(icr.getPrice()));
    }
    else if (icr.size === 'big') {
        var toStr = void 0;
        do {
            toStr = prompt('Введіть топінги, які хочете додати (chocolate,caramel,berry)', 'chocolate,caramel,berry');
        } while (toStr === '');
        icr.topings = toStr.split(',');
        if (prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Так") {
            icr.marshmallow = true;
        }
        else if (prompt('Додавати маршмелоу чи ні? (Так/Ні)', 'Так') === "Ні") {
            icr.marshmallow = false;
        }
        else {
            alert('Не коректне значення!');
        }
        alert("\u0426\u0456\u043D\u0430 \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430 ".concat(icr.getPrice()));
    }
    else {
        alert('Некоректне значення');
    }
} while (order);
