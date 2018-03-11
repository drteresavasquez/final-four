"use strict";

let $ = require('jquery'),
    putThemGames = "https://exercisedb-20924.firebaseio.com/final-four/games";

let getData = (url) => {
    return $.ajax({
        url: url
    });
};

function addData(obj, area) {
    return $.ajax({
        url: `${putThemGames}/${area}.json`,
        type: 'POST',
        data: JSON.stringify(obj),
        dataType: 'json'
    }).done((objID) => {
        console.log(objID);
    });
}

module.exports = {
    getData,
    addData
};