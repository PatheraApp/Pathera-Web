import Image from 'next/image';

import type { Messages } from '@/lib/i18n';
import { FEATURE_PHOTOS } from '@/lib/media';

import LogoMark from './LogoMark';
import {
  IconBell,
  IconComment,
  IconHeart,
  IconShare,
  IconTabAdd,
  IconTabChat,
  IconTabExplore,
  IconTabMap,
  IconTabProfile,
} from './PhoneAppIcons';
import styles from './PhoneShowcase.module.css';

type Props = { badge: Messages['hero']['badge']; phone: Messages['hero']['phone'] };

export default function PhoneShowcase({ badge, phone }: Props) {
  const stories = [{ label: phone.storyYou, initials: null as string | null }, ...phone.friends.map((f) => ({ label: f.name, initials: f.initials }))];

  return (
    <div className={styles.wrap} aria-hidden>
      <div className={styles.halo} />
      <div className={styles.float}>
        <div className={styles.phone}>
          <span className={styles.btnSilent} />
          <span className={styles.btnVolUp} />
          <span className={styles.btnVolDown} />

          <div className={styles.rim}>
            <div className={styles.display}>
              <div className={styles.island}>
                <span className={styles.lens} />
              </div>

              <div className={styles.app}>
                <header className={styles.header}>
                  <div className={styles.headerBrand}>
                    <LogoMark size={20} />
                    <span>Pathera</span>
                  </div>
                  <button type="button" className={styles.iconBtn} tabIndex={-1}>
                    <IconBell className={styles.iconSm} />
                    <span className={styles.notifDot} />
                  </button>
                </header>

                <div className={styles.stories}>
                  {stories.map((s, i) => (
                    <div key={s.label} className={styles.story}>
                      <span className={`${styles.storyRing} ${i === 0 ? styles.storyRingYou : ''}`}>
                        <span className={styles.storyInner}>
                          {s.initials ?? '+'}
                        </span>
                      </span>
                      <span className={styles.storyLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>

                <article className={styles.post}>
                  <div className={styles.postHead}>
                    <span className={styles.postAvatar}>{phone.post.initials}</span>
                    <div className={styles.postUser}>
                      <strong>{phone.post.user}</strong>
                      <span>{phone.post.place}</span>
                    </div>
                    <time className={styles.postTime}>{phone.post.time}</time>
                  </div>

                  <div className={styles.postMedia}>
                    <Image
                      src={FEATURE_PHOTOS.memories}
                      alt=""
                      fill
                      sizes="280px"
                      quality={92}
                      priority
                      className={styles.postImg}
                    />
                    <div className={styles.postMediaFade} />
                  </div>

                  <div className={styles.postActions}>
                    <span>
                      <IconHeart className={styles.iconSm} />
                      {phone.post.likes}
                    </span>
                    <span>
                      <IconComment className={styles.iconSm} />
                      {phone.post.comments}
                    </span>
                    <IconShare className={styles.iconSm} />
                  </div>

                  <p className={styles.postCaption}>
                    <strong>{phone.post.user}</strong> {phone.post.caption}
                  </p>
                </article>

                <div className={styles.postPeek} aria-hidden>
                  <div className={styles.postPeekHead}>
                    <span className={styles.postPeekAvatar} />
                    <span className={styles.postPeekLines}>
                      <span />
                      <span />
                    </span>
                  </div>
                  <span className={styles.postPeekMedia} />
                </div>

                <nav className={styles.tabBar}>
                  <span className={styles.tabItem}>
                    <IconTabMap className={styles.tabIcon} />
                  </span>
                  <span className={`${styles.tabItem} ${styles.tabOn}`}>
                    <IconTabExplore className={styles.tabIcon} active />
                  </span>
                  <span className={styles.tabItem}>
                    <span className={styles.tabAdd}>
                      <IconTabAdd className={styles.tabIcon} />
                    </span>
                  </span>
                  <span className={styles.tabItem}>
                    <IconTabChat className={styles.tabIcon} />
                  </span>
                  <span className={styles.tabItem}>
                    <IconTabProfile className={styles.tabIcon} />
                  </span>
                </nav>
              </div>

              <div className={styles.homeIndicator} />
            </div>
          </div>
        </div>
        <div className={styles.reflect} />
      </div>

      <p className={styles.badge}>{badge}</p>
    </div>
  );
}
