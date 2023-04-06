import styles from './product-collection.module.css';
import { titleToHandle, useGraphQL } from '@/graphql/use-gql';
import Image from 'next/image';
import {
  getCollectionByHandleQueryDoc,
  getProductCollectionQueryDoc,
} from './query';

interface Props {
  collectionName: string;
  numberOfItems: number;
}

export default function ProductCollection(props: Props) {
  const collectionData = useGraphQL(getCollectionByHandleQueryDoc, {
    handle: titleToHandle(props.collectionName),
    numProducts: 6,
  });

  const productTiles =
    collectionData?.data?.collectionByHandle?.products.edges.map((element) => {
      return <ProductTile key={element.node.id} />;
    });

  return (
    <section className={styles['product-section']}>
      <h2 className={styles['section-title']}>{props.collectionName}</h2>
      <button
        onClick={() => {
          console.log(collectionData.data);
        }}
      >
        click me for data
      </button>
    </section>
  );
}

/* Subcomponents */

interface ProductTileProps {
  name: string;
  imageUrls: string[];
  // price:
}

function ProductTile() {
  return <>{/* <Image src={}></Image> */}</>;
}
