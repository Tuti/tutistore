/* eslint-disable @next/next/no-img-element */
/** Styles */
import styles from '@/styles/product.module.css';

/** Components */
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/navbar';

/** Nextjs  */
import { useRouter } from 'next/router';
import { useGraphQL } from '@/graphql/use-gql';
import { getProductDataByHandleQueryDoc } from './query';
import { useState } from 'react';
import { font_roboto } from '@/utils/fonts';

/** Utils */
import { formatToUSD } from '@/utils/utils';
import { useCartStore } from '@/cart/cartStore';

export default function Product() {
  const router = useRouter();
  const { product } = router.query;

  const increaseCart = useCartStore((state) => state.increase);
  const [currentSize, setCurrentSize] = useState('');
  const [selectedTile, setSelectedTile] = useState('');

  const productData = useGraphQL(getProductDataByHandleQueryDoc, {
    productHandle: String(product),
  });

  const sizeTiles = productData.data?.product?.variants.edges.map((element) => {
    //check key to selectedtile and give corresponding css style
    return (
      <button
        key={element.node.id}
        className={styles['size-tile']}
        onClick={() => {
          setCurrentSize(element.node.title);
          setSelectedTile(element.node.id);
        }}
      >
        <span className={styles['size-tile-text']}>{element.node.title}</span>
      </button>
    );
  });

  return (
    <>
      <Header
        title={
          productData.data?.product?.title ? productData.data.product.title : ''
        }
      />
      <Navbar />
      <main
        className={`${styles['product-container']} ${font_roboto.variable}`}
      >
        <div className={styles['product-info']}>
          <h3 className={styles['heading-brand']}>
            {productData.data?.product?.vendor}
          </h3>
          <h2 className={styles['heading-name']}>
            {productData.data?.product?.title}
          </h2>
          <h3 className={styles['heading-price']}>
            {formatToUSD(
              productData.data?.product?.priceRange.maxVariantPrice.amount
            )}
          </h3>
        </div>
        <img
          className={styles['product-image']}
          src={
            productData.data?.product?.images.edges[0].node.url
              ? productData.data?.product?.images.edges[0].node.url
              : ''
          }
          alt={
            productData.data?.product?.images.edges[0].node.altText
              ? productData.data?.product?.images.edges[0].node.altText
              : ''
          }
        />
        <div className={styles['purchase-size-container']}>
          <h3>{"Select US Men's"}</h3>
          {/* <button className={styles['size-picker']}>{currentSize}</button> */}
          <div className={styles['size-picker']}>{sizeTiles}</div>
          <button
            className={styles['add-to-cart-button']}
            onClick={() => {
              increaseCart(1);
            }}
          >
            {'ADD TO CART'}
          </button>
        </div>
        <div className={styles['description']}>
          <h3 className={styles['description-heading']}>About this product</h3>
          <p className={styles['description-text']}>
            {productData.data?.product?.description}
          </p>
        </div>
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
            We accept returns up to 2 weeks from the date the product was
            received in the mail. To initiate a return, please contact our
            customer service team with your order number and reason for return.
            The product must be returned in its original condition and
            packaging. Once we receive the returned product, we will process a
            refund within 5-7 business days.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
