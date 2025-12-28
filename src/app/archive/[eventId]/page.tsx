
import { EventRecap } from "@/components/event-recap/event-recap";
import { PageTitle } from "@/components/page-title/page-title";
import styles from "./eventId.module.css";
import { eventData } from "./eventId.data";
interface PageProps {
    params: Promise<{
        eventId: string;
    }>;
}

export default async function ArchiveEventPage({ params }: PageProps) {
    const { eventId } = await params;
    const eventDetails = eventData.find(event => event.id === eventId);
    const { date = "", venue = "", lineup = [] } = eventDetails || {};

    return (
        <>
            <div className={styles.topContainer}>
                <PageTitle line1={"EVENT"} line2={eventId} />
                <div className={styles.recapContainer}>
                    <EventRecap date={date} venue={venue} lineup={lineup}  />
                </div>
            </div>
        </>
    );
}
