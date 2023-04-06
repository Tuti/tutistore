import styles from './product-section.module.css';
import { useGraphQL } from '@/src/use-gql';
import { graphql } from '../../src/gql/gql';

interface Props {
  sectionName: string;
}

const shopNameQueryDoc = graphql(/* GraphQL*/ `
  query GetShopName {
    shop {
      name
    }
  }
`);

function fetchData() {
  const accessToken = 'dfad09dd39fe0c15a25c41b7ea00daf6';
  const headers = {
    'X-Shopify-Storefront-Access-Token': accessToken,
    'Content-Type': 'application/json',
  };

  fetch('https://tutitechstore.myshopify.com/api/2023-01/graphql.json', {
    method: 'POST',
    headers,
  })
    .then((response) => response.json())
    .then((data) => console.log({ data }));
}

export default function ProductSection(props: Props) {
  const data = useGraphQL(shopNameQueryDoc);

  return (
    <section className={styles['product-section']}>
      <h2 className={styles['section-title']}>{props.sectionName}</h2>
      <button
        onClick={() => {
          console.log({ data });
        }}
      >
        click me for data
      </button>
    </section>
  );
}

function productTile() {
  return <></>;
}
