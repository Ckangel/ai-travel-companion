document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Set the last modified date
    const lastModified = new Date(document.lastModified);
    document.getElementById("last-modified").textContent = lastModified.toLocaleString();
});
