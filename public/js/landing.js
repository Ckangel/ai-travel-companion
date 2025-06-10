const itineraryOutput = document.getElementById("itineraryOutput");

document.getElementById("generatePlan").addEventListener("click", () => {
const type = document.getElementById("tripType").value;
const region = document.getElementById("region").value;
generateItinerary(region, type);
});

function generateItinerary(region, type) {
  // Simulated API response
const demoData = {
    africa: {
    culture: ["Visit Cape Coast Castle", "Explore Marrakech souks"],
    nature: ["Safari in Serengeti", "Hike Table Mountain"]
    },
    europe: {
    culture: ["Tour the Louvre", "Walk Rome’s ruins"],
    nature: ["Hike the Alps", "Sail the Norwegian fjords"]
    },
    asia: {
    culture: ["Visit Kyoto temples", "Explore Angkor Wat"],
    nature: ["Trek in Nepal", "Swim in Ha Long Bay"]
    },
    americas: {
    culture: ["Explore Machu Picchu", "Visit NYC museums"],
    nature: ["Hike Patagonia", "Snorkel in Belize"]
    }
};

const suggestions = demoData[region]?.[type] || ["No data available"];
itineraryOutput.innerHTML = suggestions.map(item => `<p>• ${item}</p>`).join("");
}
