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


// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).

//selection
const firstInput = document.getElementById("first");
const secpndInput = document.getElementById("second");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
let result = document.getElementById("result");
const resultLi = document.getElementById("resultLi");

//handling functions
function handleMultiply(e) {
  e.preventDefault();
  const firstInputValue = +firstInput.value;
  const secondInputValue = +secpndInput.value;
  let multiply = firstInputValue * secondInputValue;
  result.textContent = multiply;
}
function handleDivision(e) {
  e.preventDefault();
  const firstInputValue = +firstInput.value;
  const secondInputValue = +secpndInput.value;
  let divide = firstInputValue / secondInputValue;
  result.textContent = divide.toFixed(2);
}
//Events on buttons
multiplyBtn.addEventListener("click", handleMultiply);
divideBtn.addEventListener("click", handleDivision);


//Q.11 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function conversionToFaherenheit(temp) {
  let fahrenheit = (temp * 9) / 5 + 32;
  console.log(`${temp}\xB0FC is ${fahrenheit}\xB0FF`);
}
conversionToFaherenheit(60);

function conversionToCelsius(temp) {
  let celsius = ((temp - 32) / 9) * 5;
  console.log(`${temp}\xB0FF is ${celsius}\xB0FC`);
}
conversionToCelsius(45);



// 12. Write a JavaScript program to get the website URL (loading page)
console.log(window.location.href);
// alert(document.URL);
console.log(document.URL);


//13. Write a JavaScript exercise to create a variable using a user-defined name.
///game of dot notation and [] bracket in js object
//in [ ] access method of js obejct we can assign even expression while
// we cant do same in dot notation
let var_name = "abcd";
let n = 120;
this[var_name] = n;
console.log(this);
this.name = "Yogesh";
console.log(this[var_name]);
console.log(this.name);
// this[var_name] = n;
// this.varname = n;
// console.log(this[varname]);


//14. Write a JavaScript exercise to get the filename extension.

// let filename = prompt("enter the file name");
let filename = "file.php";
console.log(filename);
const splitArr = filename.split(".");
// console.log(`${splitArr[splitArr.length - 1]} is file extension`);
//pop() take out the last element of the array
console.log(`${splitArr.pop()} is the file extension`);

// 15. Write a JavaScript program to get the difference between a given number and 13,
// if the number is broader than 13 return double the absolute difference.

function difference(num) {
  return num > 13 ? Math.abs(2 * (num - 13)) : 13 - num;
}

console.log(difference(7));

// 16. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function sum(a, b) {
  return a == b ? 3 * (a + b) : a + b;
}
console.log(sum(10, 10));


// 17. Write a JavaScript program to compute the absolute difference between a specified number
// and 19. Returns triple the absolute difference if the specified number is greater than 19.
// Click me to see the solution

function difference(val) {
  return val > 19 ? 3 * (val - 19) : 19 - val;
}

console.log(difference(22));


// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers
// is 50 or if their sum is 50.

// function findPair(one, two) {
  //   if (!Number.isFinite(one)) return;
  //   if (!Number.isFinite(two)) return;
  //   let sum = one + two;
  //   if (sum === 50) {
    //     return true;
//   }
//   if (one === 50 || two === 50) {
//     return true;
//   }
// }

function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(test50(20, 20));
console.log(test50(30, 20));
console.log(test50(50, 20));


// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.
// function range(val) {
//   return 200 - val < 20 || 400 - val < 20
//     ? `${val} is in range`
//     : "it out of range";
// }
function range(val) {
  return 200 - val < 20 || 400 - val < 20;
}
console.log(range(19));
console.log(range(209));
console.log(range(409));
console.log(range(-409));


// 20. Write a JavaScript program to check two given integers whether one is positive and
// another one is negative.
function check(x, y) {
  return (x > 0 && y < 0) || (x < 0 && y > 0);
}
console.log(check(1,2));
console.log(check(1,-2));
console.log(check(-2,-2));
// 21. Write a JavaScript program to create another string by adding "Py"
// in front of a given string. If the given string begins with "Py" return the original string.

function addPy(str) {
  //you can concat by "py"+str
  //alternative of slice is substring(0,2)
  //alternative of startsWith
  // return str.split("", 2).join("") === "Py" ? str : "py" + str;
  return str.slice(0, 2) === "Py" ? str : "Py".concat(str);
  // return str.substring(0, 2) === "Py" ? str : "Py".concat(str);
  // return str.startsWith("Py") ? str : "Py".concat(str);
}

console.log(addPy("pertho"));

*/

// 22. Write a JavaScript program to remove a character at the specified position in a
//given string and return the modified string.
//slice(include,exclude)
//replace method=replace(toreplace,with)
function removelett(str, pos) {
  let newWordStart = str.slice(0, pos - 1);
  let newWordEnd = str.slice(pos, pos.length);
  const final = newWordStart.concat(newWordEnd);
  const final2 = str.replace(str[pos - 1], "");
  const final3 = str.slice(0, pos - 1) + str.slice(pos, pos.length);
  const final4 = str.substring(0, pos - 1) + str.substring(pos, pos.length);
  console.log(final);
  console.log(final2);
  console.log(final3);
  console.log(final4);
}
removelett("Hello", 2);
removelett("browser", 4);

//
// 23. Write a JavaScript program to create a new string
// from a given string by changing the position of the first and last characters.
// The string length must be broader than or equal to 1.

function replace(str) {
  if (str.length < 2) {
    console.log(`${str}`);
    return "";
  }
  // console.log(str.slice(1, -1));
  // console.log(str.slice(str.length-1));
  console.log(str.slice(str.length - 1) + str.slice(1, -1) + str.slice(0, 1));
  console.log(str.substring(str.length - 1) + str.slice(1, -1) + str[0]);
}
replace("a");
replace("ab");
replace("abc");
