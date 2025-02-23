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

function displayError(errorMsg) {
    const errorContainer = document.querySelector(".form-message")
    errorContainer.innerHTML = `${errorMsg}`
}
    

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = "";

    if (!isValidEmail(document.querySelector("#emailInput").value)) {
        errorMsg = "Email is not valid. Please try again.";
        displayError(errorMsg);
        return; // Stop submission if there's an error
    }

    // If email is valid, submit the form
    document.querySelector("form").submit();
}



function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

const submitButton = document.querySelector("#submitButton");
const hamburgerMenu = document.querySelector("#hamburger");

handleResize();
window.addEventListener("resize", handleResize);
hamburgerMenu.addEventListener("click", showMainMenu);
submitButton.addEventListener("click", submitHandler);
