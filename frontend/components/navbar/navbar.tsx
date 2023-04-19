/** Icons */
import { Menu, Search, Close, ShoppingCartOutlined } from '@mui/icons-material';
import { useState } from 'react';

/** Styles */
import styles from './navbar.module.css';
import { font_bebas_neue, font_roboto } from '@/utils/fonts';
import { useRouter } from 'next/router';
import { useCartStore } from '@/cart/cartStore';

/** Constants */
const storeName = 'Hype Club';

export default function Navbar() {
  const activeMenuStyle = `${styles['menu']} ${styles['active-menu']}`;
  const activeSearchStyle = `${styles['search-form']} ${styles['active-search-form']}`;

  const shoppingCart = useCartStore((state) => state.shoppingCart);

  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const router = useRouter();

  function handleMenuActive() {
    setMenuActive((menuActive) => !menuActive);
  }

  function handleSearchActive() {
    setSearchActive((searchActive) => !searchActive);
  }

  function handleCartClick() {
    router.push('/cart');
  }
  return (
    <>
      <nav
        className={`${styles['nav-container']} ${font_bebas_neue.variable} ${font_roboto.variable}`}
      >
        <div className={menuActive ? activeMenuStyle : `${styles['menu']}`}>
          menu
        </div>
        <button
          title="menu"
          type="button"
          className={styles['menu-button']}
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
        <button
          className={styles.branding}
          onClick={() => {
            router.push('/');
          }}
        >
          {storeName}
        </button>
        <form
          className={
            searchActive ? activeSearchStyle : `${styles['search-form']}`
          }
        >
          <input
            className={styles['search-input']}
            placeholder="Search"
          ></input>
        </form>
        <div className={styles['search-cart-button-container']}>
          <button
            title="search-button"
            type="button"
            className={
              menuActive
                ? `${styles['invisible']}`
                : `${styles['search-button']}`
            }
            onClick={handleSearchActive}
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
          <button
            title={'cart-button'}
            type={'button'}
            onClick={handleCartClick}
          >
            <ShoppingCartOutlined
              sx={{ fontSize: '2rem', color: 'white' }}
            ></ShoppingCartOutlined>
            <div
              className={
                shoppingCart.length === 0
                  ? styles['invisible']
                  : styles['item-counter-badge']
              }
            >
              {shoppingCart.length}
            </div>
          </button>
        </div>
      </nav>
      <div style={{ minHeight: '4rem' }}></div>
    </>
  );
}
