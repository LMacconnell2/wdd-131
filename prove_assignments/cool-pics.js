const menuShow = document.querySelector(".button");
const gallery = document.querySelector(".images");
const body = document.querySelector("body");



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

function openViewerThing(event) {
    const clickedElement = event.target;
    let image = event.target.src;
    let alt = event.target.alt;
    let pic = image.replace("-sm.jpeg", "-full.jpeg");
    openViewer(pic, alt);
}

function openViewer(pic, alt) {
    body.insertAdjacentHTML("afterbegin", `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`);
    const x = document.querySelector(".close-viewer");
    x.addEventListener("click", closeViewer);
}

function closeViewer() {
    const removeViewer = document.querySelector(".viewer");
    removeViewer.remove()
}


menuShow.addEventListener('click', showMenu);
handleResize();
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", openViewerThing);


