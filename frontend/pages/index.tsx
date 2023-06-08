/* eslint-disable @next/next/no-img-element */

/** Styles **/
import styles from '@/styles/home.module.css';

/**  Next.js imports **/

/** Components **/
import Header from '@/components/header/header';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import ProductCollection from '@/components/product-collection/productCollection';
import { useGraphQL } from '@/graphql/use-gql';
import { createCartMutationDoc } from './products/mutation';

export default function Home() {
  // const existingCartID = checkForExistingCart();
  // const CART = useGraphQL(createCartMutationDoc, existingCartID === null);

  // console.log(CART);
  return (
    <>
      <Header title={'HYPE CLUB'} />
      <Navbar />
      <main>
        {/* For non-mobile view want to add 3 images akin to pillars  */}
        <img
          // probably need to change to next/Image
          className={styles['landing-page-img']}
          alt="landing page"
          src={'/air-jordan-1-dark-mocha.jpg'}
        />
        {/* I should add this over the landing page image overtop in a cool way */}
        {/* <div>The Time For Hype... Is Now</div>  */}
        <ProductCollection collectionName={'New Releases'} numberOfItems={6} />
        <ProductCollection collectionName={'Top Sellers'} numberOfItems={6} />
        <ProductCollection collectionName={'Air Jordan 1'} numberOfItems={6} />
      </main>
      <Footer />
    </>
  );
}
