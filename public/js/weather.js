const apiKey = "cd1c4fab525641f3b8e11205250306";
const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${cd1c4fab525641f3b8e11205250306}&q=London`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerHTML = `
            <h3>${data.location.name}</h3>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
        `;
    })
    .catch(error => console.error("Error fetching weather data:", error));
