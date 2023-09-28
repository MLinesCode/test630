import React from 'react';
import styles from './WeatherCard.module.css';
import { getStoredData } from '../../services/storaje';
import mapIconToUrl from './weatherIconMapper';
import useTemperatureConverter from '../../hooks/useTemperatureConverter';

const WeatherCard: React.FC = () => {
  const storedData = getStoredData();

  if (!storedData) {
    return <div>No data available.</div>;
  }

  const { weather, main } = storedData;
  const description = weather[0]?.description || 'N/A';
  const icon = weather[0]?.icon || 'N/A';
  const iconUrl = mapIconToUrl(icon); // Usar la función de mapeo

  // Utiliza el hook para convertir la temperatura a Celsius
  const temperature = useTemperatureConverter(main?.temp || 0);
  const feelsLike = useTemperatureConverter(main?.feels_like || 0);

  return (
    <div>
      <h2 className={styles.status}>{description}</h2>
      <div className={styles.statusPrincipal}>
        <img className={styles.imageIcon} src={iconUrl} alt="Weather Icon" />
        <p className={styles.temperature}>{temperature}°C</p> {/* Eliminado .toFixed(2) */}
      </div>
      <div className={styles.statusPrincipal}>
        <h3 className={styles.feelslike}>Feels like</h3>
        <p className={styles.feelslikeTemperature}>{feelsLike}°C</p> {/* Eliminado .toFixed(2) */}
      </div>
    </div>
  );
};

export default WeatherCard;
