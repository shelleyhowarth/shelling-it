import { ArrowUpRight } from "lucide-react";
import styles from "./event-recap.module.css";
import Link from "next/link";

// interface EventRecap {
//     date: string;
//     venue: string;
//     headliner: string;
//     ticketUrl: string;
// }
export const EventRecap = () => {
    return (
        <div className={styles.nextEvent}>
            <div id="col-1">
                <p className={styles.heading}>DATE
                </p>
                <p className={styles.copy}>28 NOV 2024</p>
                {/* <p className={styles.info}>@ {venue}</p> */}
            </div>
            <div className={styles.divider} />
            <div id="col-2">
                <p className={styles.heading}>VENUE
                </p>
                <p className={styles.copy}>33 OLDHAM ST, MANCHESTER</p>
                {/* <p className={styles.info}>+ OTHERS</p> */}
            </div>
            <div className={styles.divider} />
            <div id="col-3">
                <p className={styles.heading}>LINEUP
                </p>
                <p className={styles.copy}>SEZBENNY, KACPER PIETA</p>
                <p className={styles.info}>+ OTHERS</p>
            </div>
        </div>
    )
}