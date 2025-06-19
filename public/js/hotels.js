const axios = require('axios');
const getAmadeusToken = require('./auth');

const searchHotels = async (cityCode, checkIn, checkOut) => {
  const token = await getAmadeusToken();
  if (!token) throw new Error("Failed to authenticate with Amadeus.");

  try {
    const response = await axios.get(
      'https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city',
      {
        headers: { Authorization: Bearer ${token} },
        params: {
          cityCode,
          checkInDate: checkIn,
          checkOutDate: checkOut,
        },
      }
    );
    return response.data.data; // List of hotels
  } catch (error) {
    console.error("Hotel search failed:", error.response?.data);
    return [];
  }
};

// Example usage:
searchHotels('PAR', '2025-07-01', '2025-07-10').then(hotels => {
  console.log("Hotels in Paris:", hotels);
});