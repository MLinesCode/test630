import React from 'react';
import { getStoredData } from '../../services/storaje';
import ShareIcon from '../../assets/share.svg';
import styles from './PlaceInformation.module.css';

const PlaceInformation: React.FC = () => {
  const storedData = getStoredData();
  const currentDate = new Date();
  const monthYearString = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;
  const dayOfWeekDayOfMonthString = `${currentDate.toLocaleString('default', { weekday: 'long' })} ${currentDate.getDate()}`;

  if (!storedData) {
    return null; // Puedes manejar el caso donde no hay datos almacenados
  }

  const { sys, name } = storedData;
  const { country } = sys;

  return (
    <div className={styles.placeInformation}>
      <div className={styles.info}>
        <div className={styles.cityGroup}>
          <h2 className={styles.nameCity}>{name}</h2>
          <h3 className={styles.nameCountry}>{country}</h3>
        </div>          
        <p className={styles.date}>{monthYearString}</p>
        <p className={styles.date}>{dayOfWeekDayOfMonthString}</p>
        <p className={styles.hour}>06:30</p>
      </div>
      <div className={styles.iconShare}>
        <img src={ShareIcon} alt="Icono para compartir" />
      </div>
    </div>
  );
};

export default PlaceInformation;
