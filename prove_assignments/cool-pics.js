const menuShow = document.querySelector(".button");

function showMenu() {
    
    const menuButton = document.querySelector(".nav");
    menuButton.classList.toggle("hide");
}

function handleResize() {
    const menuButton = document.querySelector(".nav");
    if (window.innerWidth > 1200) {
        menuButton.classList.remove("hide");
    } else{
        menuButton.classList.add("hide");
    }  
}


menuShow.addEventListener('click', showMenu);
handleResize();
window.addEventListener("resize", handleResize);