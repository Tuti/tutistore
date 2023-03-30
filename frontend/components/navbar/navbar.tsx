import styles from './navbar.module.css';
import { Menu, Search, Close } from '@mui/icons-material';
import { useState } from 'react';

interface props {
  storeName: string;
}
export default function Navbar(props: props) {
  const activeMenuStyle = `${styles['menu']} ${styles['active-menu']}`;
  const activeSearchStyle = `${styles['search-form']} ${styles['active-search-form']}`;

  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  function handleMenuActive() {
    setMenuActive((menuActive) => !menuActive);
  }

  function handleSearchActive() {
    setSearchActive((searchActive) => !searchActive);
  }

  return (
    <nav className={`${styles['nav-container']}`}>
      <div className={menuActive ? activeMenuStyle : `${styles['menu']}`}>
        menu
      </div>
      <button
        title="menu"
        type="button"
        className={styles['menu-button']}
        // className={
        //   searchActive ? styles['invisible'] : `${styles['menu-button']}`
        // }
        onClick={handleMenuActive}
      >
        <Menu
          className={menuActive ? `${styles['invisible']}` : ''}
          sx={{ fontSize: '2rem', color: 'black' }}
        />
        <Close
          className={menuActive ? '' : `${styles['invisible']}`}
          sx={{ fontSize: '2rem', color: 'black' }}
        />
      </button>
      <div className={styles.branding}>{props.storeName}</div>
      <form
        className={
          searchActive ? activeSearchStyle : `${styles['search-form']}`
        }
      >
        <input className={styles['search-input']} placeholder="Search"></input>
      </form>
      <button
        title="search-button"
        type="button"
        className={
          menuActive ? `${styles['invisible']}` : `${styles['search-button']}`
        }
        onClick={handleSearchActive}
        onBlur={handleSearchActive}
      >
        <Search sx={{ fontSize: '2rem', color: 'black' }} />
      </button>
    </nav>
  );
}
