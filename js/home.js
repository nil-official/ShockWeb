let search = document.querySelector('.search');

search.addEventListener("click", function(){

    // above 1400
    // above 830, below 1200
    const width = window.innerWidth;
    if(width >= 830 && width < 1200 || width > 1400){
        document.querySelector(".search-container").classList.toggle('active')
    }else {
        // open modal
    }
});