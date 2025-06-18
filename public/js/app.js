import { fetchWeatherData } from './api.js';
import { generateItinerary } from './itinerary.js';
import { initChat } from './chat.js';
import { searchPlaces } from './api.js';

// DOM Elements
const startJourneyBtn = document.getElementById('startJourney');
const generatePlanBtn = document.getElementById('generatePlan');
const getWeatherBtn = document.getElementById('getWeather');
const searchBtn = document.getElementById('searchBtn');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('last-modified');
const mapRegions = document.querySelectorAll('.map-region');

// Initialize the application
function initApp() {
    // Set current year and last modified date
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
    
    // Event Listeners
    startJourneyBtn.addEventListener('click', scrollToPlanning);
    generatePlanBtn.addEventListener('click', handleGeneratePlan);
    getWeatherBtn.addEventListener('click', handleWeatherSearch);
    searchBtn.addEventListener('click', handlePlaceSearch);
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Initialize map region clicks
    mapRegions.forEach(region => {
        region.addEventListener('click', () => {
            const regionId = region.id;
            document.getElementById('region').value = regionId;
            handleGeneratePlan();
        });
    });
    // Add animation delay to image cards
function initImageGrid() {
    const imageCards = document.querySelectorAll('.image-card');
    
    imageCards.forEach((card, index) => {
        // Add delay based on position
        card.style.transitionDelay = ${index * 0.1}s;
        
        // Add click handler for mobile
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
}

// Then call it in initApp()
function initApp() {
    // ... existing code ...
    initImageGrid();
    // ... rest of code ...
}
    
    // Initialize chat
    initChat();
    
    // Load default data
    loadDefaultData();
}

function scrollToPlanning() {
    document.querySelector('.trip-planning').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

async function handleGeneratePlan() {
    const tripType = document.getElementById('tripType').value;
    const region = document.getElementById('region').value;
    const destination = document.getElementById('destination').value;
    
    if (!tripType || !region) {
        alert('Please select both trip type and region');
        return;
    }
    
    try {
        // Generate itinerary based on selections
        const itinerary = await generateItinerary(tripType, region, destination);
        displayItinerary(itinerary);
        
        // Scroll to itinerary section
        document.getElementById('itinerary').scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        console.error('Error generating itinerary:', error);
        alert('Failed to generate itinerary. Please try again.');
    }
}

function displayItinerary(itinerary) {
    const itineraryOutput = document.getElementById('itineraryOutput');
    itineraryOutput.innerHTML = '';
    
    itinerary.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'day-plan box';
        
        const dayHeader = document.createElement('h3');
        dayHeader.className = 'subtitle';
        dayHeader.textContent = day.day;
        dayElement.appendChild(dayHeader);
        
        const activitiesList = document.createElement('div');
        
        day.activities.forEach(activity => {
            const activityElement = document.createElement('div');
            activityElement.className = 'activity';
            
            const timeSpan = document.createElement('span');
            timeSpan.className = 'activity-time';
            timeSpan.textContent = activity.time;
            
            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'activity-details';
            
            const title = document.createElement('h4');
            title.className = 'is-size-5';
            title.textContent = activity.title;
            
            const description = document.createElement('p');
            description.textContent = activity.description;
            
            detailsDiv.appendChild(title);
            detailsDiv.appendChild(description);
            
            activityElement.appendChild(timeSpan);
            activityElement.appendChild(detailsDiv);
            
            activitiesList.appendChild(activityElement);
        });
        
        dayElement.appendChild(activitiesList);
        itineraryOutput.appendChild(dayElement);
    });
}

async function handleWeatherSearch() {
    const location = document.getElementById('weatherLocation').value.trim();
    
    if (!location) {
        alert('Please enter a location');
        return;
    }
    
    try {
        const weatherData = await fetchWeatherData(location);
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching weather:', error);
        alert('Failed to fetch weather data. Please try again.');
    }
}

function displayWeather(weatherData) {
    const weatherResults = document.getElementById('weatherResults');
    
    weatherResults.innerHTML = `
        <div class="weather-header">
            <div>
                <h3 class="is-size-4">${weatherData.name}, ${weatherData.sys.country}</h3>
                <p>${new Date().toLocaleDateString()}</p>
            </div>
            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="${weatherData.weather[0].description}">
        </div>
        <div class="weather-temp">${Math.round(weatherData.main.temp)}°C</div>
        <p class="is-size-5">${weatherData.weather[0].main} (${weatherData.weather[0].description})</p>
        <div class="weather-details">
            <div class="weather-detail">
                <p><strong>Humidity</strong></p>
                <p>${weatherData.main.humidity}%</p>
            </div>
            <div class="weather-detail">
                <p><strong>Wind</strong></p>
                <p>${weatherData.wind.speed} m/s</p>
            </div>
            <div class="weather-detail">
                <p><strong>Pressure</strong></p>
                <p>${weatherData.main.pressure} hPa</p>
            </div>
        </div>
    `;
    
    weatherResults.classList.add('fade-in');
}

async function handlePlaceSearch() {
    const city = document.getElementById('cityInput').value.trim();
    
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    
    const loader = document.getElementById('loader');
    const placesList = document.getElementById('placesList');
    
    loader.classList.remove('hidden');
    placesList.innerHTML = '';
    
    try {
        const places = await searchPlaces(city);
        displayPlaces(places);
    } catch (error) {
        console.error('Error fetching places:', error);
        alert('Failed to fetch places. Please try again.');
    } finally {
        loader.classList.add('hidden');
    }
}

function displayPlaces(places) {
    const placesList = document.getElementById('placesList');
    
    places.forEach(place => {
        const placeCard = document.createElement('div');
        placeCard.className = 'column is-one-third';
        
        placeCard.innerHTML = `
            <div class="place-card">
                <img src="${place.images[0]}" alt="${place.name}" class="place-image" loading="lazy">
                <div class="place-content">
                    <h3 class="place-title">${place.name}</h3>
                    <p class="place-description">${place.description}</p>
                    <p class="place-address"><i class="fas fa-map-marker-alt"></i> ${place.address}</p>
                    <a href="${place.website}" target="_blank" class="place-website">Visit Website</a>
                </div>
            </div>
        `;
        
        placesList.appendChild(placeCard);
    });
}

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

function loadDefaultData() {
    // Set default values or load initial data if needed
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Initialize hotel search functionality
function initHotelSearch() {
    const searchHotelsBtn = document.getElementById('searchHotels');
    searchHotelsBtn.addEventListener('click', handleHotelSearch);
    
    // Set default dates
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    document.getElementById('checkInDate').valueAsDate = today;
    document.getElementById('checkOutDate').valueAsDate = tomorrow;
}

async function handleHotelSearch() {
    const location = document.getElementById('hotelLocation').value.trim();
    const checkIn = document.getElementById('checkInDate').value;
    const checkOut = document.getElementById('checkOutDate').value;
    const guests = document.getElementById('guests').value;
    
    if (!location || !checkIn || !checkOut) {
        alert('Please fill in all required fields');
        return;
    }
    
    const hotelLoader = document.getElementById('hotelLoader');
    const hotelResults = document.getElementById('hotelResults');
    
    hotelLoader.classList.remove('hidden');
    hotelResults.innerHTML = '';
    
    try {
        const hotels = await searchHotels(location, checkIn, checkOut, guests);
        displayHotels(hotels, checkIn, checkOut);
    } catch (error) {
        console.error('Error searching hotels:', error);
        alert('Failed to search hotels. Please try again.');
    } finally {
        hotelLoader.classList.add('hidden');
    }
}

function displayHotels(hotels, checkIn, checkOut) {
    const hotelResults = document.getElementById('hotelResults');
    const nights = getDaysBetween(checkIn, checkOut);
    
    hotels.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        
        hotelCard.innerHTML = `
            <div class="hotel-header">
                <h3 class="hotel-name">${hotel.name}</h3>
                <span class="hotel-rating">${hotel.rating}</span>
            </div>
            
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image" loading="lazy">
            
            <div class="hotel-price">
                ${hotel.price} <small>(${hotel.total} for ${nights} nights)</small>
            </div>
            
            <div class="hotel-amenities">
                ${hotel.amenities.map(amenity => <span class="hotel-amenity">${amenity}</span>).join('')}
            </div>
            
            <div class="columns">
                <div class="column">
                    <p><strong>Address:</strong> ${hotel.address}</p>
                    <p><strong>Check-in:</strong> ${hotel.checkIn}</p>
                    <p><strong>Check-out:</strong> ${hotel.checkOut}</p>
                </div>
                <div class="column has-text-right">
                    <button class="button is-primary book-hotel" data-id="${hotel.id}">Book Now</button>
                </div>
            </div>
        `;
        
        hotelResults.appendChild(hotelCard);
    });
    
    // Adding event listeners to book buttons
    document.querySelectorAll('.book-hotel').forEach(button => {
        button.addEventListener('click', (e) => {
            const hotelId = e.target.getAttribute('data-id');
            alert(Booking hotel with ID: ${hotelId}\nIn a real app, this would redirect to booking page.);
        });
    });
}

// Initialize flight search functionality
function initFlightSearch() {
    const searchFlightsBtn = document.getElementById('searchFlights');
    searchFlightsBtn.addEventListener('click', handleFlightSearch);
    
    // Set default date (tomorrow)
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    
    document.getElementById('departureDate').valueAsDate = tomorrow;
}

async function handleFlightSearch() {
    const from = document.getElementById('flightFrom').value.trim();
    const to = document.getElementById('flightTo').value.trim();
    const departDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const passengers = document.getElementById('passengers').value;
    const flightClass = document.getElementById('flightClass').value;
    
    if (!from || !to || !departDate) {
        alert('Please fill in all required fields');
        return;
    }
    
    const flightLoader = document.getElementById('flightLoader');
    const flightResults = document.getElementById('flightResults');
    
    flightLoader.classList.remove('hidden');
    flightResults.innerHTML = '';
    
    try {
        const flights = await searchFlightDeals(from, to, departDate, returnDate, passengers, flightClass);
        displayFlights(flights);
    } catch (error) {
        console.error('Error searching flights:', error);
        alert('Failed to search flights. Please try again.');
    } finally {
        flightLoader.classList.add('hidden');
    }
}

function displayFlights(flights) {
    const flightResults = document.getElementById('flightResults');
    
    if (flights.length === 0) {
        flightResults.innerHTML = '<div class="box">No flights found for your criteria.</div>';
        return;
    }
    
    flights.forEach(flight => {
        const flightCard = document.createElement('div');
        flightCard.className = 'flight-card';
        
        flightCard.innerHTML = `
            <div class="flight-header">
                <h3 class="flight-airline">${flight.airline} #${flight.flightNumber}</h3>
                <span class="flight-class">${flight.class}</span>
            </div>
            
            <div class="flight-times">
                <div class="flight-time">
                    <span>${flight.departure.time}</span>
                    <small>${flight.departure.airport}</small>
                </div>
                
                <div class="flight-duration">
                    <span>${flight.duration}</span>
                    <small>${flight.stops === 0 ? 'Nonstop' : ${flight.stops} stop${flight.stops > 1 ? 's' : ''}}</small>
                </div>
                
                <div class="flight-time">
                    <span>${flight.arrival.time}</span>
                    <small>${flight.arrival.airport}</small>
                </div>
            </div>
            
            <div class="flight-details">
                <span class="flight-detail">Aircraft: ${flight.aircraft}</span>
            </div>
            
            <div class="columns">
                <div class="column">
                    <div class="flight-price">${flight.price}</div>
                    <small>per passenger</small>
                </div>
                <div class="column has-text-right">
                    <button class="button is-primary book-flight" data-id="${flight.id}">Select Flight</button>
                </div>
            </div>
        `;
        
        flightResults.appendChild(flightCard);
    });
    
    // Add event listeners to book buttons
    document.querySelectorAll('.book-flight').forEach(button => {
        button.addEventListener('click', (e) => {
            const flightId = e.target.getAttribute('data-id');
            alert(Booking flight with ID: ${flightId}\nIn a real app, this would redirect to booking page.);
        });
    });
}

// Update initializations
function initApp() {
    // ... existing code ...
    
    // Initialize hotel and flight search
    initHotelSearch();
    initFlightSearch();
    
    // ... rest of existing code ...
}