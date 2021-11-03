/*
GAME LEVEL
*/
window.gameLevel = window.gameLevel || [];
gameLevel.push(
    {
        level: 1,
        typeGame: "Math Game",
        type: "Drag Math Symbol",
        maxNumber: 10,
        totalQuestions: 5,
        timer: 120
    },
    {
        level: 2,
        typeGame: "Math Game",
        type: "Multiple choice",
        maxNumber: 10,
        totalQuestions: 5,
        timer: 120
    },
    {
        level: 3,
        typeGame: "Math Game",
        type: "Yes No",
        maxNumber: 10,
        totalQuestions: 5,
        timer: 120
    },
    {
        level: 4,
        typeGame: "Math Game",
        type: "knowledge",
        totalQuestions: 4,
        questionCollection: [{
            question: "What is the greatest two digit number?",
            posibleAnswer: ["10", "20", "50", "40"],
            correctAnswer: "50"
        },
        {
            question: "Complete the sequence 13, 16, ……, 22.",
            posibleAnswer: ["17", "18", "19", "20"],
            correctAnswer: "19"
        },
        {
            question: "How many digits are there in 1000?",
            posibleAnswer: ["One digit", "Two digits", "Three digits", "Four digits"],
            correctAnswer: "Four digits"
        },
        {
            question: "What is the average value of 25, 25, 47 and 3?",
            posibleAnswer: ["23", "24", "25", "26"],
            correctAnswer: "25"
        }],
        timer: 120
    },
    {
        level: 5,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 4,
        maxNumber: 12,
        timer: 10
    },
    {
        level: 6,
        typeGame: "Order Number",
        type: "decending order",
        numberOfButtons: 4,
        maxNumber: -12,
        timer: 10
    },
    {
        level: 7,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }],
        timer: 30
    },
    {
        level: 8,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }, {
            name: 'many-apple',
            img: 'images/many-apple.jpg',
        }],
        timer: 45
    },
    {
        level: 9,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }, {
            name: 'many-apple',
            img: 'images/many-apple.jpg',
        }, {
            name: 'apple-bright.jpg',
            img: 'images/apple-bright.jpg',
        }],
        timer: 60
    },
    {
        level: 10,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 6,
        maxNumber: 20,
        timer: 40
    },
    {
        level: 11,
        typeGame: "Order Number",
        type: "decending order",
        numberOfButtons: 4,
        maxNumber: -20,
        timer: 40
    },
    {
        level: 12,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 6,
        maxNumber: 20,
        timer: 20
    },
    {
        level: 13,
        typeGame: "Order Number",
        type: "decending order",
        numberOfButtons: 6,
        maxNumber: 20,
        timer: 20
    },
    {
        level: 14,
        typeGame: "Math Game",
        type: "Drag Math Symbol",
        maxNumber: 200,
        totalQuestions: 10,
        timer: 120
    },
    {
        level: 15,
        typeGame: "Math Game",
        type: "Multiple choice",
        maxNumber: 10,
        totalQuestions: 10,
        timer: 120
    },
    {
        level: 16,
        typeGame: "Math Game",
        type: "Yes No",
        maxNumber: 10,
        totalQuestions: 10,
        timer: 120
    },
    {
        level: 17,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }, {
            name: 'many-apple',
            img: 'images/many-apple.jpg',
        }, {
            name: 'apple-bright.jpg',
            img: 'images/apple-bright.jpg',
        },
        {
            name: 'apple-hand',
            img: 'images/apple-hand.jpg',
        }],
        timer: 360
    },
    {
        level: 18,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }, {
            name: 'many-apple',
            img: 'images/many-apple.jpg',
        }, {
            name: 'apple-bright.jpg',
            img: 'images/apple-bright.jpg',
        }, {
            name: 'apple-food-fresh',
            img: 'images/apple-food-fresh.jpg',
        },
        {
            name: 'apple-hand',
            img: 'images/apple-hand.jpg',
        }],
        timer: 360
    },
    {
        level: 19,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 15,
        maxNumber: 50,
        timer: 300
    },
    {
        level: 20,
        typeGame: "Order Number",
        type: "decending order",
        numberOfButtons: 20,
        maxNumber: 100,
        timer: 300
    },
    {
        level: 21,
        typeGame: "Math Game",
        type: "Drag Math Symbol",
        maxNumber: 20,
        totalQuestions: 15,
        timer: 300
    },
    {
        level: 22,
        typeGame: "Math Game",
        type: "Multiple choice",
        maxNumber: 20,
        totalQuestions: 15,
        timer: 400
    },
    {
        level: 23,
        typeGame: "Math Game",
        type: "Yes No",
        maxNumber: 30,
        totalQuestions: 20,
        timer: 400
    },
    {
        level: 24,
        typeGame: "Order Number",
        type: "ascending order",
        numberOfButtons: 20,
        maxNumber: 200,
        timer: 900
    },
    {
        level: 25,
        typeGame: "Math Game",
        type: "knowledge",
        totalQuestions: 4,
        questionCollection: [{
            question: "What is the smallest two digit number?",
            posibleAnswer: ["10", "20", "50", "40"],
            correctAnswer: "10"
        },
        {
            question: "Complete the sequence 10, 12, ……, 16.",
            posibleAnswer: ["12", "13", "14", "15"],
            correctAnswer: "14"
        },
        {
            question: "How many digits are there in 150?",
            posibleAnswer: ["One digit", "Two digits", "Three digits", "Four digits"],
            correctAnswer: "Three digits"
        },
        {
            question: "What is the average value of 5, 10, 3 and 2",
            posibleAnswer: ["2", "3", "4", "5"],
            correctAnswer: "5"
        }],
        timer: 120
    },
    {
        level: 26,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }, {
            name: 'many-apple',
            img: 'images/many-apple.jpg',
        }, {
            name: 'apple-bright.jpg',
            img: 'images/apple-bright.jpg',
        },
        {
            name: 'apple-hand',
            img: 'images/apple-hand.jpg',
        }],
        timer: 360
    },
    {
        level: 27,
        typeGame: "Memory Game",
        cardCollections: [{
            name: 'apple',
            img: 'images/apple.jpg'
        }, {
            name: 'cut-apple',
            img: 'images/cut-apple.jpg',
        }, {
            name: 'many-apple',
            img: 'images/many-apple.jpg',
        }, {
            name: 'apple-bright.jpg',
            img: 'images/apple-bright.jpg',
        }, {
            name: 'apple-food-fresh',
            img: 'images/apple-food-fresh.jpg',
        },
        {
            name: 'apple-hand',
            img: 'images/apple-hand.jpg',
        }],
        timer: 360
    }
);

/*Number of Star for the game*/
window.numberStar = 3;

/* Alphabets Character */
var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/* Equation Sign */
var equationSign = ['+', '-', '*', '/'];

/*background music*/
window.backgroudMusic = window.backgroudMusic || [];
backgroudMusic.push("sound/backgroundMusic1.mp3", "sound/backgroundMusic2.mp3", "sound/backgroudMusic3.mp3");

/*Text to say congraduation  */
window.congraduation = window.congraduation || [];
congraduation.push("Congratulations", "Amazing", "Perfect", "Great", "Fantastic", "Awesome", "Wonderfull");

/*Text to say pass the game with required to improve  */
window.requireToImprove = window.requireToImprove || [];
requireToImprove.push("Let's try harder next time", "Not Bad", "That alright")

/*Text to encourage the user when they must play the game again */
window.encourage = window.encourage || [];
encourage.push("Deep breathing and relaxing", "That’s okay! You will get through it next time", "Get your mind off of things and let you recharge a little bit.");

/* Legal data*/
window.legalData =
    [{
        Name: "correctAnswer.mp3",
        LicenseType: "Standard License",
        Author: "Finnolia Productions Inc",
        Source: "https://www.soundeffectsplus.com/product/correct-answer-double-01/"
    },
    {
        Name: "wrongAnswer.mp3",
        LicenseType: "Standard License",
        Author: "Finnolia Productions Inc",
        Source: "https://www.soundeffectsplus.com/product/wrong-answer-buzzer-05/"
    },
    {
        Name: "congraduationSound.mp3",
        LicenseType: "Standard License",
        Author: "Finnolia Productions Inc",
        Source: "https://www.soundeffectsplus.com/product/correct-answer-bell-gliss-01/"
    },
    {
        Name: "backgroudMusic1.mp3",
        LicenseType: "CC-BY",
        Author: "snowflake",
        Source: "http://dig.ccmixter.org/files/snowflake/59564"
    },
    {
        Name: "backgroudMusic2.mp3",
        LicenseType: "CC-BY",
        Author: "snowflake",
        Source: "http://dig.ccmixter.org/files/snowflake/58681"
    },
    {
        Name: "backgorundMisic3.mp3",
        LicenseType: "CC-BY",
        Author: "snowflake",
        Source: "http://dig.ccmixter.org/files/hansatom/54914"
    },
    {
        Name: "homeLogo.jpg",
        LicenseType: "Pexels",
        Author: "Bogdan Dirică",
        Source: "https://www.pexels.com/photo/photo-of-person-holding-crystal-ball-1645668/"
    },
    {
        Name: "apple.jpg",
        LicenseType: "Pexels",
        Author: "mali maeder",
        Source: "https://www.pexels.com/photo/healthy-apple-fruits-natural-102104/"
    },
    {
        Name: "cut-apple.jpg",
        LicenseType: "Pexels",
        Author: "John Finkelstein",
        Source: "https://www.pexels.com/photo/red-apple-1630588/"
    },
    {
        Name: "many-apple.jpg",
        LicenseType: "Pexels",
        Author: "Pixabay",
        Source: "https://www.pexels.com/photo/red-apple-fruits-162806/"
    },
    {
        Name: "apple-bright.jpg",
        LicenseType: "Pexels",
        Author: "Bruno Scramgnon",
        Source: "https://www.pexels.com/photo/apple-blur-bright-close-up-588587/"
    },
    {
        Name: "apple-food-fresh.jpg",
        LicenseType: "Pexels",
        Author: "Skitterphoto",
        Source: "https://www.pexels.com/photo/wet-green-apple-38068/"
    },
    {
        Name: "apple-hand.jpg",
        LicenseType: "Pexels",
        Author: "Aleksandar Cvetanović",
        Source: "https://www.pexels.com/photo/close-up-photo-of-person-holding-red-apple-1451649/"
    }
    ];

// MEMORY GAME
window.dragData = window.dragData || [];
// now add the data for GAME LEVEL 4 (Memory Game)
dragData.push(
    {
        name: 'apple',
        img: 'images/apple.jpg',
    },
    {
        name: 'cut-apple',
        img: 'images/cut-apple.jpg',
    },
    {
        name: 'many-apple',
        img: 'images/many-apple.jpg',
    },
    {
        name: 'apple-bright.jpg',
        img: 'images/apple-bright.jpg',
    }

);
// cardCollections.push(
//     {
//         name: 'apple',
//         img: 'images/apple.jpg',
//     },
//     {
//         name: 'cut-apple',
//         img: 'images/cut-apple.jpg',
//     },
//     {
//         name: 'many-apple',
//         img: 'images/many-apple.jpg',
//     },
//     {
//         name: 'apple-bright.jpg',
//         img: 'images/apple-bright.jpg',
//     },
//     {
//         name: 'apple-food-fresh',
//         img: 'images/apple-food-fresh.jpg',
//     },
//     {
//         name: 'apple-hand',
//         img: 'images/apple-hand.jpg',
//     },
// );


