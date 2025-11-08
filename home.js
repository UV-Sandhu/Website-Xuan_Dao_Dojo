let lift = true;

// Checks if section 1 needs to be lifted and lifts it up
function lift_section_1() {
    elmnt = document.querySelector(".section-1");
    rect = elmnt.getBoundingClientRect();
    if (rect.bottom <= (window.innerHeight)) {
        document.querySelector("html").style.overflowY = "hidden";
        elmnt.style.transform = "translateY(-110%)";

        //scrolls to section-2 + 3 pixels after 2 seconds and enables scrolling
        // this was done to solve the problem of section-2 scrolling when scrolling section-1.
        setTimeout(()=>{window.scrollTo(0,40);document.querySelector("html").style.overflowY = "auto";}, 2000);

        lift = false;
        return;
    }
    else{
        return;
    }
}

// checks if section 1 needs to be pulled down and pulls it down
function pull_section_1(){
    elmnt = document.querySelector(".pulldown-indicator");
    rect = elmnt.getBoundingClientRect();
    if (rect.y == 0) {
        document.querySelector(".section-1").style.transform = "translateY(0px)";
        lift = true;
        return;
    }
    else{
        return;
    }
}

function moveSection1(params) {

    if (lift === true) {
        lift_section_1()
    }

    else if (lift === false){
        pull_section_1()
    }
}

window.addEventListener("scroll", moveSection1);