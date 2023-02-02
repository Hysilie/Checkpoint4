import React, { useEffect, useState } from "react";

/* Config */
import iconByWeatherCode from "../config/weatherIcons";

/*  Hooks, contexts and .env */
const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

function WeatherWidget() {
  /* Fetch the Weather API */
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  /* Get the geolocation with JS API */
  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  const getWeather = () => {
    fetch(`${VITE_API_URL}${VITE_API_KEY}&q=${latitude},${longitude}&aqi=no`)
      .then((response) => response.json())
      .then((data) => {
        setLocation(data.location);
        setWeather(data.current);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getWeather();
  }, [latitude, longitude]);

  return (
    longitude &&
    latitude &&
    weather &&
    location && (
      <div className="absolute left-0 flex gap-2 px-3">
        {/* match weather.icon with iconByWeatherCode */}
        <img
          src={iconByWeatherCode[weather?.condition?.code]}
          alt="weather icon"
        />

        <div>
          {" "}
          {/* Celcius */}
          <p>{weather?.temp_c} °C</p>
          {/* City */}
          <p className=" font-semibold -my-2">
            {location?.name?.toUpperCase()}{" "}
          </p>
          {/* Country */}
          <p className="hidden md:block">{location?.country}</p>
        </div>
      </div>
    )
  );
}

export default WeatherWidget;
