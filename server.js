require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.send("AI Travel Companion Server is Running...");
});

// Weather API Route
app.get("/weather", async (req, res) => {
    const { location } = req.query;
    if (!location) return res.status(400).json({ error: "Location is required" });

    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${cd1c4fab525641f3b8e11205250306}&q=${location}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// Google Maps Geocoding Route
app.get("/geocode", async (req, res) => {
    const { address } = req.query;
    if (!address) return res.status(400).json({ error: "Address is required" });

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${AIzaSyDIJ9XX2ZvRKCJcFRrl-lRanEtFUow4piM}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch geolocation data" });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const { searchFlights, searchHotels } = require('./amadeus');
require('dotenv').config();

const app = express();
app.use(express.json());

// Flight search endpoint
app.get('/api/flights', async (req, res) => {
  const { origin, destination, date } = req.query;
  const flights = await searchFlights(origin, destination, date);
  res.json(flights);
});

// Hotel search endpoint
app.get('/api/hotels', async (req, res) => {
  const { city, checkIn, checkOut } = req.query;
  const hotels = await searchHotels(city, checkIn, checkOut);
  res.json(hotels);
});

app.listen(3000, () => {
  console.log('Travel Companion API running on http://localhost:3000');
});

// Export the app for testing purposes
module.exports = app;
