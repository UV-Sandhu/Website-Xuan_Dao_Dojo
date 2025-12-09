function hideMenu(){
    const optionsMenu = document.querySelector("div.options");
    optionsMenu.style.transform = "translate(100vw)";
}
function showMenu(){
    const optionsMenu = document.querySelector("div.options");
    optionsMenu.style.transform = "translate(calc(100vw - 100%))";
}

let show = true;

function menuClicked(){
    if (show===true){
        document.querySelector("div.menu").style.transform = "rotate(180deg)";
        showMenu();
        show = false;
    }
    else{
        document.querySelector("div.menu").style.transform = "rotate(0deg)";
        hideMenu();
        show = true;
    }
}