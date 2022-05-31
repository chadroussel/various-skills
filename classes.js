// class declaration
class Person {
  constructor(name, year_born) {
    this.name = name;
    this.year_born = year_born;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return new Date().getFullYear() - this.year_born;
  }

  what() {
    console.log(this.name + " is a gangsta. ");
  }

  static guns() {
    return 2;
  }
}

var me = new Person("Max", 1979);
console.log(me.name + " was born in " + me.year_born + "!");
me.what();
console.log(me.name + " has " + Person.guns() + " guns! ");

class Hustler extends Person {
  what() {
    super.what();
    console.log(this.name + " is a hustler. ");
  }
}
// super lets you call functions of an objects parent (which here is the Person class)

var you = new Hustler("Chad", 1996);
me.what();
you.what();

// class expression
// unnamed
// var Person2 = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };

// // named
// var Person3 = class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// };
