import { ArrowUpRight } from "lucide-react";
import styles from "./next-event.module.css";
import Link from "next/link";

interface NextEventProps {
    date: string;
    venue: string;
    headliner: string;
    ticketUrl: string;
}
export const NextEvent = ({ date, venue, headliner, ticketUrl }: NextEventProps) => {
    return (
        <div className={styles.nextEvent}>
            <div id="col-1">
                <p className={styles.heading}>NEXT EVENT
                </p>
                <p className={styles.copy}>{date}</p>
                <p className={styles.info}>@ {venue}</p>
            </div>
            <div className={styles.divider} />
            <div id="col-2">
                <p className={styles.heading}>LINEUP
                </p>
                <p className={styles.copy}>{headliner}</p>
                <p className={styles.info}>+ OTHERS</p>
            </div>
            <div className={styles.divider} />
            <div id="col-3" className={styles.ticketsButtonContainer}>
                <Link href={ticketUrl} target="_blank" rel="noopener noreferrer">
                    <button className={styles.ticketsButton}>
                        <span>TICKETS RA</span>
                        <ArrowUpRight />
                    </button>
                </Link>
            </div>
        </div>
    )
}