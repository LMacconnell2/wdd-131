threads = [
    {
        threadId: 0,
        author: "Logan MacConnell",
        publish: "2/11/2025",
        title: "How to Animate Steam Locomotive Drive Wheels",
        desc: "I have been asked numerous times to help people regarding issues with animating...",
        link: "",
        category: "Animation"
    },
    {
        threadId: 1,
        author: "Logan MacConnell",
        publish: "2/12/2025",
        title: "How to Bake Textures in Blender",
        desc: "Baking textures is not at all like makeing cookies at home, instead it involves applying...",
        link: "",
        category: "Texturing"
    },
    {
        threadId: 2,
        author: "Logan MacConnell",
        publish: "2/13/2025",
        title: "Creating Spoked driver wheels in Blender",
        desc: "Creating spoked drive wheels is not for the faint of heart, in order to accomplish it, be prepared...",
        link: "",
        category: "Modeling"
    },
    {
        threadId: 3,
        author: "Logan MacConnell",
        publish: "2/10/2025",
        title: "How to export a mesh from Blender",
        desc: "While .im used to be the standard for exportation, the game now uses a .fbx filetype which is far more robust...",
        link: "",
        category: "Add-ons"
    },
    {
        threadId: 4,
        author: "Logan MacConnell",
        publish: "2/21/2025",
        title: "Using an Ambient Occlusion map to create textures",
        desc: "Fortunately, you don't need fancy software to create textures, with juse a baked AO map you can...",
        link: "",
        category: "Texturing"
    }
]



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

function getSearchParams() {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search") || "";
    const categories = params.get("categories") ? params.get("categories").split(",") : [];

    console.log("Search Query:", searchQuery);
    console.log("Categories:", categories);

    filter(searchQuery, categories);
}

function filter(searchQuery, categories) {
    const filteredList = threads.filter(thread =>
        thread.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (categories.length === 0 || categories.includes(thread.category))
    );

    const sortedList = filteredList.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );

    console.log(sortedList);

    threadContainer.innerHTML = "";
    sortedList.forEach((thread) => {
        threadContainer.insertAdjacentHTML("beforeend", `
            <section class="thread-card">
                <h3>${thread.title}</h3>
                <div class="thread-card-description">
                    <p>${thread.desc}</p>
                    <a href="${thread.link}">Read More</a>
                </div>
                <div class="thread-card-info">
                    <p>Author: ${thread.author}</p>
                    <p>Posted: ${thread.publish}</p>
                </div>
            </section>
        `);
    });
}

const hamburgerMenu = document.querySelector("#hamburger");
const searchButton = document.querySelector(".searchButton");
const categoryAnimation = document.querySelector("#animation");
const categoryModeling = document.querySelector("#modeling");
const categoryUvs = document.querySelector("#uvs");
const categoryTextures = document.querySelector("#texturing");
const categoryAddons = document.querySelector("#addons");
const categoryRecent = document.querySelector("#recent");

const threadContainer = document.querySelector(".threads");

handleResize();
getSearchParams();
window.addEventListener("resize", handleResize);
hamburgerMenu.addEventListener("click", showMainMenu);
searchButton.addEventListener("click", searchHandler);