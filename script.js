 function manipulateArray(inputArray) {
            return new Promise(resolve => {
                setTimeout(() => {
                    // Filter out odd numbers
                    const filteredArray = inputArray.filter(num => num % 2 === 0);

                    resolve(filteredArray);
                }, 1000);
            })
            .then(filteredArray => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        // Multiply even numbers by 2
                        const multipliedArray = filteredArray.map(num => num * 2);

                        resolve(multipliedArray);
                    }, 2000);
                });
            });
        }

        // Update the text of the HTML element with the manipulated array
        function updateOutputText(resultArray) {
            const outputElement = document.getElementById('output');
            outputElement.textContent = resultArray.join(', ');
        }

        // Example usage
        const inputArray = [1, 2, 3, 4];

        manipulateArray(inputArray)
            .then(resultArray => {
                updateOutputText(resultArray);
            })
            .catch(error => {
                console.error('Error:', error);
            });