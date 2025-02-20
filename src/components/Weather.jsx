import { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import { fetchCityName } from "../utils";

const Weather = () => {
    const [data, setData] = useState({});
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");

    const search = async () => {
        setCity(location);
        const apiKey = "1c13d0d8eb2fdd26d81dacda36b9d628";

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

        try {
            const res = await axios.get(url);
            setData(res.data);
            setLocation("");
        } catch (error) {
            console.log(error);
            if (error?.response?.status === 404) {
                alert("City not found");
                setData({ notFound: true });
            } else {
                console.error("An error occurred while fetching data", error);
            }
        }
    };
    const handleGetWeatherCity = () => {
        if (navigator.geolocation) {
            // Get the user's current position
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchCityName(lat, lon)
                    .then((data) => {
                        setCity(data.name);
                        setData(data);
                        setLocation("");
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
        }
    };

    const handleChanges = (e) => {
        setLocation(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            search();
        }
    };

    //fetch default city
    useEffect(() => {
        const defaultCity = "Lucknow";
        setCity(defaultCity);

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=1c13d0d8eb2fdd26d81dacda36b9d628&units=metric`;

        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    //get weather icon switch case
    const getIcon = (weather) => {
        switch (weather) {
            case "Clouds":
                return <i className="bx bxs-cloud"></i>;
            case "Rain":
                return <i className="bx bxs-cloud-rain"></i>;
            case "Clear":
                return <i className="bx bxs-sun"></i>;
            case "Snow":
                return <i className="bx bxs-snow"></i>;
            case "Mist":
                return <i className="bx bxs-droplet"></i>;
            case "Thunderstorm":
                return <i className="bx bxs-cloud-lightning"></i>;
            case "Drizzle":
                return <i className="bx bxs-cloud-drizzle"></i>;

            default:
                return <i className="bx bxs-sun"></i>;
        }
    };

    return (
        <div className="weather">
            <div className="search">
                <div className="search-top">
                    <span
                        className="current-city"
                        title="Get Current Location"
                        onClick={handleGetWeatherCity}
                    >
                        <i className="fa-solid fa-location-dot"></i>
                    </span>
                    {city && <div className="location">{city}</div>}
                </div>
                <div className="search-location">
                    <input
                        type="text"
                        placeholder="Search Location"
                        onChange={handleChanges}
                        value={location}
                        onKeyDown={handleKeyDown}
                    />
                    <span onClick={search}>
                        <i className="fa-solid fa-search"></i>
                    </span>
                </div>
            </div>

            {data.notFound ? (
                <div>Not Fount 😔</div>
            ) : (
                <div className="weather-data">
                    {getIcon(data.weather ? data.weather[0].main : null)}
                    <div className="weather-type">
                        {data.weather ? data.weather[0].main : null}
                    </div>
                    <div className="temp">
                        {data.main ? `${Math.floor(data.main.temp)}*` : null}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
