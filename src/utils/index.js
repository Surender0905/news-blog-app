import axios from "axios";

const fetchWeather = async (latitude, longitude) => {
    const apiKey = "1c13d0d8eb2fdd26d81dacda36b9d628"; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const fetchCityName = async (latitude, longitude) => {
    const apiKey = "1c13d0d8eb2fdd26d81dacda36b9d628"; // Same API key for reverse geocoding
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data; // Get city name
    } catch (error) {
        console.log(error);
    }
};

export { fetchWeather, fetchCityName };
