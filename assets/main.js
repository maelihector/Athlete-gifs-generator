// Initial array of gifs 
var gifs = ["stars", "earth", "galaxy", "gravity", "nasa", "bloodmoon", "sun", "milkyway", "cosmos", "space", "universe"];

// Function to render appropriate gifs
function displayGif() {
    var gif = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=HxF2W3delLN8HvwXkOdecyRXMrU3FzgS&rating=g&limit=10"; // set rating=g and specify to return only 10 gifs with limit=10.

    // AJAX call
    $.get(queryURL)
}