export default class PlacesService {
  constructor() {
    this.API_KEY = import.meta.env.VITE_PLACES_API_KEY;
    this.BASE_URL = 'https://maps.googleapis.com/maps/api/place';
  }

  async findNearbyHotels(location) {
    const response = await fetch(
      `${this.BASE_URL}/nearbysearch/json?location=${location}&radius=5000&type=lodging&key=${this.API_KEY}`
    );
    return response.json();
  }
}
