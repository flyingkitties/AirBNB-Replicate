import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import styles from '../styles/Home.module.css';
import Places from '../places.json';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Rita&apos;s AirBnB</title>
        <meta
          name="description"
          content="AirBnB Replica - Rita Guilherme - Web Engineer"
          key="desc"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll  ">
            {cardsData?.map((item) => (
              <MediumCard
                key={item.img}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greastest Outdoors"
            description="Wishlists especialy curated by Rita."
            buttonText="Get Inspired"
          />
        </section>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = require('../places.json');

  const cardsData = require('../places2.json');

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
