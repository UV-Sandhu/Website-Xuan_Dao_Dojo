function lift_section_1() {
    const scrolled = window.scrollY;
    if (scrolled >= 40) {
        elmnt = document.querySelector(".section-1");
        elmnt.style.transform = "translateY(-110vh)";
    }
}

window.addEventListener("scroll", lift_section_1);