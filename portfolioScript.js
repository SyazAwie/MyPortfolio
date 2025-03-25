window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    let body = document.body;
    
    if (window.scrollY > 100) { // Change 100px based on when you want the nav to stick
        nav.classList.add("fixed");
        body.classList.add("scrolled");
    } else {
        nav.classList.remove("fixed");
        body.classList.remove("scrolled");
    }
});
