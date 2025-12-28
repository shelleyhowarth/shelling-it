
import { EventRecap } from "@/components/event-recap/event-recap";
import { PageTitle } from "@/components/page-title/page-title";
import { Gallery } from "react-grid-gallery";
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
            <PageTitle line1={"EVENT"} line2={eventId} />
            <div className={styles.eventRecapContainer}>
                <EventRecap />
            </div>
        </>
    );
}
