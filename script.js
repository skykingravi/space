let menuToggle = document.getElementById("menutoggle");
// let body = document.getElementById("body");

menuToggle.addEventListener('click', () => {
    let menuBar = document.getElementById("menubar");
    if (menuToggle.checked == true)
    {
        menuBar.style.transform = "translateY(0%)";
        // body.style.overflow = "hidden";
    }
    else
    {
        menuBar.style.transform = "translateY(100%)";
        // body.style.overflow = "scroll";
    }
})

let formOpen = document.getElementById("formopen");
let contactForm = document.getElementById("contactform");
formOpen.addEventListener('click', () => {
    if (contactForm.style.transform == "translateY(0%)")
    {
        contactForm.style.transform = "translateY(100%)";
        // body.style.overflow = "scroll";
    }
    else
    {
        contactForm.style.transform = "translateY(0%)";
        // body.style.overflow = "hidden";
    }
})

let formClose = document.getElementById("formclose");
formClose.addEventListener('click', () => {
    if (contactForm.style.transform == "translateY(0%)")
    {
        contactForm.style.transform = "translateY(100%)";
        // body.style.overflow = "scroll";
    }
})