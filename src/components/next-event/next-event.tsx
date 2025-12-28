import { ArrowUpRight } from "lucide-react";
import styles from "./next-event.module.css";
import Link from "next/link";

export const NextEvent = () => {
    return (
        <div className={styles.nextEvent}>
            <div id="col-1">
                <p className={styles.heading}>NEXT EVENT
                </p>
                <p className={styles.copy}> 3 MAY 2026</p>
                <p className={styles.info}>@ THE DBA, MANCHESTER</p>
            </div>
            <div className={styles.divider} />
            <div id="col-2">
                <p className={styles.heading}>LINEUP
                </p>
                <p className={styles.copy}>SHELLE.Y</p>
                <p className={styles.info}>+ RESIDENTS</p>
            </div>
            <div className={styles.divider} />
            <div id="col-3" className={styles.ticketsButtonContainer}>
                <Link href="https://ra.co/events/2274937" target="_blank" rel="noopener noreferrer">
                    <button className={styles.ticketsButton}>
                        <span>TICKETS RA</span>
                        <ArrowUpRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}