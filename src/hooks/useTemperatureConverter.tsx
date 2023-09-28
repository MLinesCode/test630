import { useState, useEffect } from 'react';

const useTemperatureConverter = (initialTemperature: number) => {
  const [temperature, setTemperature] = useState(initialTemperature);

  useEffect(() => {
    const celsius = temperature - 273.15;  // Conversión de Kelvin a Celsius
    setTemperature(Math.floor(celsius));  // Utilizamos Math.floor() en lugar de Math.trunc()
  }, []);

  // Aseguramos que temperature sea un número antes de formatearlo
  const formattedTemperature = typeof temperature === 'number' ? Math.floor(temperature).toString() : '';

  return formattedTemperature;
};

export default useTemperatureConverter;

