import styles from './product-collection.module.css';
import { titleToHandle, useGraphQL } from '@/graphql/use-gql';
import Image from 'next/image';
import { getCollectionByHandleQueryDoc } from './query';

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
      return (
        <ProductTile
          key={element.node.id}
          name={element.node.title}
          brand={element.node.vendor}
          imageUrl={element.node.images.edges[0].node.url}
          altText={
            element.node.images.edges[0].node.altText
              ? element.node.images.edges[0].node.altText
              : ''
          }
          price={element.node.priceRange.minVariantPrice.amount}
        />
      );
    });

  return (
    <section className={styles['product-section']}>
      <h2 className={styles['section-title']}>{props.collectionName}</h2>
      {/* <button
        onClick={() => {
          console.log(collectionData);
        }}
      >
        click me
      </button> */}
      <div className={styles['products']}>{productTiles}</div>
    </section>
  );
}

/* Subcomponents */

interface ProductTileProps {
  name: string;
  brand: string;
  imageUrl: string;
  altText: string;
  price: string;
}

function ProductTile(props: ProductTileProps) {
  return (
    <div>
      <Image
        src={props.imageUrl}
        alt={props.altText}
        width={150}
        height={150}
      ></Image>
      <h3>{props.brand}</h3>
      <h3>{props.name}</h3>
      <h3>{props.price}</h3>
    </div>
  );
}
