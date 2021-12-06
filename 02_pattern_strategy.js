///////////// strategy example

var Shipping = function () {
    this.company = "";
};

Shipping.prototype = {
    setStrategy: function (company) {
        this.company = company;
    },

    calculate: function (package) {
        return this.company.calculate(package);
    }
};

var UPS = function () {
    this.calculate = function (package) {
        // calculations...
        return "$45.95";
    }
};

var USPS = function () {
    this.calculate = function (package) {
        // calculations...
        return "$39.40";
    }
};

var Fedex = function () {
    this.calculate = function (package) {
        // calculations...
        return "$43.20";
    }
};

