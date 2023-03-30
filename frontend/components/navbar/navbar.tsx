import styles from './navbar.module.css';
import { Menu, Search, Close } from '@mui/icons-material';
import { useState } from 'react';

export default function Navbar() {
  const storeName = 'Hype Club';

  const [menuActive, setMenuActive] = useState(false);

  function handleMenuActive() {
    setMenuActive((menuActive) => !menuActive);
  }

  return (
    <nav className={`${styles['nav-container']}`}>
      <div
        className={
          menuActive
            ? `${styles['menu']} ${styles['active-menu']}`
            : `${styles['menu']}`
        }
      >
        menu
      </div>
      <button className={`${styles['menu-button']}`} onClick={handleMenuActive}>
        <div className={menuActive ? `${styles['inactive']}` : ''}>
          <Menu sx={{ fontSize: '2rem', color: 'black' }}></Menu>
        </div>
        <div className={menuActive ? '' : `${styles['inactive']}`}>
          <Close sx={{ fontSize: '2rem', color: 'black' }}></Close>
        </div>
      </button>
      <div className={styles.branding}>{storeName}</div>
      <button className={`${styles['search-button']}`}>
        <Search sx={{ fontSize: '2rem', color: 'black' }}></Search>
      </button>
    </nav>
  );
}
