export { };


//Variables 
let Name: string = "Azka";


//Parameters and REturn types of Functions

var DOB = function (Month: string, date: number, year: number) {
    return "Birthday: " + date + " " + Month + " " + year;
};
console.log(DOB("Oct", 19, 2000));

// ARRAYS AND OBJECTS
let favoriteHobbies: string[];
favoriteHobbies = ["reading", "sketching", "gaming"];

var Cusine;
Cusine = ["Chineese", "Italian", "Thai"];

var person: {
    name: string;
    age: number;
    Cusine: string[];
    role: [number, string];
}
    = {
    name: "Azka",
    age: 21,
    Cusine : ["Chineese", "Italian", "Thai"],
    role: [0, "admin"]
};
for (const cusine of person.Cusine) {

    console.log(" Cusine: " + cusine.toUpperCase());
}


//USE OF INTERFACES TO IMPROVE ABOVE APPROACH

interface PersonInterface {
    name: string;
    age?: number;
    nickname:string;
    getNickName(): string;
}
const person1: PersonInterface
    = {
        name: "Azka",
        nickname:"Noor",
        age: 21,
        getNickName: function () {
            return "Nickname is  " + person1.nickname;
        }
}



//UNION


let LuckyNum: string | number = "1";

// using interfaces as tyype in union
let user: PersonInterface | null = null;



//Aliases
type RollNo = string;
interface Collegeinterface {
    RollNO: RollNo,
    name: string;
    age?: number;
}

const student: Collegeinterface
    = {

        RollNO: "BSEF17M503",
        name:"Noor",
        age: 21,
       
}



// Aliases + union
type TestID = RollNo | null;
const T1: TestID = "FASTSE234";

const T2: TestID = null;


// REturn Types  And   {VOID ANY NEVER UNKNOWN }
const getType = (): void => {
    console.log("this returns void");
}
getType();


let Kuchbhi: any = "hello frnds";
Kuchbhi = true;
Kuchbhi = 20;



const KabhiNAhi = (): never => {
    console.log("this is never function ");
    throw "never";
}
//KabhiNAhi();


let Strange: unknown = "Hello";
Strange = true;
Strange = 20;


let V2: unknown = Strange;

//CONVERSION
let V4: string = Strange as string;


let LuckyNUM: string = "2";
let Lucky: number = (LuckyNUM as unknown) as number;
console.log("Lucky  Number: " + Lucky);



// ENUMS 
enum ROLE {
    ADMIN,
    EDITOR,
    AUTHOR
}
console.log(`ADMIN: ${ROLE.ADMIN}  READ_ONLY: ${ROLE.EDITOR} AUTHOR: ${ROLE.AUTHOR} `);



interface EDITOR {
    name: string;
    role: ROLE;
}
let editor: EDITOR = {
    name: "azka",
    role: ROLE.EDITOR
}
console.log("status of task1: " + editor.role);

