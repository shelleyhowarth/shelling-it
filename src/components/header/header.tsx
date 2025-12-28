"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';

export const Header = () => {
    const pathname = usePathname();
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.titleSlot}>
                    <Link href='/' className={styles.titleDesktop}>
                        <h1>SHELLING.IT +</h1>
                    </Link>
                    <Link href='/' className={styles.titleMobile}>
                        <h1>+</h1>
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