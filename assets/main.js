$(document).ready(() => {
    // Initial array of topics
    var topics = ["Serena Williams", "Cristiano Ronaldo", "Rafael Nadal", "Tom Brady", "Guillermo Ochoa",
        "Simone Biles",
        "Manu Ginobili", "Gerard Pique", "James Rodriguez", "Russell Westbrook",
        "Lindsey Vonn", "Nick Young", "Roger Federer", "Neymar", "Vince Wilfork"
    ];

    // Function to render appropriate topics
    function displayGif() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gif + "&api_key=HxF2W3delLN8HvwXkOdecyRXMrU3FzgS&rating=pg&limit=10";

        // AJAX call, then create a function that takes the AJAX returned Object, and label it as 'response', 
        // Perfoming an AJAX GET request to our queryURL
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            // After the data from the AJAX request comes back
            .then(function (response) {
                console.log(response); // check response
                // then create var 'results' that stores response.data.
                var results = response.data;

                // Loop through the result (which holds 10 seperate gifs),
                for (var i = 0; i < results.length; i++) {

                    // create a <div> to hold the gif,
                    var gifDiv = $("<div>").addClass("gifStyle");

                    // retrieve still url that will be used to display initial image
                    // and store it in var stillGif.
                    var stillGif = results[i].images.original_still.url;

                    // Retrieve the URL for the animated gif  and store it in var animateGif.
                    var animateGif = results[i].images.original.url;

                    // then create an <img>,
                    // add attr 'src' of stillGif,
                    // add attr 'gif-still' of stillGif
                    // add attr 'state' of'still'
                    // add attr 'gif-animate' of animateGif
                    // add class of .gif
                    // and store it in image var.
                    var image = $("<img>").attr("src", stillGif).attr("gif-still", stillGif).attr("state", "still").attr("gif-animate", animateGif).addClass("gif").attr("alt", "famous athlete");

                    // Retrieve the rating and store in 'rating' var
                    var rating = results[i].rating;
                    // Create a <p> to display rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Event listener for the qimage clicked
                    $(image).on("click", function () {
                        // Get the value of the attribute clicked and store it in var state
                        var state = $(this).attr("state");
                        // Toggle between state="still" and state="animate" with each click
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("gif-animate"));
                            $(this).attr("state", "animate");
                        } else if (state === "animate") {
                            $(this).attr("src", $(this).attr("gif-still"));
                            $(this).attr("state", "still");
                        }
                    });

                    // Append the image
                    gifDiv.append(image);
                    // Append the paragraph
                    gifDiv.append(p);

                    // Add gifs to the beginning of gifs-view.
                    $("#gifs-view").prepend(gifDiv);

                }
            })
    }

    // Function for generating gif buttons
    function renderButtons() {

        // Delete the gifs prior to re-looping through the array
        $("#buttons-view").empty();

        // Loop through topics array
        for (var i = 0; i < topics.length; i++) {

            // Generate a button for each gif in the array
            var a = $("<button>");
            // Add a class of gif-btn to each button
            a.addClass("gif-btn btn btn-primary");
            // Add an attribute of data-name to each button
            a.attr("data-name", topics[i]);
            // Labeling the button with the array item string
            a.text(topics[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

    // Create function to handle the event for when an input value is submitted
    // First mpty text field when user clicks in it
    $("#gif-input").click(
        function () {
            $(this).val('');
        });
    // Function here
    $("#add-gif").on("click", function (event) {

        event.preventDefault();

        // Grab the input from the textbox, trim white space
        var gif = $("#gif-input").val().trim();

        // prevent submit if text-input field is empty
        if (gif.length === 0) {
            alert("Text-box is empty!")
            return false
        }


        if (topics.indexOf(gif) > -1) return;
        // and add/push new gif to our topics array
        topics.push(gif);


        // then call renderButtons() to generate new button
        renderButtons();
    });

    // Call the renderButtons function to display the intial buttons
    renderButtons();

    // Add a click event listener to new all elements with a class of "gif-btn" and run displayGif function
    $(document).on("click", ".gif-btn", displayGif);

});