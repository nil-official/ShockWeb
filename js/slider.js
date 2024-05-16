/**
 * Change the slide swith delay using slideInterval
 */
const slideInterval = 5000;

//==================================================

// Flag variable to indicate start state of slider
let sliderStart = true;

// Function to loop slides (right to left)
const changeSlide = function () {
    // Get the width of the screen dynamically
    let width = window.innerWidth;
    // get the slider
    const slider = document.getElementById("slider")
    // arranging the slides to fix start skip glitch
    if(sliderStart){
        sliderStart = false;
        slider.appendChild(slider.firstElementChild);
    }

    // pick the first slide and send it to last, to loop
    slider.appendChild(slider.firstElementChild);
    // scroll the slide
    slider.scrollBy(width*2, 0);
}

// use setInterval to change slides
setInterval(changeSlide, slideInterval);