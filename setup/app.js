let hamburger = document.getElementById("hamburger")
let sidebar = document.body.querySelector("#sidebar")
let closeButton=document.body.querySelector(".fa-xmark")


hamburger.addEventListener("click", function(){
if (sidebar.style.transform==="translate(-400px)"){
sidebar.style.transform="translate(00px)"} else{
  sidebar.style.transform="translate(-400px)"
}

})

closeButton.addEventListener("click", function(){
  sidebar.style.transform="translate(-400px)"
  
  })