import Link from 'next/link';

import { getLegalDocument } from '@/lib/legal/get-legal-document';
import type { LegalBlock } from '@/lib/legal/types';
import type { Messages } from '@/lib/i18n';
import { legalPath, type LegalKey } from '@/lib/paths';
import type { Locale } from '@/lib/theme';

import PageHero from './PageHero';
import ScrollReveal from './ScrollReveal';
import styles from './LegalPage.module.css';

type Props = { locale: Locale; t: Messages; kind: LegalKey };

function Block({ block }: { block: LegalBlock }) {
  if (block.type === 'ul') {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p>{block.text}</p>;
}

export default function LegalDocumentPage({ locale, t, kind }: Props) {
  const page = t.pages[kind];
  const doc = getLegalDocument(locale, kind);

  return (
    <>
      <PageHero title={page.heroTitle} subtitle={page.heroSubtitle} />

      <div className={styles.body}>
        <div className="container">
          {doc ? (
            <article className={styles.prose}>
              <ScrollReveal>
                <p className={styles.updated}>{page.updatedLabel}</p>
                <div className={styles.intro}>
                  {doc.intro.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              </ScrollReveal>

              {doc.sections.map((section, i) => (
                <ScrollReveal key={section.title} delay={Math.min(i * 30, 180)}>
                  <section className={styles.section}>
                    <h2>{section.title}</h2>
                    {section.blocks.map((block, j) => (
                      <Block key={`${section.title}-${j}`} block={block} />
                    ))}
                    {section.subsections?.map((sub) => (
                      <div key={sub.title} className={styles.subsection}>
                        <h3>{sub.title}</h3>
                        {sub.blocks.map((block, j) => (
                          <Block key={`${sub.title}-${j}`} block={block} />
                        ))}
                      </div>
                    ))}
                  </section>
                </ScrollReveal>
              ))}

              <ScrollReveal>
                <section className={styles.section}>
                  <h2>{doc.contact.title}</h2>
                  <p>{doc.contact.lead}</p>
                  <ul className={styles.contactList}>
                    <li>
                      <a href={`mailto:${doc.contact.email}`}>{doc.contact.email}</a>
                    </li>
                    <li>
                      <a href={doc.contact.webUrl} target="_blank" rel="noopener noreferrer">
                        {doc.contact.web}
                      </a>
                    </li>
                  </ul>
                </section>
              </ScrollReveal>
            </article>
          ) : (
            <ScrollReveal>
              <div className={styles.fallback}>
                <p>{page.fallback}</p>
                <Link href={legalPath('tr', kind)} className="btn btn-gold">
                  {page.fallbackLink}
                </Link>
              </div>
            </ScrollReveal>
          )}
        </div>
      </div>
    </>
  );
}
