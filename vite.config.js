import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "ai-travel-companion/",

 build: {
  outDir: "../dist",
  rollupOptions: {
    input: {
      home: resolve(__dirname, "ai-travel-companion/index.html"),
      itinerary: resolve(__dirname, "ai-travel-companion/#itinerary.html"),
      weather: resolve(__dirname, "ai-travel-companion/#weather/index.html"),
      flight: resolve(__dirname, "ai-travel-companion/#flight/index.html"),
      hotel: resolve(__dirname, "ai-travel-companion/#hotel/index.html"),
      car: resolve(__dirname, "ai-travel-companion/#car/index.html"),      
      checkout: resolve(__dirname, "ai-travel-companion/#checkout/index.html",
      ),

    },
  },
},
});
