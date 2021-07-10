// Import
const axios = require('axios');

// Data
let url = "https://60e726da15387c00173e4a97.mockapi.io/users";
let ageName = 'age';

// Functions
function sumNumbers(array, parameterName) {
    let sum = 0
    array.forEach((user) => {
        sum = sum + user[parameterName]
    })
    return sum;
}

//
function initialize(users) {
    // Считаем средний возраст
    let averageAge = sumNumbers(users, ageName) / users.length
    // Округляем полученный результат
    let roundAverageAge = Math.floor(averageAge)
    // Вывожу результат
    console.log("Средний возраст пользователя " + roundAverageAge)
}

//
axios.get(url).then((res) => {
    initialize(res.data)
})
