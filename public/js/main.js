document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("App loaded");
});

document.getElementById("worldMap").addEventListener("load", () => {
  const svgDoc = document.getElementById("worldMap").contentDocument;
  const countries = svgDoc.querySelectorAll("path");

  countries.forEach(country => {
    country.addEventListener("click", () => {
      alert(`You clicked on ${country.id}`);
      // You can redirect or fetch data here
    });
  });
});

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

