/*

//1. Write a JavaScript program to display the current day
//and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
const date = new Date();
console.dir(date);
const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
// console.log(weekdays[date.getDay()]);
console.log("Today is:", weekdays[date.getDay()]);

const hours = date.getHours();
const hours12 = (hours > 12 ? hours - 12 : hours).toString().padStart(2, 0);
const minutes = date.getMinutes().toString().padStart(2, 0);
const seconds = date.getSeconds().toString().padStart(2, 0);

const time = `${hours12} ${hours > 12 ? "PM" : "AM"}:${minutes}:${seconds}`;
console.log("Current Time is :", time);

//2. Write a JavaScript program to print the current window contents.
// window.print();
const btn = document.getElementById("print");
btn.addEventListener("click", () => window.print());

//3.Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
console.log(date);
console.log(date.toDateString());
console.log(date.toLocaleDateString());
const yyyy = date.getFullYear().toString().padStart(2, 0);
// console.log(yy);
const mm = date.getMonth().toString().padStart(2, 0);
// console.log(mm);
const dd = date.getDay().toString().padStart(2, 0);
// console.log(dd);

console.log(`${mm}-${dd}-${yyyy}`);
console.log(`${mm}/${dd}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);

//4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
const triangleArea = function (a, b, c) {
  // Convert degrees to radians
  let cRadians = (c * Math.PI) / 180;

  // Calculate sin of the angle in radians
  let k = Math.sin(cRadians);

  let area = 0.5 * (a * b * k);

  return area;
};
console.log(triangleArea(5, 6, 7));

const triangleAreaBySecondFormula = function (a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
};
console.log(triangleAreaBySecondFormula(5, 6, 7));


//5. Write a JavaScript program to rotate the string 'w3resource'
//in the right direction.
//This is done by periodically removing one letter from the
// string end and attaching it to the front.

const rotateInRight = function (word) {
  console.log(`This is Orginal Word ${word}`);
  const rotation = word.slice(-1).concat(word.slice(0, -1));
  return rotation;
};

console.log(rotateInRight("w3resources"));


//6
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//logic is to divide it by 4 if not century year if centuary yr divide it by 400

// const givenYear = window.prompt("Tell the year to find the leap year");
const givenYear = 2400;
console.log(typeof givenYear);

if (givenYear % 4 !== 0) {
  console.log(`Number is not leap year`);
} else if (givenYear % 4 === 0) {
  if (String(givenYear).slice(-2) === "00" && givenYear % 400 !== 0) {
    console.log(`number is not a leap year`);
  } else {
    console.log(`Number is leap year`);
  }
}

//lets create a function
function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
console.log(leapYear(2016));
console.log(leapYear(2100));

//7
//Write a JavaScript program to find out if 1st January will be a Sunday between
// 2014 and 2050.

const newDate = new Date();
// console.log(newDate);
// console.log(new Date("2020-01-01"));
const weekdays = [
  "sunday",
  "monday",
  "tuesday",
  "weednesday",
  "thursday",
  "friday",
  "saturday",
];
console.log(weekdays[newDate.getDay()]);

for (i = 2014; i < 2050; i++) {
  // console.log();
  if (new Date(i, 0, 1).getDay() === 0) {
    console.log(new Date(i, 0, 1));
  }
}


//8 Write a JavaScript program where the program takes a random integer between 1
//and 10,and the user is then prompted to input a guess number. The program displays
//a message "Good Work" if the input matches the guess number otherwise "Not matched".

const randomNum = Math.trunc(Math.random() * 10) ;
console.log(randomNum);
const askNumber = prompt("enter the number Between 1 to 10 to guess ");

if (Number(askNumber) === randomNum) {
  console.log("Good Work");
} else {
  console.log("Not matched");
}


//9.Write a JavaScript program to calculate the days left before Christmas.((nahi hua sala))

const day = new Date();
console.log(day.getTime());
console.log(day.getMonth());

day.getDate();

const christmasDay = new Date(2024, 11, 25);
console.log(christmasDay.getTime());
console.log(christmasDay.getMonth());
christmasDay.getDate();
christmasDay.getMonth();

///////////
const timeStamp = christmasDay.getTime() - day.getTime();
console.log(timeStamp);

const date = new Date(timeStamp);
console.log(date);
console.log(date.getDate());

//////////solution
////////Get current date
let today = new Date();
console.log(today);
//create a date object fro christmas of the current year
let christmas = new Date(today.getFullYear(), 11, 25);
console.log(christmas);
//check if current date is after 25 Dec or not
if (today.getMonth() == 11 && today.getDate > 25) {
  //if true ,set christmas for the next year
  // christmas = new Date(+today.getFullYear() + 1, 11, 25);
  christmas.setFullYear(christmas.getFullYear() + 1);
}

//calculate the difference in days between today and christmas
let one_day = 1000 * 60 * 60 * 24;
let daysLeft = Math.ceil((christmas.getTime() - today.getTime()) / one_day);
console.log(`Hence ${daysLeft} Days left for the christmas eve`);

*/

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
// sample form
//selection
const firstInput = document.getElementById("first");
const secpndInput = document.getElementById("second");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let result = document.getElementById("result");
console.log(result);
const resultLi = document.getElementById("resultLi");
console.log(resultLi);
//fetch data
multiplyBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const firstInputValue = +firstInput.value;
  console.log(firstInputValue);
  const secondInputValue = +secpndInput.value;
  console.log(secondInputValue);
  let multiply = firstInputValue * secondInputValue;
  result.textContent = multiply;
});
divideBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const firstInputValue = +firstInput.value;
  console.log(firstInputValue);
  const secondInputValue = +secpndInput.value;
  console.log(secondInputValue);
  let divide = firstInputValue / secondInputValue;
  result.textContent = divide;
});
