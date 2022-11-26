// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'テント・タープ類',
    image: require('@site/static/images/tent.png').default,
    link: '/dragonhorse_docs/docs/tents',
    description: <></>,
  },
  {
    title: 'クッカー類',
    image: require('@site/static/images/cooker.png').default,
    link: '/dragonhorse_docs/docs/cookers',
    description: <></>,
  },
  {
    title: 'テーブル・椅子類',
    image: require('@site/static/images/table.png').default,
    link: '/dragonhorse_docs/docs/tables',
    description: <></>,
  },
];

function Feature({ image, link, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}><img className={styles.featureImage} src={image} alt={title}  /> </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
