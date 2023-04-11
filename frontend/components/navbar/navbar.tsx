/* Icons */
import { Menu, Search, Close } from '@mui/icons-material';
import { useState } from 'react';

/* Styles */
import styles from './navbar.module.css';
import { font_bebas_neue } from '@/utils/fonts';

interface Props {
  storeName: string;
}

export default function Navbar(props: Props) {
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
    <nav className={`${styles['nav-container']} ${font_bebas_neue.variable}`}>
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
          sx={{ fontSize: '2rem', color: 'white' }}
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
        // onBlur={() => {
        //   if (!searchActive) {
        //     return;
        //   } else {
        //     setSearchActive((searchActive) => !searchActive);
        //   }
        // }}
      >
        <Search
          className={searchActive ? `${styles['invisible']}` : ''}
          sx={{ fontSize: '2rem', color: 'white' }}
        />
        <Close
          className={searchActive ? '' : `${styles['invisible']}`}
          sx={{ fontSize: '2rem', color: 'black' }}
        />
      </button>
    </nav>
  );
}
