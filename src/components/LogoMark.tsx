import Image from 'next/image';

import styles from './LogoMark.module.css';

type Props = { className?: string; size?: number };

export default function LogoMark({ className, size = 40 }: Props) {
  return (
    <Image
      src="/pathera-logo.png"
      alt="Pathera"
      width={size}
      height={size}
      className={`${styles.mark} ${className ?? ''}`}
      aria-hidden
      priority={size >= 32}
    />
  );
}
