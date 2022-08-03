import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "La documentation c'est facile",
    Svg: require('@site/static/img/contenu.svg').default,
    description: (
      <>
        Docusaurus nous permets de nous concentrer sur nos documents. Ne faite que déplacer vos documents dans le répertoire <code>docs</code> et le tour est joué.
      </>
    ),
  },
  {
    title: 'À la recherche de vos documents',
    Svg: require('@site/static/img/recherche.svg').default,
    description: (
      <>
        Docusaurus est muni d'une multitude d'engins de recherche. Ne faite qu'installer et configurer celui de votre choix et vous ne perdrez jamais vos documents.
      </>
    ),
  },
  {
    title: 'Déployer les deux doigts dans le nez',
    Svg: require('@site/static/img/deploiement.svg').default,
    description: (
      <>
        Le déploiement de votre site Docusaurus n'a jamais été aussi facile. Construisez votre site et choissisez l'hébergeur de votre choix. C'est tout!
      </>
    ),
  },
  {
    title: 'Gérer vos versions de documents',
    Svg: require('@site/static/img/version.svg').default,
    description: (
      <>
        Docusaurus supporte la gestion des versions documentaire nativement. Il suffit d'une touche pour publier une nouvelle version et archiver l'ancienne.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
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
