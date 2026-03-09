//creates an array of all the elements inside the "slides" class. This makes it easier to loop through
var slides = document.getElementsByClassName("slides");
//declares the global and starting index at 1. This is needed to go through the slides and make the slideshow
var globalIndex = 1;
//function to exit the slideshow and go back to the original page
function closeSlideshow(){
    //hides all the slides in the slideshow
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    //displays the grid of images again, taking it back to what it was before.
    document.getElementById("container").style.display = "grid";
    //places the user at the top of the page.
    document.documentElement.scrollTop = 0;
}
//function to display the picture the user clicks on
function currentPicture(index) {
    //sets the global index as the picture the user clicked on. this is used for the slideshow and the arrow functions to scroll through it
    globalIndex = index;
    //makes the slideshow visible
    document.getElementById("slideshow").style.display = "block";
    //checks which image it is and then shows the image on the page and hides all the other ones.
    if (index == 1) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg1").style.display = "block"
        document.getElementById('imggg1').style.width = "50%"
        document.getElementById('imggg1').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 0) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 2) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg2").style.display = "block"
        document.getElementById('imggg2').style.width = "50%"
        document.getElementById('imggg2').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 1) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 3) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg3").style.display = "block"
        document.getElementById('imggg3').style.width = "50%"
        document.getElementById('imggg3').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 2) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 4) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg4").style.display = "block"
        document.getElementById('imggg4').style.width = "50%"
        document.getElementById('imggg4').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 3) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 5) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg5").style.display = "block"
        document.getElementById('imggg5').style.width = "50%"
        document.getElementById('imggg5').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 4) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 6) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg6").style.display = "block"
        document.getElementById('imggg6').style.width = "50%"
        document.getElementById('imggg6').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 5) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 7) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg7").style.display = "block"
        document.getElementById('imggg7').style.width = "50%"
        document.getElementById('imggg7').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 6) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
    else if (index == 8) {
        document.getElementById('container').style.display = 'none'
        document.getElementById("imgg8").style.display = "block"
        document.getElementById('imggg8').style.width = "50%"
        document.getElementById('imggg8').style.borderRadius = "30px"
        for (var i = 0; i < slides.length; i++) {
            if (i == 7) {
                continue;
            }
            else {
                slides[i].style.display = "none"
            }
        }
    }
}
//function ran when the right or left arrow is clicked
function moveSlide(num) {
    //checks if the user is trying to go to the next picture even if they are on the last slide, meaning it will take them back to the 1st picture.
    if (globalIndex + num > 8) {
        currentPicture(1)
    }
    //checks if the user is trying to go to the previous picture even though there is no picture in the array present, meaning it will then take them to the 8th (last) picture
    else if (globalIndex + num == 0) {
        currentPicture(8)
    }
    //else it runs the normal loop and moves on the next or previous image
    else {
        currentPicture(globalIndex + num)
    }
}