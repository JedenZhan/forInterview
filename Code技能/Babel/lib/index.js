"use strict";

class Person {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  sayname() {
    console.log(this.name);
  }

}

class Student extends Person {
  constructor(name, age, id) {
    super(name, age, id);
    this.study = 'studying....';
  }

  studying() {
    console.log(this.study);
  }

}

let stu1 = new Student('Jeden', 18, 112233344);
stu1.studying();