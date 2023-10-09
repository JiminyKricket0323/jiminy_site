window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

    }
}

//taking user back to top
function onTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const backToTopButton = document.getElementById("backToTop");

backToTopButton.addEventListener("click", onTop);

//ABOVE BUTTOM WORKS, but I'm not quite sure why the buttom for change color of my h1 isn't quite working

// Add an event listener to the button element
document.getElementById("changeColorButton").addEventListener("click", changeColor);

// Function to change the color of the heading to black
function changeColor() {
    // Get the heading element by its id
    var heading = document.getElementById("myHeading");

    // Change the text color to black
    heading.style.color = "black";
}



