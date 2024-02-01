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

*/

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
