function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleIcon = document.getElementById("toggleIcon");
    sidebar.classList.toggle("hidden");
    toggleIcon.textContent = sidebar.classList.contains("hidden") ? "➤" : "⬅";
}

function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => displayCards(data))
        .catch((error) => console.error("Error:", error));
}

function displayCards(data) {
    const container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear previous content if any

    data.slice(0, 10).forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const body = document.createElement("p");
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}

fetchData();