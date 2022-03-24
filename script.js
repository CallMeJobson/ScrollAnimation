const content = document.querySelectorAll(".box")
window.addEventListener("scroll", CheckBox)

CheckBox();

function CheckBox(){
    let triggerBottom = window.innerHeight / 5 *4

    content.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom){
            box.classList.add("show")
        }else{
            box.classList.remove("show")
        }
    })
}