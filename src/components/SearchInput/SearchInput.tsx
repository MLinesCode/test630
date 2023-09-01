import React, { useState, useEffect, KeyboardEvent } from 'react'; // Importa useEffect
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/search.svg';
import { fetchWeather } from '../../services/weatherService';
import { WeatherResponse, CityWeather } from './types';

const SearchInput: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Consulta inicial para la ciudad de Culiacán al cargar el componente
    fetchInitialWeather();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  const fetchInitialWeather = async () => {
    try {
      const data: WeatherResponse = await fetchWeather('Culiacan');
      setWeatherData(data);
      setError(null);

      // Guardar en localStorage
      localStorage.setItem('weatherData', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data.');
    }
  };

  const handleSearchClick = async () => {
    try {
      const data: WeatherResponse = await fetchWeather(city);
      setWeatherData(data);
      setError(null);
      setCity('Culiacan');

      // Guardar en localStorage
      localStorage.setItem('weatherData', JSON.stringify(data));
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred while fetching weather data.');
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder='Select your city'
        value={city}
        onChange={e => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className={styles.iconButton} onClick={handleSearchClick}>
        <img className={styles.iconSearch} src={SearchIcon} alt="Icono de busqueda" />
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default SearchInput;
