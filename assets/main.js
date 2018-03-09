$(document).ready(() => {
    // Initial array of gifs 
    var gifs = ["stars", "earth", "galaxy", "gravity", "nasa", "bloodmoon", "sun", "milky way", "cosmos", "space", "universe", "rocket", "meteor", "black hole"];

    // Function to render appropriate gifs
    function displayGif() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=astronomy+" +
            gif + "&api_key=HxF2W3delLN8HvwXkOdecyRXMrU3FzgS&rating=g&limit=10"; // set rating=g and specify to return only 10 gifs with limit=10.

        // AJAX call, then create a function that takes the AJAX returned Object, and label it as 'response', 
        $.get(queryURL).then(function (response) {
            console.log(response); // check response
            // then create var 'results' that stores response.data.
            var results = response.data;

            // Loop through the result (which holds 10 seperate gifs),
            for (var i = 0; i < results.length; i++) {
                // create a <div> to hold the gif,
                var gifDiv = $("<div>").addClass("gifStyle");

                // retrieve still url that will be used to display initial image
                // and store it in var imgURL,
                var imgURL = results[i].images.original_still.url;

                // then create an <img>,
                // add attr 'src' with the url retreived,
                // add attr 'gif-still' with the same url retreived
                // add attr 'state' called 'still'
                // add class called .gif
                // and store it in image var.
                var image = $("<img>").attr("src", imgURL).attr("gif-still", imgURL).attr("state", "still").addClass("gif");

                // Append the image
                gifDiv.append(image);

                // Retrieve the rating and store in 'rating' var
                var rating = results[i].rating;
                // Create a <p> to display rating
                var p = $("<p>").text("Rating: " + rating);
                // Append the paragraph
                gifDiv.append(p);

                // Retrieve the URL for the animated gif 
                // and add attr of gif-animate to hold the result
                image.attr("gif-animate", results[i].images.original.url);

                // Add gifs to the beginning of gifs-view.
                $("#gifs-view").prepend(gifDiv);
            }
            // Event listener for images clicked
            $(".gif").on("click", function () {
                // Get the value of the attribute clicked and store it in var state
                var state = $(this).attr("state");
                // Toggle between state="still" and state="animate" with each click
                if (state === "still") {
                    $(this).attr("src", $(this).attr("gif-animate"));
                    $(this).attr("state", "animate");
                } else {
                    $(this).attr("src", $(this).attr("gif-still"));
                    $(this).attr("state", "still");
                }
            });
        })
    }
    // Function for generating gif buttons
    function renderButtons() {

        // Delete the gifs prior to re-looping through the array
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

    // Create function to handle the event for when an input value is submitted

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        // Grab the input from the textbox, trim white space
        var gif = $("#gif-input").val().trim();
        // prevent submit if text-input field is empty
        if (gif.length === 0) {
            alert("Text-box is empty!")
            return false
        }
        // and add/push new gif to our gifs array
        gifs.push(gif);
        // then call renderButtons() to generate its button
        renderButtons();
    });

    // Add a click event listener to new all elements with a class of "gif-btn" and run displayGif function
    $(document).on("click", ".gif-btn", displayGif);

    // Call the renderButtons function to display the intial buttons
    renderButtons();

});