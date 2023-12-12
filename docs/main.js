
window.addEventListener("scroll", () => {
    let scroll = window.scrollY; // corrected to window.scrollY
    const section = document.querySelector("section");
    const overlay = document.querySelector(".overlay");

    section.style.backgroundSize = `${100 + (scroll * 0.1)}%`; // corrected the syntax
    overlay.style.background = `rgba(0, 0, 0, ${scroll * 1.7 / window.innerHeight})`; // corrected the syntax
});

window.addEventListener('scroll', function(e){

    const target = document. querySelectorAll('.GLscroll');


    var index = 0, length = target.length;
    for (index; index < length; index ++) {
        var pos = window.pageYOffset * target[index].dataset.rate;

        if(target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px, '+pos+'px, 0px)';
        } else {
            var posX = window.pageYOffset * target[index].dataset.ratex;
            var posY = window.pageYOffset * target[index].dataset.ratey;

            target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
        }
    }

});