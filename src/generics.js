"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// generics reseble to templates in OOP
var GenerteRoll = function (obj) {
    var Roll = Math.random().toString(16);
    return __assign(__assign({}, obj), { Roll: Roll });
};
var p1 = {
    name: "azka",
    age: 21
};
var result = GenerteRoll(p1);
console.log(result);
var CID1 = {
    name: "Azka",
    id: "NUStf17CS"
};
var CID2 = {
    name: "azka",
    id: {
        section: "Morning"
    }
};
var papertaker = {
    name: "Amna",
    id: "Bsfe17",
    start: 12,
    End: 2
};
console.log("ended: at " + papertaker.End + "O`clock");
