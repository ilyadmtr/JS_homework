var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transport = /** @class */ (function () {
    function Transport() {
    }
    return Transport;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(modelName, company, maxSpeed, engCapacity, dateOfManufacture, state) {
        var _this = _super.call(this) || this;
        _this.modelName = modelName;
        _this.company = company;
        _this.maxSpeed = maxSpeed;
        _this.engCapacity = engCapacity;
        _this.dateOfManufacture = dateOfManufacture;
        _this.state = state;
        return _this;
    }
    Auto.prototype.showInfo = function () {
        var div = document.getElementById('content');
        var item = document.createElement('div');
        item.innerHTML = "\u041D\u0430\u0437\u0432\u0430 \u043C\u043E\u0434\u0435\u043B\u0456: ".concat(this.modelName, ", \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F: ").concat(this.company, ", \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(this.maxSpeed, ", \u041E\u0431'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ").concat(this.engCapacity, ", \u0414\u0430\u0442\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0430: ").concat(this.dateOfManufacture, ", \u0421\u0442\u0430\u043D: ").concat(this.state ? "хороший" : "поганий");
        div.append(item);
    };
    return Auto;
}(Transport));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(modelName, company, maxSpeed, engCapacity, dateOfManufacture, state) {
        var _this = _super.call(this) || this;
        _this.modelName = modelName;
        _this.company = company;
        _this.maxSpeed = maxSpeed;
        _this.engCapacity = engCapacity;
        _this.dateOfManufacture = dateOfManufacture;
        _this.state = state;
        return _this;
    }
    Plane.prototype.showInfo = function () {
        var div = document.getElementById('content');
        var item = document.createElement('div');
        item.innerHTML = "\u041D\u0430\u0437\u0432\u0430 \u043C\u043E\u0434\u0435\u043B\u0456: ".concat(this.modelName, ", \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F: ").concat(this.company, ", \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(this.maxSpeed, ", \u041E\u0431'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ").concat(this.engCapacity, ", \u0414\u0430\u0442\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0430: ").concat(this.dateOfManufacture, ", \u0421\u0442\u0430\u043D: ").concat(this.state ? "хороший" : "поганий");
        div.append(item);
    };
    return Plane;
}(Transport));
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship(modelName, company, maxSpeed, engCapacity, dateOfManufacture, state) {
        var _this = _super.call(this) || this;
        _this.modelName = modelName;
        _this.company = company;
        _this.maxSpeed = maxSpeed;
        _this.engCapacity = engCapacity;
        _this.dateOfManufacture = dateOfManufacture;
        _this.state = state;
        return _this;
    }
    Ship.prototype.showInfo = function () {
        var div = document.getElementById('content');
        var item = document.createElement('div');
        item.innerHTML = "\u041D\u0430\u0437\u0432\u0430 \u043C\u043E\u0434\u0435\u043B\u0456: ".concat(this.modelName, ", \u041A\u043E\u043C\u043F\u0430\u043D\u0456\u044F: ").concat(this.company, ", \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044C: ").concat(this.maxSpeed, ", \u041E\u0431'\u0454\u043C \u0434\u0432\u0438\u0433\u0443\u043D\u0430: ").concat(this.engCapacity, ", \u0414\u0430\u0442\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u0446\u0442\u0432\u0430: ").concat(this.dateOfManufacture, ", \u0421\u0442\u0430\u043D: ").concat(this.state ? "хороший" : "поганий");
        div.append(item);
    };
    return Ship;
}(Transport));
var auto1 = new Auto('Mercedec', "Mercedec", 300, 40, "24.12.2010", false);
var auto2 = new Auto('Shavrolet', "Shavrolet", 350, 50, "05.01.2020", true);
var plane1 = new Plane('Boing', "Boing", 1200, 350, "03.09.2022", false);
var plane2 = new Plane('Nester', "X", 1500, 1000, "10.01.2020", true);
var ship1 = new Ship('Craiser', "Avrora", 200, 1000, "14.06.2000", false);
var ship2 = new Ship('T-34', "Krai", 400, 900, "16.04.1999", true);
var array = [];
array.push(auto1);
array.push(auto2);
array.push(plane1);
array.push(plane2);
array.push(ship1);
array.push(ship2);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var transport = array_1[_i];
    transport.showInfo();
}
