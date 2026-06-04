import { IconApple, IconPlay } from './Icons';
import styles from './StoreButtons.module.css';

type Props = {
  primary: string;
  secondary: string;
  variant?: 'hero' | 'header';
  soonLabel?: string;
};

export default function StoreButtons({
  primary,
  secondary,
  variant = 'hero',
  soonLabel,
}: Props) {
  const tip = soonLabel ?? 'Coming soon';

  if (variant === 'header') {
    return null;
  }

  return (
    <div className={styles.row}>
      <span className={`${styles.soonStore} ${styles.storeBtn}`} title={tip} aria-disabled="true">
        <IconApple className={styles.icon} />
        {primary}
      </span>
      <span className={`${styles.soonStore} ${styles.storeBtnSecondary}`} title={tip} aria-disabled="true">
        <IconPlay className={styles.icon} />
        {secondary}
      </span>
    </div>
  );
}
