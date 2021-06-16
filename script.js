/*
Zigrocoin Website Scripts
Created by Patryk Dubaniewicz 
*/

/* Navbar menu expansion */
const toggleButton = document.getElementsByClassName('menu-button')[0]
const navbarlinks = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

const ScrollToFAQ = document.querySelector("#faq");
const ScrollToWhatis = document.querySelector("#what");
const ScrollToHowTo = document.querySelector("#howto");
const ScrollToHowToButton = document.querySelector("#howto_button");

ScrollToFAQ.addEventListener('click', function() {
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: "smooth"
    });
});

ScrollToWhatis.addEventListener('click', function() {
    window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth"
    });
});

ScrollToHowTo.addEventListener('click', function() {
    window.scrollTo({
        top: 900,
        left: 0,
        behavior: "smooth"
    });
});

ScrollToHowToButton.addEventListener('click', function() {
    window.scrollTo({
        top: 900,
        left: 0,
        behavior: "smooth"
    });
});






