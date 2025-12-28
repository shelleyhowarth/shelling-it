import styles from "./event-recap.module.css";

interface EventRecapProps {
    date: string;
    venue: string;
    lineup: string[];
}

export const EventRecap = ({ date, venue, lineup }: EventRecapProps) => {
    return (
        <div className={styles.eventRecap}>
            <div id="col-1">
                <p className={styles.heading}>DATE
                </p>
                <p className={styles.copy}>{date}</p>
            </div>
            <div className={styles.divider} />
            <div id="col-2">
                <p className={styles.heading}>VENUE
                </p>
                <p className={styles.copy}>{venue}</p>
            </div>
            <div className={styles.divider} />
            <div id="col-3">
                <p className={styles.heading}>LINEUP
                </p>
                <p className={styles.copy}>{lineup.join(", ")}</p>
                <p className={styles.info}>+ OTHERS</p>
            </div>
        </div>
    )
}