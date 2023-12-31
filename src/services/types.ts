// types.ts

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherCondition[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  // Agrega más campos según sea necesario
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}
