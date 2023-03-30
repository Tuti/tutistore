import styles from './navbar.module.css';
import { Menu, Search, Close } from '@mui/icons-material';
import { useState } from 'react';

export default function Navbar() {
  const storeName = 'Hype Club';
  const activeMenuStyle = `${styles['menu']} ${styles['animate-menu']} ${styles['active-menu']}`;
  const [menuActive, setMenuActive] = useState(false);

  function handleMenuActive() {
    setMenuActive((menuActive) => !menuActive);
  }

  return (
    <nav className={`${styles['nav-container']}`}>
      <div className={menuActive ? activeMenuStyle : `${styles['menu']}`}>
        menu
      </div>
      <button
        title="menu"
        type="button"
        className={`${styles['menu-button']}`}
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
      <div className={styles.branding}>{storeName}</div>
      <button
        title="search-button"
        type="button"
        className={
          menuActive ? `${styles['invisible']}` : `${styles['search-button']}`
        }
      >
        <Search sx={{ fontSize: '2rem', color: 'black' }} />
      </button>
    </nav>
  );
}
