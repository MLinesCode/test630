import { useState, useEffect, KeyboardEvent, ChangeEvent } from 'react';
import styles from './SearchInput.module.css';
import SearchIcon from '../../assets/search.svg';
import { fetchWeather } from '../../services/weatherService';
import { WeatherResponse } from './types';

const SearchInput: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [selectedHistoryItem, setSelectedHistoryItem] = useState<string | null>(null);

  useEffect(() => {
    // Recuperar el historial de consultas desde el localStorage al iniciar
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }

    // Consulta inicial al cargar el componente
    if (isInitialLoad && city) {
      fetchWeatherData(city);
      setIsInitialLoad(false);
    }
  }, [city, isInitialLoad]);

  const fetchWeatherData = async (searchCity: string) => {
    try {
      const data: WeatherResponse = await fetchWeather(searchCity);
      setWeatherData(data);
      setError(null);

      // Limpia el input al realizar la búsqueda
      setCity('');

      // Actualizar el historial de consultas
      updateSearchHistory(searchCity);

      // Guardar la última ciudad buscada en localStorage
      localStorage.setItem('lastCity', searchCity);
      localStorage.setItem('weatherData', JSON.stringify(data));

      // Cierra la caja del historial después de la búsqueda
      handleCloseHistory();
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('An error occurred.');
    }
  };

  const updateSearchHistory = (searchCity: string) => {
    // Mantener solo las últimas 6 consultas en el historial
    const newHistory = [searchCity, ...searchHistory.slice(0, 5)];
    setSearchHistory(newHistory);

    // Guardar el historial de consultas en localStorage
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleSearchClick = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && city) {
      fetchWeatherData(city);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleCloseHistory = () => {
    setIsHistoryOpen(false);
  };

  const handleToggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  const handleHistoryItemClick = (selectedCity: string) => {
    const savedData = localStorage.getItem(selectedCity);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setWeatherData(parsedData);
      setSelectedHistoryItem(selectedCity); // Actualiza el elemento seleccionado
      setIsHistoryOpen(false); // Cierra la caja del historial
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder='Select your city'
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        onFocus={handleToggleHistory}
        onBlur={handleCloseHistory}
      />
      <button className={styles.iconButton} onClick={handleSearchClick}>
        <img className={styles.iconSearch} src={SearchIcon} alt="Icono de búsqueda" />
      </button>
      <div className={styles.historyContainer}>
        {isHistoryOpen && (
          <div className={styles.history}>
            <button className={styles.closeButton} onClick={handleCloseHistory}>
              X
            </button>
            <p className={styles.recentSearches}>Recent Searches:</p>
            <ul>
              {searchHistory.map((search, index) => (
                <li
                  key={index}
                  onClick={() => handleHistoryItemClick(search)}
                  className={search === selectedHistoryItem ? styles.selectedItem : ''}
                >
                  {search}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
