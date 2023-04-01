import styles from './product-section.module.css';

import request from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import { graphql } from 'graphql';

interface Props {
  sectionName: string;
}

const shopNameQueryDoc = graphql(/* GraphQL */ `
  {
    shop {
      name
    }
  }
`);

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
