import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.module.css';

const Header: React.FC = () => {

  return (
    <div className={styles.container}>
      <SearchInput />
    </div>
  )
}

export default Header