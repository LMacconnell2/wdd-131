const newP = document.createElement("p");
newP.textContent = "Text Added With JavaScript.";
document.body.append(newP);

const newImg = document.createElement("img")
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "A fill in photo");
document.body.append(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.append(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added with JavaScript</p>";
document.body.append(newSection);