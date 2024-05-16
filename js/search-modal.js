// Get the modal
var modal = document.getElementById("search-modal");

// Get the button that opens the modal
var btn = document.getElementById("search-btn");

// Get the <span> element that closes the modal
var span = document.getElementById("search-close-btn");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    if (window.innerWidth < 830) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}