// Almacenamiento.ts
interface WeatherData {
  nameCity: string;
  nameCountry: string;
  // Agrega más propiedades según la estructura real de tus datos almacenados
}

const getStoredData = (): WeatherData | null => {
  const storedData = localStorage.getItem('weatherData');
  if (storedData) {
    return JSON.parse(storedData);
  }
  return null;
};

const setStoredData = (data: WeatherData): void => {
  localStorage.setItem('weatherData', JSON.stringify(data));
};

export { getStoredData, setStoredData };
