import { WeatherResponse } from './types';

const API_KEY = 'ae886fedb02ac2885bb54ff712a65727';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city: string): Promise<WeatherResponse> {
  try {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error('Error fetching weather data');
    }
    return data;
  } catch (error) {
    throw new Error('Error fetching weather data');
  }
}