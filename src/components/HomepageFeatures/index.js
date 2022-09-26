import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// An array of the details in the features
const FeatureList = [ 
  {
    title: 'Awesome Team™',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        Hva er et team? Les korte og konsise oppsummeringer av hva som kjennetegner team der folk har det bra og leverer som champs. 
      </>
    ),
  },
  {
    title: 'Verktøykasse',
    Svg: require('@site/static/img/toolbox.svg').default,
    description: (
      <>
        Det finnes mange gode verktøy som teams kan ta i bruk. Vi har samlet et knippe av dem, og forsøkt å plassere dem i en kontekst som gir mening i NAV. 
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        NAV IT har et sterkt fagmiljø og nettverk av folk som syns det er både spennende og gøy å hjelpe team til å bli den beste versjonen av seg selv. 
      </>
    ),
  },
];

// Function returning the data from a feature object into HTML
function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
