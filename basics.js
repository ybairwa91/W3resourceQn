//here are leaning from thiz quiz
// substring(include,include),no negative arguments
//slice(include,exclude) take negative arguments

/*
CATEGORY-MATH(DATE) OBEJCT
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

CATEGORY-DOM
//2. Write a JavaScript program to print the current window contents.
// window.print();
const btn = document.getElementById("print");
btn.addEventListener("click", () => window.print());

CATEGORY-MATH(DATE) OBEJCT
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

CATEGORY-FUNCTION
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


CATEGORY-STRING
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



CATEGORY-MATH(DATE) OBEJCT
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


CATEGORY-MATH(DATE) OBJECT
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


CATEGORY-CONTROL STATEMENTS
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



CATEGORY-MATH(DATE) OBEJCT
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


CATEGORY-DOM AND OPERATOR
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


CATEGORY-FUNCTION AND OPERATOR
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


CATEGORY-DOM
// 12. Write a JavaScript program to get the website URL (loading page)
console.log(window.location.href);
// alert(document.URL);
console.log(document.URL);


//CATEGORY-ARRAY
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



//CATEGORY-STRING
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

//CATEGORY-CONTROL STATEMENTS
// 16. Write a JavaScript program to compute the sum of the two given integers.
// If the two values are the same, then return triple their sum.

function sum(a, b) {
  return a == b ? 3 * (a + b) : a + b;
}
console.log(sum(10, 10));

//CATEGORY-CONTROL STATEMENTS
// 17. Write a JavaScript program to compute the absolute difference between a specified number
// and 19. Returns triple the absolute difference if the specified number is greater than 19.
// Click me to see the solution

function difference(val) {
  return val > 19 ? 3 * (val - 19) : 19 - val;
}

console.log(difference(22));

//CATEGORY-CONTROL STATEMENTS
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

//CATEGORY-CONTROL STATEMENTS
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

//CATEGORY-CONTROL STATEMENTS
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

//CATEGORY-STRING
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
//CATEGORY-STRING
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


//CATEGORY-STRING
//24. Write a JavaScript program to create another string from a given string
//with the first character of the given string added to the front and back.

function stringManipulate(str) {
  console.log(str[0] + str + str[0]);
  console.log(str.slice(0, 1) + str + str[0]);
  console.log(str.substring(0, 1) + str.substring() + str.substring(0, 1));
  //reduce repeatativity
  const firstEle = str[0];
  console.log(firstEle + str + firstEle);
  //new way
  console.log(str.charAt(0) + str + str.charAt(0));
  //ternary operator
  console.log(`${str[0]}${str}${str[0]}`);
}
stringManipulate("hello");

CATEGORY-CONTROL STATEMENT
//25. Write a JavaScript program to
//check whether a given positive number is a multiple of 3 or 7.

function findMultiple(num) {
  return num > 0 && (num % 3 === 0 || num % 7 === 0);
}
console.log(findMultiple(20));
console.log(findMultiple(9));

//26. Write a JavaScript program to create a string from a given string.
// This is done by taking the last 3 characters and adding them at both the front and back.
// The string length must be 3 or more.

function frontBack(str) {
  if (str.length < 4) return;
  const lastThree = str.slice(-3);
  console.log(lastThree + str + lastThree);
  //substring doesnot take negative parameters
  const backEle = str.substring(str.length - 3);
  console.log(backEle + str + backEle);
  //another way
  console.log(`${str.slice(-3)}${str}${str.slice(-3)}`);
}
frontBack("abcd");


//CATEGORY-CONTROL STATEMENTS
// 27. Write a JavaScript program to
// check whether a string starts with 'Java' if it does not otherwise.

function java(str) {
  if (str < 4) return;
  console.log(str.startsWith("java") ? "Yes" : "no");
  const words = str.substring(0, 4);
  console.log(words);
  if (words == "java") console.log("yes its start with java");
  else console.log("no");
}

java("javascript");
java("gaint");

//CATEGORY-CONTROL STATEMENTS
// 28. Write a JavaScript program to check whether two given integer values are in the
// range 50..99 (inclusive). Return true if either of them falls within the range.

function range(x, y) {
  return (x > 49 && x < 100) || (y > 49 && y < 100);
}
console.log(range(54, 90));
console.log(range(50, 99));
console.log(range(99, 78));
console.log(range(100, 39));
console.log(range(49, 50));

//using loops

function rangeOfNum(x, y) {
  for (let i = 50; i < 100; i++) {
    return x === i || y === i;
  }
}

console.log(rangeOfNum(500, 109));


//
// 29. Write a JavaScript program to check whether three given integer values are in the
// range 50..99 (inclusive). Return true if one or more of them are in the specified range.
//ye dekh bro is bolte hai hoisting jaha declaration se phle hi call krdiya bros
console.log(range_three(90));
function range_three(x, y, z) {
  return (x >= 50 && x < 100) || (y >= 50 && y < 100) || (z <= 50 && z < 100);
}

//30. Write a JavaScript program to check whether a string "Script" appears at the
//5th (index 4) position in a given string. If "Script" appears in the string,
//return the string without "Script" otherwise return the original one.
// if (str.split(" ")[4] === "Script") {
//   const resultHalf = str.split(" ").slice(0, 4).join(" ");
//   const resultFull = str.split(" ").slice(5).join(" ");
//   console.log(resultHalf + " " + resultFull);
// } else {
//   console.log(str);
// }
const checkScript = function (str) {
  return str.split(" ")[4] === "Script"
    ? str.split(" ").slice(0, 4).join(" ") +
        " " +
        str.split(" ").slice(5).join(" ")
    : str;
};
console.log(checkScript("hi i am Yogesh doesnot make sense"));
console.log(checkScript("this is programming java Script learning"));
//another ways

function removeScript(str) {
  console.log(str.search("Script") == );
  // if (str.search("Script") == 4) {
  //   return str.replce("Script", " ");
  // } else {
  //   return str;
  // }
}
// console.log(removeScript("this is programming java Script learning"));
removeScript("this is programming java Script learning");
// console.log(removeScript("hi i am Yogesh doesnot make sense"));
removeScript("hi i am Yogesh doesnot make sense");

/*
//31. Write a JavaScript program to find the largest of three given integers.

// one method
function largest(x, y, z) {
  if (x > y) {
    if (x > z) {
      return x;
    } else {
      return z;
    }
  } else {
    if (y > z) {
      return y;
    } else {
      return z;
    }
  }
}
console.log(largest(-10, -20, -30));

//second method
function largestOfAll(x, y, z) {
  return Math.max(x, y, z);
}
console.log(largestOfAll(10, 20, 30));
console.log(largestOfAll(-10, -20, -30));

//third way
function largestAmong(x, y, z) {
  if (x > y && x > z) {
    return x;
  }
  if (y > x && y > z) {
    return y;
  }
  if (z > x && z > y) {
    return z;
  }
}
console.log(largestAmong(10, 20, 30));

//fourth way
// using sort
function largestUsingSort(...values) {
  const sort = values.sort()[0];
  console.log(sort);
  return sort[sort.length - 1];
}

console.log(largestUsingSort([10, 20, 30]));


//32. Write a JavaScript program
//to find the closest value to 100 from two numerical values.
//Math.abs always return a positive value

function closestVal(x, y) {
  if (x != y) {
    if (Math.abs(x - 100) > Math.abs(y - 100)) {
      return "y";
    } else return "x";
  } else return "both are equal";
}
const result = closestVal(-120, 120);
console.log(result);


//33. Write a JavaScript program to
//check whether two numbers are in the range 40..60 or 70..100 inclusive.

//here in return statement issue is with is that if first if is true then
//it will return immediately and never execute the second if
//soln is to use console
// function inRange(x, y) {
  //   if ((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) {
//     return `x is in range `;
//   }
//   if ((y >= 40 && y <= 60) || (y >= 70 && y <= 100)) {
  //     return `y is in range `;
  //   }
  // }
  //////////
  function inRange(x, y) {
    if ((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) {
      console.log(`x is in range `);
    } else {
      console.log("x is not in range");
    }
    if ((y >= 40 && y <= 60) || (y >= 70 && y <= 100)) {
      console.log(`y is in range `);
    } else {
      console.log("y is not in range");
    }
}
inRange(0, 0);

////////////////////////
// 34. Write a JavaScript program to find the largest number from
// the two given positive integers.
//The two numbers are in the range 40..60 inclusive.

function largestFromRange(x, y) {
  if (
    Math.abs(x) >= 40 &&
    Math.abs(x) <= 60 &&
    Math.abs(y) >= 40 &&
    Math.abs(y) <= 60
    ) {
      if (x > y) {
        return `x is bigger`;
      } else if (x === y) {
        return "both are equal";
      } else return `y is bigger`;
    } else return "not in range";
  }
  
  //more simpler way
  function test(x,y) {
    return Math.abs(x) >= 40 &&
    Math.abs(x) <= 60 &&
    Math.abs(y) >= 40 &&
    Math.abs(y) <= 60
    ? x > y
      ? x
      : y
      : false;
    }
    //another way
    
    function largestInRange(x,y) {
      return Math.abs(x) >= 40 &&
      Math.abs(x) <= 60 &&
      Math.abs(y) >= 40 &&
      Math.abs(y) <= 60
      ? Math.max(x, y)
      : `Numbers doesnot fit in the range`;
    }
    
    console.log(largestFromRange(52, 52));
    console.log(test(52, 52));
    console.log(largestInRange(52, 52));
    
    
    // 35. Write a program to
    //check whether a specified character exists
    // between the 2nd and 4th positions in a given string.[means at 3]
    //lets start from 0 index
    
    function specifiedChar(str, char) {
  let ctr = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char && i >= 1 && i <= 3) {
      ctr = 1;
      break;
    }
  }
  return ctr === 1;
}

console.log(specifiedChar("hello", "l"));
console.log(specifiedChar("hello", "e"));
console.log(specifiedChar("helzo", "z"));

function charTwoFour(word, char) {
  return word.slice(2, 5).includes(char);
}

console.log(charTwoFour("java", "a"));


// 36. Write a JavaScript
//  program that checks whether the last digit of three
// positive integers is the same.

function sameInt(x, y, z) {
  return (
    String(x).slice(-1) == String(y).slice(-1) &&
    String(x).slice(-1) == String(z).slice(-1) &&
    String(z).slice(-1) == String(y).slice(-1)
    );
  }
  console.log(sameInt(3943000, 93230, 2390));
  console.log(sameInt(3943000, 9323, 2390));
  console.log(sameInt(3943000, 93230, 239));
console.log(sameInt(3943, 93230, 2390));

//37 Write a JavaScript program to produce a new string that has the
// first 3 characters in lower case from a given string.
// If the string length is less than 3 convert all the
//characters to upper case.

function gameOfString(str) {
  if (str.length < 3) {
    console.log(str.toLocaleUpperCase());
  } else {
    console.log(str.slice(0, 3).toLocaleLowerCase() + str.slice(3));
  }
}
gameOfString("JAXScript");

//38. Write a JavaScript program to check a student's total marks
//in various examinations. The student will get A+ grade
//if the total marks are in the range 89..100 inclusive,
// if the examination is "Final-exam" the student will receive
// A+ grade and total marks must be greater than or equal to 90.
//If the student gets an A+ grade, return true, otherwise return false.

function studentMarks(marks) {
  let exam;
  if (marks >= 89 && marks <= 100) {
    exam == "other exam";
    return `true`;
  } else if (marks >= 90) {
    exam = "final exam";
    return `true`;
  } else {
    return `false`;
  }
}
console.log(studentMarks(1));

// 39. Write a JavaScript program to compute the sum of the two given integers.
// If the sum is in the range 50..80 return 65 otherwise return 80.

function sumRange(x = 0, y = 0) {
  let sum = x + y;
  // if (sum > 50 && sum < 80) return 65;
  // else return 80;
  
  return sum > 50 && sum < 80 ? 65 : 80;
}

console.log(sumRange(10, 50));

// 40. Write a JavaScript program to check from two given
//integers whether one of them is 8 or their sum or difference is 8.

function checkCond(x, y) {
  return x === 8 || y === 8 || x + y === 8 || Math.abs(x - y) === 8;
}
console.log(checkCond(10, 2));
console.log(checkCond(10, 12));

// 41. Write a JavaScript program to check a set of three numbers;
// if the three numbers are the same return 30;
// otherwise return 20; and if two numbers are the same return 40.

function repeat(x, y, z) {
  if (x == y && y == z) return 30;
  if (x == y || y == z || z == x) return 40;
  return 20;
}
function repeatUsingCond(x, y, z) {
  return x == y && y == z ? 30 : x == y || y == z || z == x ? 40 : 20;
}

console.log(repeat(104, 1032, 1024));
console.log(repeatUsingCond(104, 1032, 1024));

// 42. Write a JavaScript program to check whether three given numbers are
//increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function mode(x, y, z) {
  if (y > x && z > y) return `Three numbers are in strict mode`;
  else if (z > y) return `Soft mode`;
  else return `undefined`;
}

console.log(mode(10, 15, 20));


// 43. Write a JavaScript program to check from three given
//numbers (non negative integers) that two or all of them have the
//same rightmost digit.

function rightMost(x, y, z) {
  const xRightMost = String(x).slice(-1);
  const yRightMost = String(y).slice(-1);
  const zRightMost = String(z).slice(-1);
  if (xRightMost === yRightMost) return true;
  if (xRightMost === yRightMost && yRightMost === zRightMost) return true;
  else return false;
}
console.log(rightMost(1038, 1237, 1458));

function rightMost(x, y, z) {
  const xRightMost = x.toString().slice(-1);
  console.log(xRightMost);
  const yRightMost = String(y).slice(-1);
  const zRightMost = String(z).slice(-1);
  
  if (xRightMost === yRightMost) return true;
  if (xRightMost === yRightMost && yRightMost === zRightMost) return true;
  else return false;
}
console.log(rightMost(1038, 1238, 1458));

*/
// 44. Write a JavaScript program to check from three given
// integers whether a number is greater than or equal to 20.
// It is less than the others.

function greaterThan20(x, y, z) {}
console.log(greaterThan20(10, 100, 120));
