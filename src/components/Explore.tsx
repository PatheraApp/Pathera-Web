import Image from 'next/image';

import type { Messages } from '@/lib/i18n';

import { IconArrowRight } from './Icons';
import ScrollReveal from './ScrollReveal';
import styles from './Explore.module.css';

const IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=640&q=90',
  'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=640&q=90',
  'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=640&q=90',
  'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=640&q=90',
];

type Props = { t: Messages; fullWidth?: boolean };

export default function Explore({ t, fullWidth }: Props) {
  return (
    <section id="gallery" className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={`${styles.layout} ${fullWidth ? styles.fullWidth : ''}`}>
          {!fullWidth && (
            <ScrollReveal>
              <div className={styles.copy} id="about">
                <h2 className={styles.title}>
                  {t.explore.titleLead}{' '}
                  <span className="serif-accent">{t.explore.titleAccent}</span>
                </h2>
                <p className={styles.body}>{t.explore.body}</p>
                <a href="#gallery" className={`btn btn-ghost ${styles.cta}`}>
                  {t.explore.cta}
                  <IconArrowRight className={styles.arrow} />
                </a>
              </div>
            </ScrollReveal>
          )}

          <div className={styles.track}>
            {t.explore.cards.map((card, i) => (
              <ScrollReveal key={card.place} delay={i * 70}>
                <article className={styles.card}>
                  <Image
                    src={IMAGES[i]}
                    alt={card.place}
                    width={300}
                    height={400}
                    className={styles.img}
                    sizes="240px"
                  />
                  <div className={styles.meta}>
                    <span className={styles.avatar} />
                    <div>
                      <strong>{card.place}</strong>
                      <span>{card.user}</span>
                      <time>{card.time}</time>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
