import Image from 'next/image';

import type { Messages } from '@/lib/i18n';
import { HERO_PHONE_SCREEN } from '@/lib/media';

import LogoMark from './LogoMark';
import { IconBell, IconComment, IconHeart, IconTabAdd, IconTabExplore, IconTabMap, IconTabProfile } from './PhoneAppIcons';
import styles from './HeroPhoneMockup.module.css';

type Props = {
  badge: Messages['hero']['badge'];
  ui: Messages['hero']['mockup'];
};

const STORIES = ['#8e914d', '#6b8cae', '#c97b5a', '#9a7b5a'];

export default function HeroPhoneMockup({ badge, ui }: Props) {
  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.halo} />
      <div className={styles.float}>
        <div className={styles.tilt}>
          <div className={styles.device}>
            <span className={styles.btnSilent} />
            <span className={styles.btnVolUp} />
            <span className={styles.btnVolDown} />

            <div className={styles.rim}>
              <div className={styles.display}>
                <div className={styles.island}>
                  <span className={styles.speaker} />
                  <span className={styles.lens} />
                </div>

                <div className={styles.screen}>
                  <Image
                    src={HERO_PHONE_SCREEN}
                    alt=""
                    fill
                    priority
                    quality={75}
                    sizes="300px"
                    className={styles.screenImg}
                  />
                  <div className={styles.shadeTop} />
                  <div className={styles.shadeBottom} />

                  <header className={styles.topBar}>
                    <div className={styles.brandRow}>
                      <LogoMark size={18} />
                      <span className={styles.brand}>{ui.brand}</span>
                    </div>
                    <span className={styles.bell}>
                      <IconBell className={styles.iconSm} />
                    </span>
                  </header>

                  <div className={styles.stories}>
                    <span className={styles.storyAdd}>+</span>
                    {STORIES.map((color, i) => (
                      <span
                        key={color}
                        className={styles.storyRing}
                        style={{ background: `linear-gradient(135deg, ${color}, #434f33)` }}
                      />
                    ))}
                  </div>

                  <div className={styles.postCard}>
                    <div className={styles.postMeta}>
                      <strong>{ui.postPlace}</strong>
                      <span>{ui.postMeta}</span>
                    </div>
                    <div className={styles.postActions}>
                      <span>
                        <IconHeart className={styles.iconSm} />
                        {ui.likes}
                      </span>
                      <span>
                        <IconComment className={styles.iconSm} />
                        {ui.comments}
                      </span>
                    </div>
                  </div>

                  <nav className={styles.tabs}>
                    <IconTabMap className={styles.tabIcon} />
                    <IconTabExplore className={styles.tabIcon} active />
                    <span className={styles.tabFab}>
                      <IconTabAdd className={styles.tabFabIcon} />
                    </span>
                    <IconTabProfile className={styles.tabIcon} />
                    <span className={styles.tabSpacer} />
                  </nav>
                </div>

                <div className={styles.homeBar} />
              </div>
            </div>
          </div>
          <div className={styles.reflect} />
        </div>
      </div>
      <p className={styles.badge}>{badge}</p>
    </div>
  );
}
