"use strict";

let $ = require('jquery'),
    getData = require('./getData');

// Checks to ensure there are games in the DB for each conference. If not, the program matches up the teams based on rank and adds them to the DB
let initialRun = (area) => {
    getData.getData(`./js/${area}.json`)
        .then((data) => {
            getData.getData(`https://exercisedb-20924.firebaseio.com/final-four/games/${area}.json`)
                .then((games) => {
                    let array = data[area];
                    if (games === null) {
                        buildGames(array, area);
                    } else {
                        buildDOM(array, area);
                        console.log("Already Got Games");
                    }
                });
        });
};

// Builds the bracket dynamically
let buildGames = (array, area) => {
    let gameNums = [1, 2, 3, 4, 5, 6, 7, 8];
    array.forEach((item, index) => {
        gameNums.forEach((num) => {
            if (item.place === num) {
                let game = {
                    "gameID": num,
                    "T1": item.school,
                    "T1score": 0,
                    "T2": array[16 - num].school,
                    "T2score": 0
                };
                getData.addData(game, area);
                buildDOM(array, area);
            }
        });
    });
};

// Build the DOM to show game matchups
let buildDOM = (array, area) => {
    let gameNums = [1, 2, 3, 4, 5, 6, 7, 8];
    array.forEach((item, index) => {
        gameNums.forEach((num) => {
            if (item.place === num) {
                $(".container").append(
                    `<h5>${area.toUpperCase()} Game ${num}</h5>
                    <p>Team 1: ${item.school} (${item.place})<br>
                    Team 2: ${array[16-num].school} (${array[16-num].place})</p>`
                );
            }
        });
    });
};

initialRun("east");
initialRun("south");
initialRun("midwest");
initialRun("west");