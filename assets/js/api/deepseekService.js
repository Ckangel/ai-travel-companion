export default class DeepSeekService {
  constructor(apiKey) {
    this.BASE_URL = 'https://api.deepseek.com/v1';
    this.API_KEY = apiKey;
  }

  async _fetch(endpoint, body) {
    const response = await fetch(`${this.BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return response.json();
  }

  // Flight API endpoint
  async searchFlights(params) {
    return this._fetch('/travel/flights', params);
  }

  // Chat endpoint
  async getTravelAdvice(query) {
    return this._fetch('/chat', {
      messages: [{ role: 'user', content: query }]
    });
  }
}

