// Base class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  describe() {
    return `${this.name} is a student in grade ${this.grade}.`;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
  describe() {
    return `${this.name} teaches ${this.subject}.`;
  }
}

export { Person, Student, Teacher };
