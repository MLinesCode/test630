import SearchIcon from './assets/search.svg'
import ShareIcon from './assets/share.svg'
import styles from './App.module.css'

function App() {

  return (
    <>
      <div className={styles.container}>
        <img className={styles.iconSearch} src={SearchIcon} alt="Icono de busqueda" />
        <input className={styles.input} type="text" placeholder='Select your city' />
      </div>
      <button>Search</button>
      <div className={styles.placeInformation}>
        <div className={styles.info}>
          <div className={styles.cityGroup}>
            <h2 className={styles.nameCity}>Mexico City</h2>
            <h3 className={styles.nameCountry}>MX</h3>
          </div>          
          <p className={styles.date}>August 2023</p>
          <p className={styles.date}>Sunday 20</p>
          <p className={styles.hour}>06:30</p>
        </div>
        <div className={styles.iconShare}>
          <img src={ShareIcon} alt="Icono para compartir" />
        </div>
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
