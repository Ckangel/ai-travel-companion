document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");
});

<!-- header.ejs snippet -->
<div class="hamburger" onclick="toggleMenu()">☰</div>
<ul class="nav-links" id="navLinks">
  <li><a href="/">Home</a></li>
  <li><a href="/itinerary">Itinerary</a></li>
  <li><a href="/weather">Weather</a></li>
</ul>

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
