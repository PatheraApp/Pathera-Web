import type { Messages } from '@/lib/i18n';

import { IconInstagram, IconMail, IconX } from './Icons';
import PageHero from './PageHero';
import ScrollReveal from './ScrollReveal';
import styles from './ContactPage.module.css';

type Props = { t: Messages };

export default function ContactPage({ t }: Props) {
  const page = t.pages.contact;

  return (
    <>
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} />

      <div className={styles.body}>
        <div className="container">
          <div className={styles.channels}>
            {page.channels.map((ch, i) => (
              <ScrollReveal key={ch.title} delay={i * 70}>
                <article className={styles.channel}>
                  <span className={styles.channelIcon} aria-hidden>
                    {ch.type === 'email' && <IconMail className={styles.icon} />}
                    {ch.type === 'social' && <IconInstagram className={styles.icon} />}
                    {ch.type === 'press' && <IconMail className={styles.icon} />}
                  </span>
                  <h2>{ch.title}</h2>
                  <p>{ch.body}</p>
                  {ch.type === 'social' ? (
                    <div className={styles.socialChannel}>
                      <span className={styles.socialHandle}>{page.socialLinks.handle}</span>
                      <a
                        href={page.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.channelLink}
                      >
                        Instagram
                      </a>
                      <a
                        href={page.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.channelLink}
                      >
                        X (Twitter)
                      </a>
                    </div>
                  ) : ch.href ? (
                    <a href={ch.href} className={styles.channelLink}>
                      {ch.linkLabel}
                    </a>
                  ) : (
                    <span className={styles.channelSoon}>{ch.linkLabel}</span>
                  )}
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <section className={styles.faq}>
              <h2 className={styles.faqTitle}>{page.faqTitle}</h2>
              <div className={styles.faqList}>
                {page.faq.map((item) => (
                  <details key={item.q} className={styles.faqItem}>
                    <summary>{item.q}</summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <div className={styles.social}>
              <p>{page.socialTitle}</p>
              <div className={styles.socialLinks} aria-label={page.socialTitle}>
                <a
                  href={page.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @PatheraApp"
                >
                  <IconInstagram className={styles.socialIcon} />
                </a>
                <a
                  href={page.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X @PatheraApp"
                >
                  <IconX className={styles.socialIcon} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
}
