// Utility functions for the application

// Format date to YYYY-MM-DD
export function formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    
    return [year, month, day].join('-');
}

// Debounce function for limiting API calls
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Validate email address
export function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Format currency
export function formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(amount);
}

// Capitalize first letter of each word
export function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Get days between two dates
export function getDaysBetween(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Format duration in hours and minutes
export function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
}

export const storage = {
      saveSearchPreferences(prefs) {
          localStorage.setItem('travelPrefs', JSON.stringify({
              lastSearch: new Date().toISOString(),
              ...prefs
          }));
      },
      
      getSearchPreferences() {
          return JSON.parse(localStorage.getItem('travelPrefs')) || {};
      },
      
      saveFavoriteItinerary(itinerary) {
          const favorites = this.getFavorites();
          favorites.push(itinerary);
          localStorage.setItem('favoriteTrips', JSON.stringify(favorites));
      },
      
      getFavorites() {
          return JSON.parse(localStorage.getItem('favoriteTrips')) || [];
      },
      
      saveUserProfile(profile) {
          localStorage.setItem('userProfile', JSON.stringify(profile));
      }
  };
  
  // Usage examples:
  // Save when generating itinerary
  storage.saveSearchPreferences({
      tripType: document.getElementById('tripType').value,
      region: document.getElementById('region').value
  });

  // Load on init
  const prefs = storage.getSearchPreferences();
  if (prefs.tripType) {
      document.getElementById('tripType').value = prefs.tripType;
  }

  export function loadEnv() {
    // In production, these would be set on the server
    if (typeof process !== 'undefined' && process.env) {
        return process.env;
    }

    // For frontend development
    return {
        DEEPSEEK_API_KEY: import.meta.env.VITE_DEEPSEEK_API_KEY,
        OPENWEATHER_API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
        APP_ENV: import.meta.env.VITE_APP_ENV || 'development'
    };
}

export function configureClient() {
    return {
        apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
        enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true'
    };
}
```
