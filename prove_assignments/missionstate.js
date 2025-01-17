const themeSelector = document.querySelector("#theme-select");
const footer = document.querySelector("footer");
console.log("Beginning works");

themeSelector.addEventListener('change', changeTheme);
    

function changeTheme() {
    const selectedTheme = themeSelector.value;
    console.log("Function works");
    

    if (selectedTheme === "light") {
        const logoImage = document.querySelector("#logo");
        logoImage.setAttribute("src", "byui-logo_blue.webp");
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        console.log("Light theme works");
    }
    else {
        const logoImage = document.querySelector("#logo");
        logoImage.setAttribute("src", "byui-logo_white.png");
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        console.log("Dark theme works");
    }
}; 


