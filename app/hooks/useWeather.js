import { useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    wind: "",
    time: "",
    cloudPercentage: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setloading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setloading({
        ...loading,
        state: true,
        message: "Fetch Weather Data",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching Weather Data Faield ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        wind: data?.wind?.speed,
        cloudPercentage: data?.clouds?.all,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updatedWeatherData);
    } catch (error) {
      setError(error);
    } finally {
      setloading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
};

export default useWeather;
