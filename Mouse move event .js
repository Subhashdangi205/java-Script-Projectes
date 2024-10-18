 let main = document.querySelector("#main")

 let crsr = document.querySelector(".cursor")
 main.addEventListener("mousemove",function(dets){

    crsr.Style.left = dets.x+"px"
     crsr.Style.top = dets.y+"px"
 })
