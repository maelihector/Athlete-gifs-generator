// Initial array of gifs 
var gifs = ["stars", "earth", "galaxy", "gravity", "nasa", "bloodmoon", "sun", "milky way", "cosmos", "space", "universe", "rocket", "meteor", "black hole"];

// Function to render appropriate gifs
function displayGif() {

    var gif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=astronomy+" +
        gif + "&api_key=HxF2W3delLN8HvwXkOdecyRXMrU3FzgS&rating=g&limit=10"; // set rating=g and specify to return only 10 gifs with limit=10.
    // AJAX call
    $.get(queryURL)

        // Create a function that takes the AJAX returned Object, and label it as 'response', 
        .then(function (response) {
            console.log(response); // check response
            // then create var 'results' that stores response.data.
            var results = response.data;

            // Loop through the result (which holds 10 seperate gifs),
            for (var i = 0; i < results.length; i++) {
                // create a <div> to hold the gif,
                var gifDiv = $("<div>");

                // retrieve still url that will be used to display initial image
                // and store it in var imgURL,
                var imgURL = results[i].images.original_still.url;
                // then create an <img> and add the still url retreived src to it
                // and store it in var image.
                var image = $("<img>").attr("src", imgURL);

                // Append the image
                gifDiv.append(image);

                // Add gifs to the beginning of gifs-view.
                $("#gifs-view").prepend(gifDiv);
            }
        })
}
// Function for generating gif buttons
function renderButtons() {

    // Delete the gifs prior to adding new gifs
    $("#buttons-view").empty();

    // Loop through gifs array
    for (var i = 0; i < gifs.length; i++) {

        // Generate a button for each gif in the array
        var a = $("<button>");
        // Add a class of gif-btn to each button
        a.addClass("gif-btn btn btn-primary");
        // Add an attribute of data-name to each button
        a.attr("data-name", gifs[i]);
        // Labeling the button with the array item string
        a.text(gifs[i]);
        // Adding the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}
// Add a click event listener to new all elements with a class of "gif-btn"
$(document).on("click", ".gif-btn", displayGif);

// Call the renderButtons function to display the intial buttons
renderButtons();

