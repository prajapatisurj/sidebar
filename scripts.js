function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const toggleIcon = document.getElementById("toggleIcon");
    // Toggle the 'hidden' class
    sidebar.classList.toggle("hidden");
    // Update the arrow direction
    if (sidebar.classList.contains("hidden")) {
        toggleIcon.textContent = "➤"; // Right arrow
    } else {
        toggleIcon.textContent = "⬅"; // Left arrow
    }
}
