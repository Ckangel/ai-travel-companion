const axios = require('axios');
require('dotenv').config();

const getAmadeusToken = async () => {
  try {
    const response = await axios.post(
      'https://test.api.amadeus.com/v1/security/oauth2/token',
      grant_type=client_credentials&client_id=${process.env.AMADEUS_API_KEY}&client_secret=${process.env.AMADEUS_API_SECRET},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Failed to get Amadeus token:", error.response?.data);
    return null;
  }
};

module.exports = getAmadeusToken;