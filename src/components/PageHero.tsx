import ScrollReveal from './ScrollReveal';
import styles from './PageHero.module.css';

type Props = {
  title: string;
  subtitle: string;
};

export default function PageHero({ title, subtitle }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className="container">
        <ScrollReveal>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.sub}>{subtitle}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
