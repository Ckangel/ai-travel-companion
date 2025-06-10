const apiKey = "YOUR_OPENTRIPMAP_API_KEY";

document.getElementById("searchBtn").addEventListener("click", () => {
const city = document.getElementById("cityInput").value;
if (!city) return;

document.getElementById("loader").classList.remove("hidden");
document.getElementById("placesList").innerHTML = "";

fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(loc => {
    return fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${loc.lon}&lat=${loc.lat}&rate=2&format=json&limit=5&apikey=${apiKey}`);
    })
    .then(res => res.json())
    .then(places => {
    const list = document.getElementById("placesList");
    places.forEach(place => {
        const item = document.createElement("div");
        item.innerHTML = `<h3>${place.name}</h3><p>${place.kinds}</p>`;
        list.appendChild(item);
    });
    })
    .catch(err => {
    console.error("OpenTripMap error:", err);
    document.getElementById("placesList").innerText = "Failed to load places.";
    })
    .finally(() => {
    document.getElementById("loader").classList.add("hidden");
    });
});

