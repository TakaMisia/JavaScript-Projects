//  open and close  contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//display my pic
var slideIndex = 1;
showSlides(slideIndex);

// changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //all elements  mySlides are store  in slides
    var dots = document.getElementsByClassName("dot"); // all elements  mySlides are store  in dots
    if (n > slides.length) {slideIndex = 1}; // If n  > slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n <  is set to slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // take each item in  slides and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // takes each item in dots and remove the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //  displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //adds the active styling to the dot associated with the image
}

//  contact form when the user click off it 
//  add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    //  state - if the click happen on the cancel button 
    // anywhere that is not the contact form AND
    // the click dosn't happen on any element then call the closeForm() 
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )