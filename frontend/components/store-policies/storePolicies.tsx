import styles from './store-policies.module.css';

export function StorePolicies() {
  return (
    <>
      <div className={styles['policies-container']}>
        <h3>Shipping And Returns</h3>
        <h4 className={styles['policy-heading']}>{'Shipping'}</h4>
        <p className={styles['policy-text']}>
          We ship to all locations within the United States. Orders are
          processed within 1-2 business days. Shipping times vary depending on
          the location, but typically take 3-5 business days.
        </p>
        <h4 className={styles['policy-heading']}>{'Returns'}</h4>
        <p className={styles['policy-text']}>
          We accept returns up to 2 weeks from the date the product was received
          in the mail. To initiate a return, please contact our customer service
          team with your order number and reason for return. The product must be
          returned in its original condition and packaging. Once we receive the
          returned product, we will process a refund within 5-7 business days.
        </p>
      </div>{' '}
    </>
  );
}
