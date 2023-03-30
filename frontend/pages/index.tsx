/*** Styles ***/
import styles from '@/styles/Home.module.css';

/***  Next.js imports ***/
import Head from 'next/head';
import Image from 'next/image';

/*** Components ***/
import Navbar from '@/components/navbar/navbar';

/***  Constants ***/
const storeName: string = 'Hype Club';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuti Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar storeName={storeName}></Navbar>
      <main>
        {/* For non-mobile view want to add 3 images akin to pillars  */}
        <img
          className={styles['landing-page-img']}
          alt="landing page"
          src={'/air-jordan-orange.jpg'}
        />
        <section className={styles['section-container']}>
          <h2 className={styles['section-title']}>New Releases</h2>
        </section>
      </main>
    </>
  );
}
