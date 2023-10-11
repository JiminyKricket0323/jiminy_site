window.addEventListener('DOMContentLoaded', init, false);
window.onscroll = () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {

    }
}


//taking user back to top
function onTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const backToTopButton = document.getElementById("backToTop");



//ABOVE BUTTON WORKS, but I'm not quite sure why the buttom for change color of my h1 isn't quite working

function init() {
    /* backToTopButton.addEventListener("click", onTop); */
    var originalBackground = document.body.style.backgroundColor;
    var button = document.getElementById('changeColorButton');
    if (button == true)
    {button.addEventListener('click',changeColor, false)};
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        /*checkboxes[i].addEventListener('click', toggleHighlight, false);*/
        checkboxes[i].addEventListener('click', toggleDisplay, false);
    }
}

function changeColor() {
    var heading = document.getElementById("myHeading");
    heading.style.color = "black";
}



//From here to down is for the checkbox on RESUME page
//2023-10-11 ebb: I rewrote this so that getAttribute() works, though it's not clear to me why it was broken in class!
function toggleDisplay() {
    var spans = document.getElementsByTagName('span');
    var checkboxes = document.getElementsByTagName('input');
    {console.log(this.value); }
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].getAttribute('class') == this.value && this.checked == true)
          {spans[i].classList.toggle('on');} 
        else if (this.checked == false)
        {spans[i].classList.remove('on');} }
       
}


//var originalBackground;
//function toggleHighlight() {
//    var pos = this.getAttribute('value');
//    var color;
//    switch (pos) {
//       case 'Native':
//        color = 'yellow';
//        break;
//        case 'Fluent':
//        color = 'orange';
//        break;
//        case 'Intermediate':
//        color = 'teal';
//        break;
//        case 'Basic':
//        color = 'red';
//        break;
//    }
//    var status = this.checked;
//    // the status to which you've just changed the checkbox
//    var spans = document.getElementsByClassName(pos);
//    for (var i = 0; i < spans.length; i++) {
//        if (status == true) {
//            spans[i].style.backgroundColor = color;
//        } else {
//            spans[i].style.backgroundColor = originalBackground;
//        }
//    }
//}













