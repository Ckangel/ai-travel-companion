const DEEPSEEK_API_KEY = 'sk-32286***********************84f1';
  const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1';

  export async function getDeepSeekTravelRecommendations(query) {
      const response = await fetch(`${DEEPSEEK_API_URL}/travel`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
          },
          body: JSON.stringify({
              query: query,
              max_results: 5,
              detail_level: 'extended'
          })
      });
      return await response.json();
  }

  export async function getDeepSeekPricingAnalysis(itinerary) {
      const response = await fetch(`${DEEPSEEK_API_URL}/pricing`, {
          method: 'POST',
          headers: { /* same as above */ },
          body: JSON.stringify(itinerary)
      });
      return await response.json();
  }

  const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;
// Typescript:
// import { WebServiceClient } from '@maxmind/geoip2-node';

// To use the GeoLite2 web service instead of the GeoIP2 web service, set
// the host to geolite.info, e.g.:
// new WebServiceClient('1234', 'licenseKey', {host: 'geolite.info'});
//
// To use the Sandbox GeoIP2 web service instead of the production GeoIP2
// web service, set the host to sandbox.maxmind.com, e.g.:
// new WebServiceClient('1234', 'licenseKey', {host: 'sandbox.maxmind.com'});
const client = new WebServiceClient('1234', 'licenseKey');

client.country('142.1.1.1').then(response => {
  console.log(response.country.isoCode); // 'CA'
});

const WebServiceClient = require('@maxmind/geoip2-node').WebServiceClient;
// Typescript:
// import { WebServiceClient } from '@maxmind/geoip2-node';

// To use the GeoLite2 web service instead of the GeoIP2 web service, set
// the host to geolite.info, e.g.:
// new WebServiceClient('1234', 'licenseKey', {host: 'geolite.info'});
const client = new WebServiceClient('1234', 'licenseKey');

client.city('142.1.1.1').then(response => {
  console.log(response.country.isoCode); // 'CA'
  console.log(response.postal.code); // 'M5S'
});

const Reader = require('@maxmind/geoip2-node').Reader;
// Typescript:
// import { Reader } from '@maxmind/geoip2-node';

const options = {
  // you can use options like `cache` or `watchForUpdates`
};

Reader.open('/usr/local/database.mmdb', options).then(reader => {
  console.log(reader.country('1.1.1.1'));
});

  ```



// API Keys (In a real app, these would be secured server-side)
const apiKey = "cd1c4fab525641f3b8e11205250306";
const WEATHER_API_KEY = 'OPENWEATHER_API_KEY'; // Replace with actual key
const PLACES_API_KEY = 'PLACES_API_KEY'; // Replace with actual key

// Base URLs
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';
const PLACES_API_URL = 'https://api.example.com/places'; // Replace with actual API

// Fetch weather data from OpenWeather API
export async function fetchWeatherData(location) {
    try {
        const response = await fetch(`${WEATHER_API_URL}?q=${encodeURIComponent(location)}&units=metric&appid=${WEATHER_API_KEY}`);
        
        if (!response.ok) {
            throw new Error(`Weather API error: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

// Search for places in a given city
export async function searchPlaces(city) {
    try {
        // In a real app, this would call an actual API
        // For demo purposes, I will use mock data based on the city
        
        // Mock data - in a real app, I will replace with actual API call
        const mockPlaces = {
            'accra': [
                {
                    images: ['images/kakum.jpg', 'images/kakum2.jpg'],
                    name: 'Kakum National Park',
                    description: 'A tropical rainforest reserve with a famous canopy walkway.',
                    address: 'Cape Coast, Central Region, Ghana',
                    website: 'https://www.kakumnationalpark.info'
                },
                {
                    images: ['images/elmina.jpg', 'images/elmina2.jpg'],
                    name: 'Elmina Castle',
                    description: 'UNESCO World Heritage Site from the trans-Atlantic slave trade era.',
                    address: 'Elmina, Central Region, Ghana',
                    website: 'https://www.ghanamuseums.org'
                }
            ],
            'default': [
                {
                    images: ['images/eiffel.jpg'],
                    name: 'Eiffel Tower',
                    description: 'Iconic iron tower in Paris, France.',
                    address: 'Champ de Mars, 5 Avenue Anatole France, Paris',
                    website: 'https://www.toureiffel.paris'
                },
                {
                    images: ['images/statue-liberty.jpg'],
                    name: 'Statue of Liberty',
                    description: 'Colossal neoclassical sculpture on Liberty Island.',
                    address: 'New York, NY 10004, USA',
                    website: 'https://www.nps.gov/stli'
                }
            ]
        };
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Return mock data based on city or default
        return mockPlaces[city.toLowerCase()] || mockPlaces.default;
    } catch (error) {
        console.error('Error fetching places:', error);
        throw error;
    }
}

// Function to fetch flight data (mock implementation)
export async function fetchFlights(from, to, date) {
    // In a real app, this would call an actual flight API
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return mock data
        return [
            {
                airline: 'Delta Airlines',
                flightNumber: 'DL123',
                departure: '08:00',
                arrival: '11:30',
                price: '$450',
                duration: '3h 30m'
            },
            {
                airline: 'United Airlines',
                flightNumber: 'UA456',
                departure: '12:15',
                arrival: '15:45',
                price: '$390',
                duration: '3h 30m'
            }
        ];
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}

// Function to fetch hotels (mock implementation)
export async function fetchHotels(location, checkIn, checkOut) {
    // In a real app, this would call an actual hotel API
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return mock data
        return [
            {
                name: 'Grand Hotel',
                rating: '5 stars',
                price: '$250/night',
                amenities: ['Pool', 'Spa', 'Restaurant'],
                image: 'images/hotel1.jpg'
            },
            {
                name: 'Seaside Resort',
                rating: '4 stars',
                price: '$180/night',
                amenities: ['Beach Access', 'Free Breakfast', 'Gym'],
                image: 'images/hotel2.jpg'
            }
        ];
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
}

// Hotel API functions
export async function searchHotels(location, checkIn, checkOut, guests) {
    // In a real app, this would call an actual hotel API like Amadeus, Booking.com, etc.
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Return mock data
        return [
            {
                id: 1,
                name: ${location} Grand Hotel,
                rating: "5 stars",
                price: "$250/night",
                total: $${250 * getDaysBetween(checkIn, checkOut)},
                image: "images/hotel1.jpg",
                amenities: ["Free WiFi", "Pool", "Spa", "Restaurant", "Fitness Center"],
                address: "123 Main Street, " + location,
                checkIn: "3:00 PM",
                checkOut: "11:00 AM"
            },
            {
                id: 2,
                name: ${location} Plaza,
                rating: "4 stars",
                price: "$180/night",
                total: $${180 * getDaysBetween(checkIn, checkOut)},
                image: "images/hotel2.jpg",
                amenities: ["Free WiFi", "Breakfast Included", "Business Center", "Bar"],
                address: "456 Central Avenue, " + location,
                checkIn: "2:00 PM",
                checkOut: "12:00 PM"
            },
            {
                id: 3,
                name: ${location} Boutique Hotel,
                rating: "4.5 stars",
                price: "$210/night",
                total: $${210 * getDaysBetween(checkIn, checkOut)},
                image: "images/hotel3.jpg",
                amenities: ["Free WiFi", "Rooftop Terrace", "Concierge", "Pet Friendly"],
                address: "789 Riverside Drive, " + location,
                checkIn: "4:00 PM",
                checkOut: "11:00 AM"
            }
        ];
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
}

// Flight API functions
export async function searchFlightDeals(from, to, departDate, returnDate, passengers, flightClass) {
    // In a real app, this would call an actual flight API like Amadeus, Skyscanner, etc.
    try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Return mock data
        const flights = [
            {
                id: 1,
                airline: "Global Airlines",
                flightNumber: "GA 123",
                departure: {
                    time: "08:00 AM",
                    airport: ${from} International (${getAirportCode(from)})
                },
                arrival: {
                    time: "11:30 AM",
                    airport: ${to} International (${getAirportCode(to)})
                },
                duration: "3h 30m",
                price: $${flightClass === 'economy' ? 450 : flightClass === 'premium' ? 650 : flightClass === 'business' ? 1200 : 2000},
                class: capitalizeWords(flightClass),
                stops: 0,
                aircraft: "Boeing 787"
            },
            {
                id: 2,
                airline: "Oceanic Airways",
                flightNumber: "OA 456",
                departure: {
                    time: "12:15 PM",
                    airport: ${from} International (${getAirportCode(from)})
                },
                arrival: {
                    time: "03:45 PM",
                    airport: ${to} International (${getAirportCode(to)})
                },
                duration: "3h 30m",
                price: $${flightClass === 'economy' ? 390 : flightClass === 'premium' ? 590 : flightClass === 'business' ? 1100 : 1800},
                class: capitalizeWords(flightClass),
                stops: 1,
                aircraft: "Airbus A350"
            }
        ];
        
        // Add return flights if return date is specified
        if (returnDate) {
            flights.push(
                {
                    id: 3,
                    airline: "Global Airlines",
                    flightNumber: "GA 124",
                    departure: {
                        time: "09:00 AM",
                        airport: ${to} International (${getAirportCode(to)})
                    },
                    arrival: {
                        time: "12:30 PM",
                        airport: ${from} International (${getAirportCode(from)})
                    },
                    duration: "3h 30m",
                    price: $${flightClass === 'economy' ? 450 : flightClass === 'premium' ? 650 : flightClass === 'business' ? 1200 : 2000},
                    class: capitalizeWords(flightClass),
                    stops: 0,
                    aircraft: "Boeing 787"
                }
            );
        }
        
        return flights;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
}

// Helper function for mock airport codes
function getAirportCode(city) {
    const codes = {
        'new york': 'JFK',
        'london': 'LHR',
        'tokyo': 'NRT',
        'paris': 'CDG',
        'dubai': 'DXB',
        'los angeles': 'LAX',
        'accra': 'ACC',
        'default': 'INT'
    };
    
    return codes[city.toLowerCase()] || codes.default;
}