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

export default function Product() {
  const [currentSize, setCurrentSize] = useState('Pick a Size');
  const router = useRouter();
  const { product } = router.query;

  console.log(String(product));
  const productData = useGraphQL(getProductDataByHandleQueryDoc, {
    productHandle: String(product),
  });

  return (
    <>
      <Header />
      <Navbar />
      <main
        className={`${styles['product-container']} ${font_roboto.variable}`}
      >
        <div className={styles['product-landing-visible']}>
          <div className={styles['test']}>
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
          </div>
          <div className={styles['size-container']}>
            <h3>{"Select US Men's"}</h3>
            <button className={styles['size-picker']}>{currentSize}</button>
          </div>
        </div>
        <div className={styles['description']}>
          <h3 className={styles['description-heading']}>About this product</h3>
          <p className={styles['description-text']}>
            {productData.data?.product?.description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
2;
