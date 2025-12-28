import { NextEvent } from '@/components/next-event/next-event';
import styles from './home.module.css';

export default function Home() {
    return (
        <div className={styles.nextEventContainer}>
            <NextEvent />
        </div>
    )
};