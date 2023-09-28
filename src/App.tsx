import { useState, useEffect } from 'react'
import styles from './App.module.css'
import Header from './components/Header/Header'
import PlaceInformation from './components/PlaceInformation/PlaceInformation'
import WeatherCard from './components/WeatherCard/WeatherCard'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Cargar el estado del modo oscuro desde el almacenamiento local al cargar la aplicación
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === 'true');
    }
  }, []);

  // Cambiar el estado del modo oscuro y actualizar el almacenamiento local
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <PlaceInformation />
      <WeatherCard />
      <div className={styles.temperatureContent}>
          <div className={styles.temperatureContainer}>
            <h2 className={styles.temperatureSubItem}>Temperature</h2>
            <div className={styles.temperatureItems}>
              <p>Min.</p>
              <p>10°C</p>
            </div>
            <div className={styles.temperatureItems}>
              <p>Max.</p>
              <p>10°C</p>
            </div>
          </div>
          <div className={styles.temperatureContainer}>
            <h2 className={styles.temperatureSubItem}>Wind</h2>
            <div className={styles.temperatureItems}>
              <p>Speed</p>
              <p>1.62 m/s</p>
            </div>
            <div className={styles.temperatureItems}>
              <p>Deg.</p>
              <p>36°</p>
            </div>
          </div>
          <div className={styles.temperatureContainer}>
            <h2 className={styles.temperatureSubItem}>Humidity</h2>
            <div className={styles.temperatureItems}>
              <h3>32%</h3>
            </div>
          </div>
      </div>
      <div className={styles.recomendations}>
          <h2>Recomendations</h2>
          <div className={styles.recomendationsList}>
            <p>Prueba</p>
            <p>Prueba</p>
            <p>Prueba</p>
            <p>Prueba</p>
            <p>Prueba</p>
          </div>
      </div>
        <div className={styles.map}>
            <h2>Map</h2>
            <div className={styles.mapIframe}>
              <img src="mapa" alt="" />
            </div>
        </div>
        <div className={styles.saveButton}>
            <button className={styles.save}>Save</button>
        </div>
    </div>
  )
}

export default App
