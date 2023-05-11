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
import { StorePolicies } from '@/components/store-policies/storePolicies';
import { useCartStore } from '@/zustand/cart/cartStore';
import { CartItem } from '@/zustand/cart/cartStore';
import { toast } from 'react-hot-toast';

export default function ProductPage() {
  // const cartID = useCartStore((state) => state.cartID);
  const router = useRouter();
  const { product } = router.query;
  const addToCart = useCartStore((state) => state.addToCart);

  const [currentSize, setCurrentSize] = useState<CartItem>({
    title: '',
    productID: '',
    variantID: '',
    quantity: 0,
  } as CartItem);

  const [errorStyle, setErrorStyle] = useState(false);
  const [errorMessage, setErrorMessage] = useState('Pick a size');
  const productData = useGraphQL(getProductDataByHandleQueryDoc, {
    productHandle: String(product),
  });

  console.log({ productData });

  const sizeTiles = productData.data?.product?.variants.edges.map((element) => {
    return (
      <button
        key={element.node.id}
        className={
          currentSize.title === element.node.title
            ? `${styles['size-tile']} ${styles['size-tile-selected']}`
            : styles['size-tile']
        }
        onClick={() => {
          setCurrentSize((currentSize) => ({
            ...currentSize,
            title: element.node.title,
          }));
          setErrorStyle(false);
        }}
      >
        <span className={styles['size-tile-text']}>{element.node.title}</span>
      </button>
    );
  });

  function handleAddToCart() {
    if (currentSize.title == '') {
      setErrorStyle(true);
      return;
    }

    const response = addToCart(
      currentSize.productID,
      currentSize.variantID,
      currentSize.title
    );
    console.log('item added');

    if (response.success === false) {
      toast('Cannot add more than 3 of a single product');
      //do no more stuff later
    }
  }

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
          <div
            className={
              errorStyle
                ? `${styles['size-picker']} ${styles['size-picker-unselected']}`
                : styles['size-picker']
            }
          >
            {sizeTiles}
          </div>
          <span
            className={
              errorStyle
                ? styles['size-selected-message']
                : `${styles['invisible']}`
            }
          >
            {errorMessage}
          </span>
          <button
            className={styles['add-to-cart-button']}
            onClick={handleAddToCart}
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
        <StorePolicies />
      </main>
      <Footer />
    </>
  );
}
