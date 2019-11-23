/* should i declare these function specific variables 
outside or inside function */

var accord = document.getElementsByClassName("accord");
var activeAccord = document.getElementsByClassName("active");
var activeContent = document.getElementsByClassName("showing");

function show(e){
        e.target.nextElementSibling.classList.add("showing");
        e.target.classList.add("active"); 
}

function hide(e){
    e.target.classList.remove("active");
    e.target.nextElementSibling.classList.remove("showing"); 
}
function showContent(e){
   
    if(e.target.nextElementSibling!== activeContent[0]){
        if(activeContent[0]){
            activeContent[0].classList.remove("showing"); 
            activeAccord[0].classList.remove("active");  
        }
        show(e);
    }
    else{
        hide(e);
    }
}

// how to implement this ?

document.addEventListener("click" , (e)=>{
    console.log(e.target);
    if((!e.target.className)&& activeAccord[0]){
        activeContent[0].classList.remove("showing"); 
        activeAccord[0].classList.remove("active"); 
    }
});
