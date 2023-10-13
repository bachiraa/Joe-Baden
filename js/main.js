// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll =function () {
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}

// nav Hide
let navBar =document.querySelectorAll(".nac-link");
let navCollpse = document.querySelector(".navbar-collapse.collapse");
navBar.forEsch(function(a){
    a.addEvenListener("click", function(){
        navCollapse.classList.remove("show")
    })
})

