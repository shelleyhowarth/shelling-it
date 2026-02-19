"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import Logo from '../../../public/logo-004.webp'
import LogoShort from '../../../public/logo-004-short.webp'

export const Header = () => {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.titleSlot}>
                    <Link href='/' className={styles.titleDesktop}>
                        <img src={Logo.src} alt="SHELLING.IT Logo" className={styles.logo} />
                    </Link>
                    <Link href='/' className={styles.titleMobile}>
                        <img src={LogoShort.src} alt="SHELLING.IT Logo" className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.nav}>
                    <Link href='/archive' className={pathname?.includes('/archive') ? styles.activeLink : ''}>ARCHIVE</Link>
                    <Link href='/mixes' className={pathname?.includes('/mixes') ? styles.activeLink : ''}>MIXES</Link>
                </div>
            </div>
        </header>
    );
}