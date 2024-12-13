document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const weatherResult = document.getElementById('weather-result');
            if (this.status === 200) {
                const response = JSON.parse(this.response);
                const temperature = response.main.temp; // Assuming the response contains main and temp
                const humidity = response.main.humidity;
                const Max_temprature_today = response.main.temp_max;
                const description = response.weather[0].description; // Assuming weather data is structured this way
                const icon = response.weather[0].icon;
                weatherResult.innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                    <p>Temperature: ${temperature} °F</p>
                    <p>Humidity: ${temperature} %</p>
                    <p>Description: ${description}</p>
                    <p>Highest Temprature Today: ${Max_temprature_today}°F</p>
                `;
                console.log(response)
            } else {
                weatherResult.innerHTML = `<p>Could not fetch weather data. Please try again.</p>`;
            }
        }
    });

    xhr.open('GET', `https://open-weather13.p.rapidapi.com/city/${city}/EN`);
    xhr.setRequestHeader('x-rapidapi-key', '06f9f9c9cbmsh0d6b3b7e4adf612p1e6eefjsn36bb811a60aa'); // Replace with your actual API key
    xhr.setRequestHeader('x-rapidapi-host', 'open-weather13.p.rapidapi.com');

    xhr.send();
});
