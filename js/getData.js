"use strict";

let $ = require('jquery'),
    putThemGames = "https://exercisedb-20924.firebaseio.com/final-four/games";

let getData = (url) => {
    return $.ajax({
        url: url
    });
};

function addData(obj, area) {
    $.ajax({
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