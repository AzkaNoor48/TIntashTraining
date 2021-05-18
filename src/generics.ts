export { };
// generics reseble to templates in OOP
const GenerteRoll = <T extends object>(obj: T) => {
    const Roll = Math.random().toString(16);
    return {
        ...obj,
        Roll
    };
};

interface PersonInterface {
    name: string;
    age: number;
}

const p1: PersonInterface = {
    name: "azka",
    age: 21
}

const result = GenerteRoll<PersonInterface>(p1);
console.log(result);

// Generic + interfaces
interface Collegeinterface<T> {
    name: string;
    id: T;
}
const CID1: Collegeinterface<string> = {
    name: "Azka",
    id: "NUStf17CS"
}
const CID2: Collegeinterface<{ section: string }> = {
    name: "azka",
    id: {
        section: "Morning"
    }
}

//MULTIPLE PARAMETERS
interface Invigilator<A, B,C> {
    name: string;
    id: A;
    start: B;
    End: C;
}

const papertaker: Invigilator<string, number,number> = {
    name: "Amna",
    id: "Bsfe17",
   start:12,
   End :2
}
console.log("ended: at " + papertaker.End+"O`clock")