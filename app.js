      const navbar = document.querySelector('.fixed-top')
document.addEventListener("DOMContentLoaded", function() {

 const myFunction=()=>{
    if(window.scrollY>50){
       navbar.classList.add("bg-white");
    }
    else{
     navbar.classList.remove("bg-white");
    }
 }

 window.addEventListener("scroll", myFunction);
  

});

  

 
