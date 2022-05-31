function Person(name, eyeColor, age) {
  this.name = name;
  this.eyeColor = eyeColor;
  this.age = age;
  this.updateAge = function () {
    return ++this.age;
  };
}

let person01 = new Person("Max", "Green", 42);
let person02 = new Person("Chad", "Hazel", 42);

console.log(person01.updateAge());
