import type {ReactNode} from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
  accent: string;
};

const FeatureList: FeatureItem[] = [
  {
    icon: '📅',
    title: 'Agenda Inteligente',
    accent: '#6B79D1',
    description: (
      <>
        Gestiona tus tareas del hogar en un calendario visual. Crea tareas con
        título, nota, fecha y hora, y elimínalas cuando las completes.
      </>
    ),
  },
  {
    icon: '⚡',
    title: 'Puntuación Smart',
    accent: '#F4B942',
    description: (
      <>
        Selecciona una tarea (lavadora, planchar, regar...) y elige la hora.
        La app calcula si es buen momento según el precio de la luz y el clima.
      </>
    ),
  },
  {
    icon: '🏠',
    title: 'Panel del Hogar',
    accent: '#6BD1C3',
    description: (
      <>
        Ve el clima de tu ciudad, el precio actual de la luz y una sugerencia
        inteligente para aprovechar el mejor momento del día.
      </>
    ),
  },
];

function Feature({icon, title, description, accent}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div
        className={styles.featureIcon}
        style={{'--accent': accent} as React.CSSProperties}
      >
        {icon}
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Todo lo que HomeApp ofrece</h2>
          <p className={styles.sectionSubtitle}>
            Tres módulos integrados en una sola aplicación para simplificar la gestión de tu hogar.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
