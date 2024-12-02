import React, { FormEvent, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

type InitProps = {
  name: string;
};

interface InitCountry {
  capital: string[];
  population: number;
  latlng: number[];
  flags: {
    svg: string;
  };
}

interface InitCountryWeatherInfo {
  temperature: number;
  weather_icons: string[];
  wind_speed: number;
  precip: number;
}

export const CountryDetails: React.FC = () => {
  const { name } = useParams<InitProps>();
  const [countryInfo, setCountryInfo] = useState<InitCountry>();
  const [countryName, setCountryName] = useState('');
  const [weatherInfo, setWeatherInfo] = useState<InitCountryWeatherInfo>();

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = async () => {
    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
      const data = response.data;
      setCountryInfo(data[0]);
      setCountryName(data[0].capital[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getWeatherDetails = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=${countryName}`
      );
      const data = response.data;
      setWeatherInfo(data.current);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Country Details
        </h1>

        {countryInfo ? (
          <div className="bg-gray-50 shadow-md rounded-md p-6 text-center">
            <p className="text-lg mb-4">
              <strong>Capital:</strong> {countryInfo.capital[0]}
            </p>
            <p className="text-lg mb-4">
              <strong>Population:</strong> {countryInfo.population.toLocaleString()}
            </p>
            <p className="text-lg mb-4">
              <strong>Latitude:</strong> {countryInfo.latlng[0]}
              <sup>°</sup>
            </p>
            <p className="text-lg mb-4">
              <strong>Longitude:</strong> {countryInfo.latlng[1]}
              <sup>°</sup>
            </p>
            <div className="flex items-center justify-center mt-4">
              <span className="text-sm text-gray-700 mr-2">Country Flag:</span>
              <img src={countryInfo.flags.svg} height="60px" alt="Country Flag" />
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center">No data found</p>
        )}

        <div className="mt-8 text-center">
          <button
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-teal-600 shadow-lg"
            onClick={getWeatherDetails}
          >
            Capital Weather
          </button>
        </div>

        {weatherInfo && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img
              src={weatherInfo.weather_icons[0]}
              alt="Weather icon"
              className="mx-auto mb-4"
            />
            <p className="text-lg">
              <strong>Temperature:</strong> {weatherInfo.temperature}
              <sup>°C</sup>
            </p>
            <p className="text-lg">
              <strong>Wind Speed:</strong> {weatherInfo.wind_speed} km/h
            </p>
            <p className="text-lg">
              <strong>Precipitation:</strong> {weatherInfo.precip} mm
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
