import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Delivr > Identity',
    Svg: require('@site/static/img/identity.svg').default,
    description: (
      <>
        IGain valuable insights that drive innovation. Our powerful measurement and collaborative analytics tools help you unlock the full
        potential of your data. Our clean room capabilities support every use case and partnership you can imagine, with advanced
        permissions and cutting-edge privacy-enhancing technologies built in. Delivr provides you with the tools you need to succeed in
        today's data-driven world.
      </>
    ),
  },
  {
    title: 'Delivr > Enrichment',
    Svg: require('@site/static/img/enrichment.svg').default,
    description: (
      <>
        Build a reliable enterprise identity infrastructure by implementing a consistent identity framework and well-defined regulations
        that safeguard privacy and align with your business requirements. Utilize advanced identity resolution techniques and the industry's
        most comprehensive, constantly evolving knowledge base to create the most precise and interconnected customer profiles.
      </>
    ),
  },
  {
    title: 'Delivr > Activation',
    Svg: require('@site/static/img/activate.svg').default,
    description: (
      <>
        Expand the value of your data, deepen customer understanding, and reach valuable new audiences with custom segments and lookalike
        modeling. Plug into Delivr's dynamic graph to build your zero-party audience and explore unlimited opportunities for new
        second-party collaborations.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
