var images = ["assets/1.jpeg", "assets/2.jpeg", "assets/3.jpeg", "assets/4.jpeg", "assets/5.jpeg", "assets/6.jpeg"];
var index = 1;

document.getElementById("forward").addEventListener("click", function() {
    var nextImage = images[index];
    document.querySelector("img").setAttribute("src", nextImage);
    index++;
    if(index >= images.length){
        index = 0;
    }
});

document.getElementById("backward").addEventListener("click", function() {
    var nextImage = images[index];
    document.querySelector("img").setAttribute("src", nextImage);
    index--;
    if(index <0){
        index = images.length - 1;
    }
});