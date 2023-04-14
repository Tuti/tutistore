import { font_roboto } from '@/utils/fonts';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={`${styles['footer']} ${font_roboto.variable}`}>
        <section className={styles['sections']}>
          <h3>Account</h3>
          <div className={styles['links-container']}>
            <button className={styles['link-button']}>My Account</button>
            <button className={styles['link-button']}>Sell Shoes</button>
          </div>
        </section>
        <section className={styles['sections']}>
          <h3>About Us</h3>
          <div className={styles['links-container']}>
            <button className={styles['link-button']}>Our History</button>
            <button className={styles['link-button']}>
              Shipping and Returns
            </button>
            <button className={styles['link-button']}>Support</button>
          </div>
        </section>
        <section className={styles['sections']}>
          <h3>Contact Us</h3>
          <div className={styles['links-container']}>
            <button className={styles['link-button']}>Twitter</button>
            <button className={styles['link-button']}>Instagram</button>
            <button className={styles['link-button']}>FaceBook</button>
          </div>
        </section>
      </footer>
    </>
  );
}
