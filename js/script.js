const open_share = document.querySelector(".share-button.open");
const close_share = document.querySelector(".share-button.close");
const icon_change = document.querySelector(".share-button.open svg path")
const share = document.querySelector(".share");

open_share.addEventListener("click",()=>{
    share.classList.toggle("active");
    open_share.classList.toggle("active");
    icon_change.classList.toggle("active");
    
});
close_share.addEventListener("click",()=>{
    share.classList.remove("active");
    open_share.classList.remove("active");
    icon_change.classList.remove("active");
});