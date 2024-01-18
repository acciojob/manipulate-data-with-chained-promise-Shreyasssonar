/*  your css code here. If applicable */
function manipulateData(inputArray) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputArray);
    }, 3000);
  })
  .then((data) => {
    // Filter out odd numbers after 1 second
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredArray = data.filter(num => num % 2 === 0);
        document.getElementById('output').innerText = filteredArray.toString();
        resolve(filteredArray);
      }, 1000);
    });
  })
  .then((filteredArray) => {
    // Multiply even numbers by 2 after 2 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        const multipliedArray = filteredArray.map(num => num * 2);
        document.getElementById('output').innerText = multipliedArray.toString();
        resolve(multipliedArray);
      }, 2000);
    });
  });
}

const inputArray = [1, 2, 3, 4];

manipulateData(inputArray);