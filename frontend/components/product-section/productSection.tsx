import styles from './product-section.module.css';

interface Props {
  sectionName: string;
}

export default function ProductSection(props: Props) {
  return (
    <section className={styles['product-section']}>
      <h2 className={styles['section-title']}>{props.sectionName}</h2>
    </section>
  );
}

function productTile() {
  return <></>;
}
