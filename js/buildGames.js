"use strict";

let $ = require('jquery'),
    getData = require('./getData');

// Checks to ensure there are games in the DB for each conference and adds them if not
let initialRun = (area) => {
    getData.getData(`./js/${area}.json`)
        .then((data) => {
            getData.getData(`https://exercisedb-20924.firebaseio.com/final-four/games/${area}.json`)
                .then((games) => {
                    if (games === null) {
                        let array = data[area];
                        buildGames(array, area);
                    } else {
                        console.log("Already Got Games");
                    }
                });
        });
};

// Builds the bracket dynamically
let buildGames = (array, area) => {
    let gameNums = [1,2,3,4,5,6,7,8];
    array.forEach((item, index) => {
        gameNums.forEach((num)=>{
            if (item.place === num) {
                let game = {
                    "gameID": `${area}-${num}`,
                    "T1": item.school,
                    "T1score": 0,
                    "T2": array[16-num].school,
                    "T2score": 0
                };
                getData.addData(game, area);
            }
        });
    });
};

initialRun("east");
initialRun("south");