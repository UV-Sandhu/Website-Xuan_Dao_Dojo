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
        showMenu();
        show = false;
    }
    else{
        hideMenu();
        show = true;
    }
}