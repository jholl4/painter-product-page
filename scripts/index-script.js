// select all of the images in the options class
let images = document.querySelectorAll(".options img");

// target element to change the source to be the same as the image clicked
let targetElement = document.getElementById("product-image");

// add a listener to each option image
images.forEach((img) => {
    img.addEventListener("click", function() {
        // clone the clicked image
        let imgSrc = img.cloneNode(true);
        // clear the target's inner HTML
        targetElement.innerHTML = "";
        // append the cloned image to the target
        targetElement.appendChild(imgSrc);
    })
})