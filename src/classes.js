"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(fullname, age, nickname) {
        this.fullname = fullname;
        this.nickname = nickname;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.fullname + " " + this.nickname;
    };
    //  static 
    Person.age = 30;
    return Person;
}());
//inheritance
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(Tname) {
        var _this = _super.call(this, "Alia", 13, "aly") || this;
        _this.Tname = Tname;
        return _this;
    }
    Teacher.prototype.getTeachername = function () {
        return this.Tname;
    };
    return Teacher;
}(Person));
var p1 = new Person("Azka", 21, "Tariq");
console.log(p1.getFullName());
console.log(Person.age);
var T1 = new Teacher("Anum Javed");
console.log(T1.getFullName());
console.log(T1.getTeachername());
