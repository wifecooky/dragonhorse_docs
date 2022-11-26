// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import SwiperCarousel from '../components/SwiperCarousel';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>

      <div className={styles.heroCarousel}>
        <SwiperCarousel />
      </div>

      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/about">
          About
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="Powerful CLI tool to take control of the Spotify client.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
