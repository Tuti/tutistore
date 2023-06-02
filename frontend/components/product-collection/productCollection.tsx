/* eslint-disable @next/next/no-img-element */

/* Styles */
import styles from './product-collection.module.css';
import { font_roboto_cond } from '@/utils/fonts';

import { useGraphQL } from '@/graphql/use-gql';
import { getCollectionByHandleQueryDoc } from './query';

import { formatToUSD, nameToUrlSlug, titleToHandle } from '@/utils/utils';
import { useRouter } from 'next/router';

interface Props {
  collectionName: string;
  numberOfItems: number;
}

export default function ProductCollection(props: Props) {
  const collectionData = useGraphQL(getCollectionByHandleQueryDoc, {
    handle: titleToHandle(props.collectionName),
    numProducts: props.numberOfItems,
  });

  // console.log({ collectiosnData });

  const productTiles =
    collectionData?.data?.collectionByHandle?.products.edges.map((element) => {
      return (
        <ProductTile
          key={element.node.id}
          name={element.node.title}
          brand={element.node.vendor}
          imageUrl={
            element.node.images.edges[0].node.url
              ? element.node.images.edges[0].node.url
              : ''
          }
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
    <section
      className={`${styles['product-section']} ${font_roboto_cond.variable}`}
    >
      <h2 className={styles['section-title']}>{props.collectionName}</h2>
      <div className={styles['products']}>{productTiles}</div>
      <div className={styles['shop-more-wrapper']}>
        <button className={styles['shop-button']}>
          {'Shop ' + `${props.collectionName}`}
        </button>
      </div>
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
  const router = useRouter();
  return (
    <button
      className={styles['product-tile']}
      onClick={() => {
        router.push(`/products/${nameToUrlSlug(props.name)}`);
      }}
    >
      <div className={styles['image-wrapper']}>
        <img
          className={styles['image']}
          src={props.imageUrl}
          alt={props.altText}
        />
      </div>
      <div className={styles['product-text-info']}>
        <div className={styles['brand-name-wrapper']}>
          <h3 className={styles['brand-text']}>{props.brand}</h3>
          <h3 className={styles['name-text']}>{props.name}</h3>
        </div>
        <h3 className={styles['price-text']}>{formatToUSD(props.price)}</h3>
      </div>
    </button>
  );
}
