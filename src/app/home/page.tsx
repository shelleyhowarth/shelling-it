import { NextEvent } from '@/components/next-event/next-event';
import styles from './home.module.css';
import Logo from '../../../public/logo-004.webp'

export default function Home() {
    return (
        <>
            <title>SHELLING.IT</title>
            <div className={styles.logoContainer}>
                <img src={Logo.src} height={'40px'} alt="SHELLING.IT Logo" />
            </div>

            <div className={styles.nextEventContainer}>
                <NextEvent date={'5 NOVEMBER 2026'} venue={'DAHLIA STEREO, MANCHESTER'} headliner={'TBA'} ticketUrl={'https://ra.co/events/2560744'} />
            </div>
        </>
    )
};