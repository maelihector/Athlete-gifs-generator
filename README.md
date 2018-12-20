# Famous Athletes Gifs

## What does it do?
The project uses JavaScript and jQuery to change the HTML of the webpage.

The webpage uses an AJAX request to [Giphy](https://github.com/Giphy) to populate gifs on the page. 

## How does it work?
**Initial List of Buttons**
There is an existing array of strings labeled `topics` that holds the names of several famous athletes, and at `document.ready()`, using jQuery, we generate buttons for each value of `topics` and dump them on the page.

**User Added Buttons**
Under the list of`topics` buttons there is a form that allows the user to enter their own value of a 'famous athlete' to `.push()` into the existing `topics` array. The page then re-render's the buttons with the new `topics` array that includes the user's input.

**Generating Gifs**
When any of the buttons are clicked, the page grabs 10 static, non-animated gif images from the GIPHY API and dumps them on the page.

**Animating the Gifs**
By clicking a gif image the user can toggle between animating the gif and making it still.


## Technologies Used

1. HTML
2. CSS
3. [BootStrap](https://getbootstrap.com/)
4. JavaScript
5. [jQuery](https://jquery.com/)


## Credits

- Gifs from [Giphy](https://github.com/Giphy)

- This README was written with [StackEdit](https://stackedit.io/)