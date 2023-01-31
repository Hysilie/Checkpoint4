import React, { useEffect, useState } from "react";
import cloudy from "@assets/icons/cloudy.svg";
import sunny from "@assets/icons/sunny.svg";
import rainy from "@assets/icons/rainy.svg";
import snowy from "@assets/icons/snowy.svg";

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

function WeatherWidget() {
  /* Fetch the Weather API */
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  /* Check if geolocation is available */
  const checkGeolocationAvailable = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          console.warn(position.coords.latitude, position.coords.longitude);
        },
        function () {
          console.warn("Geolocation permission denied");
        }
      );
    }
  };

  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  useEffect(() => {
    checkGeolocationAvailable();
    componentDidMount();
  }, []);

  /* Wanted to get my own pictures , making an object to match with API data */
  const iconByWeatherCode = {
    1000: sunny,
    1003: cloudy,
    1006: cloudy,
    1009: cloudy,
    1030: rainy,
    1063: rainy,
    1066: rainy,
    1069: snowy,
    1072: snowy,
    1087: rainy,
    1114: snowy,
    1117: snowy,
    1135: rainy,
    1147: rainy,
    1150: rainy,
    1153: rainy,
    1168: rainy,
    1171: rainy,

    1180: rainy,
    1183: rainy,
    1186: rainy,
    1189: rainy,
    1192: rainy,
    1195: rainy,

    1198: rainy,
    1201: rainy,
    1204: rainy,

    1207: rainy,
    1210: snowy,
    1213: snowy,
    1216: snowy,
    1219: snowy,

    1222: snowy,
    1225: snowy,
    1237: snowy,
    1240: rainy,
    1243: rainy,
    1246: rainy,
    1249: rainy,
    1252: rainy,
    1255: snowy,
    1258: snowy,
    1261: snowy,
    1264: rainy,
    1273: rainy,
    1276: rainy,
    1279: rainy,
    1282: rainy,
  };

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
