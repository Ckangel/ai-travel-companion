fetch("public/data/itineraries.json")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("mainContent");
    data.forEach(day => {
    const section = document.createElement("section");
    section.innerHTML = `<h2>${day.day} - ${day.location}</h2><ul>` +
        day.activities.map(a => `<li>${a}</li>`).join("") +
        "</ul>";
    container.appendChild(section);
    });
});
