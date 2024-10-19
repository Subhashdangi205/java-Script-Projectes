let elem = document.querySelectorAll(".elem")
// let elemImage = document.querySelector(".elem img")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function () {
        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave",function () {
             val.style.backgroundcolor = "transparent";
             val.childNodes[3].style.opacity = 0
            
    });
    val.addEventListener("mousemove",function (dets) {
        val.style.backgroundcolor = "transparent";
        val.childNodes[3].style.left = dets.x+ "px"
        val.childNodes[3].style.top = dets.y+ "px"
       
});
});
