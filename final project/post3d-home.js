
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

function searchHandler(event) {
    event.preventDefault();
    let categoryList = [];
    if (categoryAnimation.checked) categoryList.push("Animation");
    if (categoryModeling.checked) categoryList.push("Modeling");
    if (categoryUvs.checked) categoryList.push("Uvs");
    if (categoryTextures.checked) categoryList.push("Texturing");
    if (categoryAddons.checked) categoryList.push("Add-ons");
    if (categoryRecent.checked) categoryList.push("Recent");
    console.log(categoryList)
    const searchValue = document.getElementById("searchInput").value;
    if (searchValue) {
        // Redirect to results page with search query as a URL parameter
        window.location.href = `results.html?search=${encodeURIComponent(searchValue)}&categories=${encodeURIComponent(categoryList.join(","))}`;
    }
}

const hamburgerMenu = document.querySelector("#hamburger");
const searchButton = document.querySelector(".searchButton");
const categoryAnimation = document.querySelector("#animation");
const categoryModeling = document.querySelector("#modeling");
const categoryUvs = document.querySelector("#uvs");
const categoryTextures = document.querySelector("#texturing");
const categoryAddons = document.querySelector("#addons");
const categoryRecent = document.querySelector("#recent");

handleResize();
window.addEventListener("resize", handleResize);
hamburgerMenu.addEventListener("click", showMainMenu);
searchButton.addEventListener("click", searchHandler);