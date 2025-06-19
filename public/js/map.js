<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="Overpass API 0.7.62.7 375dc00a">
<note>The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.</note>
<meta osm_base="2025-06-18T22:03:24Z"/>

  <bounds minlat="43.4500000" minlon="-22.4100000" maxlat="58.3600000" maxlon="22.2400000"/>

<remark> runtime error: open64: 12 Cannot allocate memory /srv/overpass/db/nodes.bin File_Blocks::read_block::4 </remark>

</osm>

// JavaScript code for interactive map and itinerary generation
document.addEventListener("DOMContentLoaded", () => {
    const regions = document.querySelectorAll(".map-region");

    regions.forEach(region => {
        region.addEventListener("click", () => {
            // Remove active class from all regions
            regions.forEach(r => r.classList.remove("active"));

            // Add active class to clicked region
            region.classList.add("active");

            // Display selected region
            alert(`You selected: ${region.dataset.region}`);
        });
    });
});

document.querySelectorAll("#worldMap path").forEach(region => {
  region.addEventListener("click", () => {
    const regionId = region.id.toLowerCase();
    generateItinerary(regionId, "culture"); // Default trip type
  });
});

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 37.7749, lng: -122.4194 }, // Default location (San Francisco)
        zoom: 10,
    });
}

document.getElementById("searchBtn").addEventListener("click", () => {
    const location = document.getElementById("locationInput").value;
    searchLocation(location);
});

function searchLocation(location) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK") {
            map.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else {
            alert("Location not found!");
        }
    });
}

document.getElementById('searchBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (location) {
      // Here you would typically call a function to update the map with the new location
    console.log(`Searching for: ${location}`);
      // Example: updateMap(location);
    } else {
    alert('Please enter a destination.');
    }
});

  // Initialize the map (this is just a placeholder)
function initMap() {
    console.log('Map initialized');
}

window.onload = initMap;
