export { };
// works like interfaces in java getFullName() must be implemented in the child classes

interface PersonInterface {


  nickname: string;

}

class Person implements PersonInterface {

  private fullname: string;
  private age: number;
  //  const
  readonly nickname: string;
  //  static 
  static readonly age = 30;

  constructor(fullname: string, age: number, nickname: string) {
    this.fullname = fullname;
    this.nickname = nickname;
    this.age = age;
  }

  getFullName(): string {
    return this.fullname + " " + this.nickname;
  }
}

//inheritance
class Teacher extends Person {
  private Tname: string;

  constructor(Tname: string) {
    super("Alia", 13, "aly");
    this.Tname = Tname;

  }


  getTeachername(): string {
    return this.Tname;
  }
}

const p1 = new Person("Azka", 21, "Tariq");
console.log(p1.getFullName());
console.log(Person.age);
const T1 = new Teacher("Anum Javed");
console.log(T1.getFullName());
console.log(T1.getTeachername());
