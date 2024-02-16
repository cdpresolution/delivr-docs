import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img className={styles.heroLogo} src="/img/panel.svg"/>
        </Heading>
        <p className={`hero__subtitle ${styles.heroSubtitle}`}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/resolution-pixel/create-a-pixel">
            Setup your resolution pixel
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title={`Docs`} description="Documentation for delivr.ai">
      <HomepageHeader />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
