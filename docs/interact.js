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

function init() {
    var button = document.getElementById('changeColorButton');
    button.addEventListener('click',changeColor, false)
}

function changeColor() {
    var heading = document.getElementById("myHeading");
    heading.style.color = "black";
}

document.getElementById("changeColorButton").addEventListener("click", changeColor);

window.addEventListener('DOMContentLoaded', init, false);


//From here to down is for the checkbox on RESUME page


var originalBackground;
function toggleHighlight() {
    var pos = this.getAttribute('value');
    var color;
    switch (pos) {
       case 'Native':
        color = 'yellow';
        break;
        case 'Fluent':
        color = 'orange';
        break;
        case 'Intermediate':
        color = 'teal';
        break;
        case 'Basic':
        color = 'red';
        break;
    }
    var status = this.checked;
    // the status to which you've just changed the checkbox
    var spans = document.getElementsByClassName(pos);
    for (var i = 0; i < spans.length; i++) {
        if (status == true) {
            spans[i].style.backgroundColor = color;
        } else {
            spans[i].style.backgroundColor = originalBackground;
        }
    }
}
function init() {
    originalBackground = document.body.style.backgroundColor;
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', toggleHighlight, false);
    }
}
window.addEventListener('DOMContentLoaded', init, false);












