/* eslint-disable @next/next/no-img-element */

import styles from '../styles/cart.module.css';
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/navbar';
import { ProductVariant } from '@/graphql/generated/graphql';
import { font_roboto } from '@/utils/fonts';
import { formatToUSD, nameToUrlSlug } from '@/utils/utils';
import { useCartStore } from '@/zustand/cart/cartStore';
import {
  Add,
  DeleteForever,
  DeleteForeverOutlined,
  DeleteOutline,
  FavoriteBorderOutlined,
  Remove,
  ShoppingCartOutlined,
} from '@mui/icons-material';
import Link from 'next/link';

export default function Cart() {
  const currentCart = useCartStore((state) => state.userActiveCart);
  const cartSize = useCartStore((state) => state.cartSize);
  const cartSubtotal = useCartStore((state) => state.subtotal);
  const cartHeading = cartSize > 0 ? 'Your Cart' : 'Cart is empty';
  const itemOrItems = cartSize > 1 ? 'Items' : 'Item';

  const cartItemTiles = Array.from(currentCart.values()).map(
    (element, index) => {
      return (
        <>
          <div className={styles['cart-item-wrapper']} key={index}>
            <img
              className={styles['product-image']}
              src={element.imageUrl}
              alt={element.altText}
            ></img>
            <div className={styles['product-info']}>
              <Link
                href={`/products/${nameToUrlSlug(element.name)}`}
                className={styles['product-link']}
              >
                {element.name}
              </Link>
              <div className={styles['product-size']}>
                <span>{`Size: `}</span>
                <select className={styles['size-dropdown']}></select>
              </div>
              <div className={styles['product-quantity']}>
                <span className={styles['quantity']}>{`Quantity: `}</span>
                <select className={styles['quantity-dropdown']}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className={styles['fav-and-remove']}>
                <FavoriteBorderOutlined />
                <DeleteOutline />
              </div>
            </div>
            <div className={styles['product-price']}>{element.price}</div>
          </div>
        </>
      );
    }
  );

  return (
    <>
      <Header title={'Cart'}></Header>
      <Navbar></Navbar>
      <main className={`${styles['main']} ${font_roboto.variable}`}>
        <div className={`${styles['cart-title-container']}`}>
          <h1 className={`${styles['title']}`}>{`${cartHeading} `}</h1>
          <h3
            className={
              cartSize > 0
                ? `${styles['items-subheading']}`
                : styles['invisible']
            }
          >{`${cartSize} ${itemOrItems} | ${formatToUSD(
            cartSubtotal.toString()
          )}`}</h3>
        </div>
        <div className={styles['cart-items-container']}>{cartItemTiles}</div>
      </main>
    </>
  );
}

function sizeOptions(variants: any) {
  const options = variants.map((variant, index) => {
    return <>{variant}</>;
  });
}
