import styles from './navbar.module.css';
import { Menu, Search } from '@mui/icons-material';
import { useState } from 'react';

export default function Navbar() {
  const storeName = 'Hype Club';

  const [menuActive, setMenuActive] = useState(false);

  function handleMenuActive() {
    setMenuActive((menuActive) => !menuActive);
  }

  return (
    <nav className={`${styles['nav-container']}`}>
      <button
        className={`${styles['menu-button']}`}
        onClick={() => {
          console.log('clicked');
        }}
      >
        <Menu sx={{ fontSize: '2rem', color: 'black' }}></Menu>
      </button>
      <div className={styles.branding}>{storeName}</div>
      <button className={`${styles['search-button']}`}>
        <Search sx={{ fontSize: '2rem', color: 'black' }}></Search>
      </button>
    </nav>
  );
}
