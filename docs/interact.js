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

<<<<<<< HEAD
/*backToTopButton.addEventListener("click", onTop);*/
=======
>>>>>>> refs/remotes/origin/main


//ABOVE BUTTON WORKS, but I'm not quite sure why the buttom for change color of my h1 isn't quite working

function init() {
<<<<<<< HEAD
    var originalBackground = document.body.style.backgroundColor;
    var button = document.getElementById('changeColorButton');
    var checkboxes = document.getElementsByTagName('input');
   
    /*button.addEventListener('click',changeColor, false)*/

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', toggleOn, false);
=======
    /* backToTopButton.addEventListener("click", onTop); */
    var originalBackground = document.body.style.backgroundColor;
    var button = document.getElementById('changeColorButton');
    /* 2023-10-11 ebb: The line below just says only add the event listener if the button is actually present.
     * Otherwise, don't bother! 
     *  */
    if (button !== null)
    {button.addEventListener('click',changeColor, false)};
    var checkboxes = document.getElementsByTagName('input');
    for (var i = 0; i < checkboxes.length; i++) {
        /*checkboxes[i].addEventListener('click', toggleHighlight, false);*/
        checkboxes[i].addEventListener('click', toggleDisplay, false);
    }
>>>>>>> refs/remotes/origin/main
}

function changeColor() {
    var heading = document.getElementById("myHeading");
    heading.style.color = "black";
}

<<<<<<< HEAD
/*document.getElementById("changeColorButton").addEventListener("click", changeColor);
*/
window.addEventListener('DOMContentLoaded', init, false);
=======
>>>>>>> refs/remotes/origin/main

function toggleOn() {
    var spans = document.getElementsByTagName('span');
    for (var i = 0; i < spans.length; i++);
    console.log(this.value)
    var classAttribute = spans[i].querySelector('class');
    console.log('classAttribute');
 /*  What we want to do is match the class attribute to this.value */
        if (spans[i].querySelector('class') == this.value);
            {spans[i].classList('on');}
        
    }
    
}

//From here to down is for the checkbox on RESUME page
<<<<<<< HEAD


/*var originalBackground;
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
}*/

window.addEventListener('DOMContentLoaded', init, false);
=======
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

/*sadjfiasdmfa to make comment = command, shift, forward slash*/

        const geometry = new THREE.BoxGeometry(10, 10, 10);

        //set the color of the basic material in the object parameters `{}`

        const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );

        const cube = new THREE.Mesh( geometry, material );

    });



        document.getElementById('linkedin-icon').addEventListener('click', function() {
        window.location.href = 'https://www.linkedin.com/in/your-linkedin-profile';
    });

        document.getElementById('github-icon').addEventListener('click', function() {
        window.location.href = 'https://github.com/your-github-profile';
    });




