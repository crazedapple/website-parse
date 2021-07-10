/*
    Этот файл делает то-то
    Автор: Дмитрий Косарев
 */
//const functions = require('./functions.js')

let objectNumbers = {
    status: "ok",
    list: [{
        id: 1,
        firstName: "Wayne",
        myFirstNameLength: 5,
        lastName: "Rodgers",
        Rodgers: "is my family name",
        fullName: "Wayne Rodgers",
        nickName: "停、小琉",
        chineseName: "方才鸣",
        children: ["Phillip", "Johanna"],
        favouriteChild: "Johanna",
        age: 27,
        "to100": 73,
        telephone: "14779125709",
            avatar: "https://llss.qiniudn.com/d8bad2c0f825c92e0415a5d46c3d2fbe1.jpg",
        others: {
            objectInArray: [{a: 27, b: "14799115297"}],
            getSystemConfig: "(°ロ°)☝",
            words: "Hello, my name is Wayne Rodgers, you can call me 停、小琉.",
            bestFriends: "Yolanda😊"
        }
    }, {
        id: 3,
        firstName: "Travis",
        myFirstNameLength: 6,
        lastName: "Armstrong",
        Armstrong: "is my family name",
        fullName: "Travis Armstrong",
        nickName: "神偷",
        chineseName: "华祥颖",
        children: ["Floyd"],
        favouriteChild: "Floyd",
        age: 64,
        "to100": 36,
        telephone: "13967678982",
        avatar: "https://llss.qiniudn.com/d282009ed5d75d0701c08ea065cf206b5.jpg",
        others: {
            objectInArray: [{a: 64, b: "14199402836"}],
            getSystemConfig: "◕‿↼",
            words: "Hello, my name is Travis Armstrong, you can call me 神偷.",
            bestFriends: "失意 andy, 真理先生"
        }
    }, {
        id: 4,
        firstName: "Rosa",
        myFirstNameLength: 4,
        lastName: "Mendez",
        Mendez: "is my family name",
        fullName: "Rosa Mendez",
        nickName: "一路有你",
        chineseName: "邹潘贞谦",
        children: ["Maurice", "Bryan"],
        favouriteChild: "Maurice",
        age: 43,
        "to100": 57,
        telephone: "13464404023",
        avatar: "https://llss.qiniudn.com/d282009ed5d75d0701c08ea065cf206b5.jpg",
        others: {
            objectInArray: [{a: 43, b: "15042305354"}],
            getSystemConfig: "≧☉_☉≦",
            words: "Hello, my name is Rosa Mendez, you can call me 一路有你.",
            bestFriends: "你是大坏蛋、、, Nancy"
        }
    }, {
        id: 2,
        firstName: "Sally",
        myFirstNameLength: 5,
        lastName: "Padilla",
        Padilla: "is my family name",
        fullName: "Sally Padilla",
        nickName: "赫女神",
        chineseName: "褚水昌安",
        children: ["Russell", "Bradley"],
        favouriteChild: "Bradley",
        age: 44,
        "to100": 56,
        telephone: "14290531996",
        avatar: "https://llss.qiniudn.com/d11acfab711e373a7d763bbdc4d0f4a97.jpg",
        others: {
            objectInArray: [{a: 44, b: "14249163596"}],
            getSystemConfig: "ლ(́◉◞౪◟◉‵ლ)",
            words: "Hello, my name is Sally Padilla, you can call me 赫女神.",
            bestFriends: "Timothy-Shi93, Nix."
        }
    }]
}

// Значение тебе передают снаружи
let ourCustomUserId = 4
let ourCustomUserValues = ['id', 'avatar', 'telephone', 'firstName', 'lastName', 'age']


// Это твоя программа
let usersArray = objectNumbers.list;

// Мы здесь хотим увидеть объект с нужным пользователем
let ourUser = usersArray.find(obj => {
    if (obj.id === ourCustomUserId) {
        return obj;
    }
})

// Создаем новый объект на основе переденных полей ourCustomUserValues
let response = {}
ourCustomUserValues.forEach(value => {
    response[value] = ourUser[value]
})

// Выводим результат в консоль
console.log(response)
