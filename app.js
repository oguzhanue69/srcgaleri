const boxes = document.querySelectorAll(".box")


window.addEventListener("scroll",checkboxes)

checkboxes()
function checkboxes(){

    const bottom = (window.innerHeight/6)*4

    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top

    if(boxTop < bottom){
        box.classList.add("show")
    }else{
        box.classList.remove("show")
    }   

    })
}