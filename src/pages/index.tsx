import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      {/* Blobs decorativos de fondo */}
      <div className={styles.blobTopLeft} aria-hidden="true" />
      <div className={styles.blobBottomRight} aria-hidden="true" />

      <div className={clsx('container', styles.heroContent)}>
        {/* Badge */}
        <div className={styles.badge}>
          🏠 Guía Oficial de HomeApp
        </div>

        <Heading as="h1" className={styles.heroTitle}>
          Todo lo que necesitas saber<br />
          <span className={styles.heroGradient}>en un solo lugar</span>
        </Heading>

        <p className={styles.heroSubtitle}>
          Aprende a gestionar tus tareas, controlar el precio de la luz y
          anticiparte al clima, todo desde tu móvil.
        </p>

        <div className={styles.heroButtons}>
          <Link
            id="hero-cta-primary"
            className={clsx('button button--lg', styles.btnPrimary)}
            to="/docs/intro">
            Comenzar la guía →
          </Link>
          <Link
            id="hero-cta-secondary"
            className={clsx('button button--lg', styles.btnSecondary)}
            to="/docs/tareas">
            Ver funcionalidades
          </Link>
        </div>

        {/* Stats */}
        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Módulos</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Gratuita</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>iOS & Android</span>
            <span className={styles.statLabel}>Compatible</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Bienvenido a ${siteConfig.title}`}
      description="Documentación y guía de uso para la aplicación HomeApp. Aprende a gestionar tareas, el precio de la luz y el clima.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
