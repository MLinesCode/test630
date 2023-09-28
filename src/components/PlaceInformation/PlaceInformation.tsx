import { getStoredData } from "../../services/storaje";
import ShareIcon from '../../assets/share.svg'
import styles from './PlaceInformation.module.css'

interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  // Agrega otras propiedades según la estructura real de tus datos almacenados
}

const PlaceInformation: React.FC = () => {
  const storedData = getStoredData();
  const currentDate = new Date();
  const monthYearString = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
  const dayOfWeekDayOfMonthString = `${currentDate.toLocaleString('default', { weekday: 'long' })} ${currentDate.getDate()}`;

  if (!storedData) {
    return null; // Puedes manejar el caso donde no hay datos almacenados
  }

  const { nameCity, nameCountry } = storedData;

  return (
    <div className={styles.placeInformation}>
      <div className={styles.info}>
        <div className={styles.cityGroup}>
          <h2 className={styles.nameCity}>{nameCity}</h2>
          <h3 className={styles.nameCountry}>{nameCountry}</h3>
        </div>          
        <p className={styles.date}>{monthYearString}</p>
        <p className={styles.date}>{dayOfWeekDayOfMonthString}</p>
        <p className={styles.hour}>06:30</p>
      </div>
      <div className={styles.iconShare}>
        <img src={ShareIcon} alt="Icono para compartir" />
      </div>
    </div>
  )
}

export default PlaceInformation