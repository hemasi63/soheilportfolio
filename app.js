// $(document).ready(function() {
//     $(window).scroll(function() {
//       if ($(document).scrollTop() > 50) {
//         $(".fixed-top").addClass("bg-white");
//       } else {
//         $(".fixed-top").removeClass("bg-white");
//       }
//     });
//   });

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