function lift_section_1() {
    elmnt = document.querySelector(".section-1");
    rect = elmnt.getBoundingClientRect();
    if (rect.bottom <= (window.innerHeight + 2)) {
        elmnt.style.transform = "translateY(-110%)";
    }
}

window.addEventListener("scroll", lift_section_1);