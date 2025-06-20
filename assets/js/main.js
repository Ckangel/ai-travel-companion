document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => document.querySelector("header").innerHTML = data);

  fetch("footer.html")
    .then(response => response.text())
    .then(data => document.querySelector("footer").innerHTML = data);
});

// Toggle the navigation menu on mobile view

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

import { initTheme } from './utils/theme';

// Initialize theme
initTheme();

// Add to existing initApp function
export function initApp() {
  // Existing code...
  
  // Add theme toggle event listener
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const newTheme = toggleTheme();
    // Optional: Dispatch custom event for other components
    document.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
  });
}
```

