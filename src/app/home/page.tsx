import { NextEvent } from '@/components/next-event/next-event';
import Head from "next/head";
import styles from './home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>SHELLING.IT</title>
            </Head>
            <div className={styles.nextEventContainer}>
                <NextEvent date={'3 MAY 2026'} venue={'THE DBA, MANCHESTER'} headliner={'TBA'} ticketUrl={'https://ra.co/events/2334586'} />
            </div>
        </>
    )
};