/*
//   console.log("hi");
//Q.1
// Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details.
//Create two instances of the 'Person' class and display their details
class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  displayDetails() {
    console.log(
      `Person ${this.name} age is ${this.age} and he lives in ${this.country}`
    );
  }
}
const yogesh = new Person("Yogesh", 23, "Bharat");
const sonu = new Person("Sonu", 14, "Bharat");
console.log(yogesh, sonu);
yogesh.displayDetails();
sonu.displayDetails();

//Q2
//  Write a JavaScript program to create a class called 'Rectangle' with properties for
// width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    let areaIs = this.height * this.width;
    console.log(`Area of given Rectangle is ${areaIs} `);
  }
  perimeter() {
    let perimeterIs = 2 * (this.width + this.height);
    console.log(`Perimeter of given rectangle is ${perimeterIs}`);
  }
}
const instanceOne = new Rectangle(20, 30);
instanceOne.area();
instanceOne.perimeter();

//3.
// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for
//  make, model, and year. Include a method to display vehicle details.
//  Create a subclass called 'Car' that inherits from the 'Vehicle' class and
// includes an additional property for the number of doors.
//  Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    console.log(`vehicle:${this.make}`);
    console.log(`vehicle Model is:${this.model}`);
    console.log(`vehicle year of buying is:${this.year}`);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  displayDetails() {
    console.log(`vehicle:${this.make}`);
    console.log(`vehicle Model is:${this.model}`);
    console.log(`vehicle year of buying is:${this.year}`);
    console.log(`vehicle Doors in numbers is:${this.doors}`);
  }
}
const feraz = new Car("Feraz", "St-20", 1997, 2);
console.log(feraz);

//4. Write a JavaScript program that creates a class called "BankAccount"
//with properties for account number and balance. Include methods to deposit
//and withdraw money from the account. Create some instances of the "BankAccount" class,
// deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(val) {
    return (this.balance = this.balance + val);
  }
  withdraw(val) {
    if (val <= this.balance) return (this.balance = this.balance - val);
    else return `Insufficient Balance`;
  }
  displayBalance() {
    console.log(`Account Balance : ${this.balance}`);
  }
}

const myBank = new BankAccount(2398423, 500);
console.log(myBank);
myBank.deposit(100);
myBank.withdraw(100);


//5
//5. Write a JavaScript program that creates a class called 'Shape' with a method to
//calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit
//from the 'Shape' class and override the area calculation method.
//Create an instance of the 'Circle' class and calculate its area.
//Similarly, do the same for the 'Triangle' class.

//learn the concept of 0 in super method if u not calling it
class Shape {
    constructor(radius, height, base) {
    this.radius = radius;
    this.height = height;
    this.base = base;
}
areaOfCircle() {
    let areaIs = Math.PI * Math.pow(this.radius, 2);
    console.log(`Area of given circle is ${areaIs.toPrecision(4)}`);
}
areaOfTriangle() {
    let areaIs = (this.height * this.base) / 2;
    console.log(areaIs);
    console.log(`Area of given Traingle is ${areaIs}`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(radius, 0, 0);
  }
}
class Triangle extends Shape {
  constructor(height, base) {
    super(0, height, base); //pass 0 if radius not applicable here
  }
}
const instanceOfCircle = new Circle(2);
instanceOfCircle.areaOfCircle();
const instanceOfTriangle = new Triangle(2, 3);
instanceOfTriangle.areaOfTriangle();

//6. Write a JavaScript program that creates a class called 'Employee' with properties
//for name and salary. Include a method to calculate annual salary.
//Create a subclass called 'Manager' that inherits from the 'Employee' class and
// adds an additional property for department.
// Override the annual salary calculation method to include bonuses for managers.
// Create two instances of the 'Manager' class and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    console.log(`Name of the Employee:${name}`);
    console.log(`Salary of the Employee:${salary}`);
    this.name = name;
    this.salary = salary;
  }
  annualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  //   annualSalary(bonus) {
      //     console.log(`Anuual salary is ${this.salary * 12 + bonus}`);
      //   }
      annualSalary() {
    const baseSalary = super.annualSalary();
    console.log(baseSalary);
    const bonus = 0.1;
    console.log(`Bonus (10% of the salary):${bonus}`);
    // //final salary
    console.log(`Salary With Bonus is ${bonus * baseSalary + baseSalary}`);
}
}

const instanceOfManagerOne = new Manager("Jonas macine", 1200, "HR");
const instanceOfManagerTwo = new Manager("martha dotsan", 2000, "Developer");
console.log(instanceOfManagerOne, instanceOfManagerTwo);
instanceOfManagerOne.annualSalary();
// console.log(instanceOfManagerOne.__proto__.annualSalary());
*/

//7.Write a JavaScript program that creates a class `Book` with properties for
//title, author, and publication year. Include a method to display book details.
//Create a subclass called 'Ebook' that inherits from the 'Book' class and
//includes an additional property for book price. Override the display method to
//include the book price.Create an instance of the 'Ebook' class and display its details.

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  displayDetails() {
    console.log(`Title of Book:${this.title}`);
    console.log(`Author of Book:${this.author}`);
    console.log(`Publication Year of Book:${this.publicationYear}`);
  }
}

class Ebook extends Book {
  constructor(title, author, publicationYear, price) {
    super(title, author, publicationYear, price);
    this.price = price;
  }
  displayDetails() {
    super.displayDetails();
    console.log(`price of the Book:${this.price}`);
  }
}

const instanceOfEbook = new Ebook("oneWorld", "YogeshKbairwa", 2027, 200);
instanceOfEbook.displayDetails();
