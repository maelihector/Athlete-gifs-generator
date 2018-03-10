# gifTastic

## Using the GIPHY API to make a dynamic web page.
- - -
### What is this?

This Famous Athlete Gifs site is a project that I built as one of 
The UT Coding Boot Camp assignments, and is meant to demonstrate knowledge of API calls. 

- - -
### What does this do?

**The site uses an AJAX call to the [Giphy API](https://github.com/Giphy).**

There is an initial array of strings stored in a variable called `topics`, and for each value in `topics` a button is created and displayed on the HTML. 

When a button is clicked, the page grabs 10 static, non-animated gif images from the GIPHY API and places them on the page.

With the clicking of each gif image the user can toggle between animating the gif and making it still.

There is also a form that takes the user's value and appends it to `topics` array. Each time a new value is added to `topics`, a function takes the new array and remakes the buttons on the page.
