import NeonOutline from "../typography/neon-outline/neon-outline";
import styles from "./page-title.module.css";

interface PageTitleProps {
    line1: string;
    line2: string;
}
export const PageTitle = ({ line1, line2 }: PageTitleProps) => {
    return (
        <div className={styles.titleContainer}>
            <NeonOutline aria-label="EVENT" text={line1} size="medium" />
            <NeonOutline aria-label="ARCHIVE" text={line2} animate size="medium" />
        </div>
    )
}
