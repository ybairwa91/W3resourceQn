/*
// 1. Write a JavaScript function
//that takes a callback and invokes it after a delay of 2 second.

const asyncFunc = function (sec) {
  setTimeout(() => {
    console.log(`after ${sec} sec`);
  }, sec * 1000);
};
asyncFunc(2);

function invokeAfterDelay(callback) {
  setTimeout(callback, 2000);
}
invokeAfterDelay(() => {
  console.log("Hi");
});
//2. Write a JavaScript program that converts a
//callback-based function to a Promise-based function.

function callback_basedFunction(arg1, arg2, callback) {
  //perform asynchronus operations
  //call the callback with the result or error
  setTimeout(() => {
    const result = arg1 + arg2;
    if (result % 2 !== 0) {
      callback(null, result); //gives resolve state
    } else {
      callback(new Error("Result is not odd!"), null);
    }
  }, 1000);
}

function promisifiedFunction(arg1, arg2) {
  return new Promise((resolve, reject) => {
    callback_basedFunction(arg1, arg2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

promisifiedFunction(2, 3)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

promisifiedFunction(2, 4)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
  
  

  
  // 3. Write a JavaScript a function that makes an HTTP GET request
  //and returns a Promise that resolves with the response data.
function httpRequest(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();
  
  request.addEventListener("load", () => {
      console.log(request);
      const [data] = JSON.parse(request.responseText);
      console.log(data);
    });
}

httpRequest("https://restcountries.com/v2/name/usa");

//using fetch

function fetchRequest(url) {
    fetch(url)
    .then((res) => {
        if (!res.ok) throw new Error("Response error");
        console.log(res);
        return res.json();
    })
    .then((data) => {
        if (!data) throw new Error("data error");
        console.log(data[0]);
    })
    .catch((err) => console.error(`error message is `, err));
}
fetchRequest("https://restcountries.com/v2/name/usa");

function make_Get_Request(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status:${response.status}`);
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
    });
}
make_Get_Request("https://restcountries.com/v2/name/usa")
.then((data) => {
  console.log("Response data:", data);
  })
  .catch((error) => {
    console.log("Error", error.message);
  });
  
  */

// 4. Write a JavaScript function that takes an array of URLs
//  and downloads the contents of each URL in parallel
// using Promises.
