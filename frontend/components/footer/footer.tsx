import styles from './footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={styles['footer']}>
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
              Shipping And Returns
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
