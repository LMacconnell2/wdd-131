
function showMainMenu() {
    
    const menuButton = document.querySelector("#nav-bar");
    menuButton.classList.toggle("hide");
    console.log("Script running")
}

function handleResize() {
    const menuButton = document.querySelector("#nav-bar");
    if (window.innerWidth > 1000) {
        menuButton.classList.remove("hide");
    } else{
        menuButton.classList.add("hide");
    }  
}





const hamburgerMenu = document.querySelector("#hamburger");

handleResize();
window.addEventListener("resize", handleResize);
hamburgerMenu.addEventListener("click", showMainMenu)