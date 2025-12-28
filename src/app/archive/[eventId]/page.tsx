
import { EventRecap } from "@/components/event-recap/event-recap";
import { PageTitle } from "@/components/page-title/page-title";
import styles from "./eventId.module.css";
interface PageProps {
    params: Promise<{
        eventId: string;
    }>;
}

export default async function ArchiveEventPage({ params }: PageProps) {
    const { eventId } = await params;

    return (
        <>
            <div className={styles.topContainer}>
                <PageTitle line1={"EVENT"} line2={eventId} />
                <div className={styles.recapContainer}>
                    <EventRecap />
                </div>
            </div>
        </>
    );
}
