// const { check } = require("express-validator");

let watchlistJSON = localStorage.getItem("watchlist");
let watchlist = JSON.parse(watchlistJSON);

function save() {
    var checked = JSON.parse(localStorage.getItem('movie-saved'));
    if (checked == true) {
        document.getElementById("movie-saved").checked = true;
    }
}

function load() {
    var checked = JSON.parse(localStorage.getItem('movie-saved'));
    document.getElementById("movie-saved").checked = checked;
}

function wis() {
    location.reload();
    localStorage.clear()

}