"use strict";
exports.__esModule = true;
//Variables 
var Name = "Azka";
//Parameters and REturn types of Functions
var DOB = function (Month, date, year) {
    return "Birthday: " + date + " " + Month + " " + year;
};
console.log(DOB("Oct", 19, 2000));
// ARRAYS AND OBJECTS
var favoriteHobbies;
favoriteHobbies = ["reading", "sketching", "gaming"];
var Cusine;
Cusine = ["Chineese", "Italian", "Thai"];
var person = {
    name: "Azka",
    age: 21,
    Cusine: ["Chineese", "Italian", "Thai"],
    role: [0, "admin"]
};
for (var _i = 0, _a = person.Cusine; _i < _a.length; _i++) {
    var cusine = _a[_i];
    console.log(" Cusine: " + cusine.toUpperCase());
}
var person1 = {
    name: "Azka",
    nickname: "Noor",
    age: 21,
    getNickName: function () {
        return "Nickname is  " + person1.nickname;
    }
};
//UNION
var LuckyNum = "1";
// using interfaces as tyype in union
var user = null;
var student = {
    RollNO: "BSEF17M503",
    name: "Noor",
    age: 21
};
var T1 = "FASTSE234";
var T2 = null;
// REturn Types  And   {VOID ANY NEVER UNKNOWN }
var getType = function () {
    console.log("this returns void");
};
getType();
var Kuchbhi = "hello frnds";
Kuchbhi = true;
Kuchbhi = 20;
var KabhiNAhi = function () {
    console.log("this is never function ");
    throw "never";
};
//KabhiNAhi();
var Strange = "Hello";
Strange = true;
Strange = 20;
var V2 = Strange;
//CONVERSION
var V4 = Strange;
var LuckyNUM = "2";
var Lucky = LuckyNUM;
console.log("Lucky  Number: " + Lucky);
// ENUMS 
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["EDITOR"] = 1] = "EDITOR";
    ROLE[ROLE["AUTHOR"] = 2] = "AUTHOR";
})(ROLE || (ROLE = {}));
console.log("ADMIN: " + ROLE.ADMIN + "  READ_ONLY: " + ROLE.EDITOR + " AUTHOR: " + ROLE.AUTHOR + " ");
var editor = {
    name: "azka",
    role: ROLE.EDITOR
};
console.log("status of task1: " + editor.role);
