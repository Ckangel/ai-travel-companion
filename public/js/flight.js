const axios = require('axios');
const getAmadeusToken = require('./auth');

const searchFlights = async (origin, destination, date) => {
  const token = await getAmadeusToken();
  if (!token) throw new Error("Failed to authenticate with Amadeus.");

  try {
    const response = await axios.get(
      'https://test.api.amadeus.com/v2/shopping/flight-offers',
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          originLocationCode: origin,
          destinationLocationCode: destination,
          departureDate: date,
          adults: 1,
        },
      }
    );
    return response.data.data; // Array of flight offers
  } catch (error) {
    console.error("Flight search failed:", error.response?.data);
    return [];
  }
};

// Example usage:
searchFlights('NYC', 'LON', '2025-07-01').then(flights => {
  console.log("Found flights:", flights);
});


*Sample Response:*
json
[
  {
    "price": { "total": "450.00", "currency": "USD" },
    "itineraries": [
      {
        "segments": [
          {
            "departure": { "iataCode": "JFK", "at": "2025-07-01T08:00:00" },
            "arrival": { "iataCode": "LHR", "at": "2025-07-01T20:00:00" }
          }
        ]
      }
    ]
  }
]
---

