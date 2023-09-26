import styles from './WeatherCard.module.css'

const WeatherCard = () => {
  return (
    <div>
      <h2 className={styles.status}>Light rain</h2>
      <div className={styles.statusPrincipal}>
        <img className={styles.imageIcon} src="icono" alt="" />
        <p className={styles.temperature}>12°C</p>
      </div>
      <div className={styles.statusPrincipal}>
        <h3 className={styles.feelslike}>Feels like</h3>
        <p className={styles.feelslikeTemperature}>17°C</p>
      </div>
    </div>
  )
}

export default WeatherCard