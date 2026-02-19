import { EventCard } from '@/components/event-card/event-card';
import { PageTitle } from '@/components/page-title/page-title';
import styles from './event-page-template.module.css';

type EventItem = {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
};

type EventPageTemplateProps = {
    pageTitle: string;       // for <title>
    line1: string;
    line2: string;
    events: EventItem[];
};

export function EventPageTemplate({
    pageTitle,
    line1,
    line2,
    events,
}: EventPageTemplateProps) {
    return (
        <>
            <title>{pageTitle}</title>

            <PageTitle line1={line1} line2={line2} />

            <div className={styles.eventsGrid}>
                {events.map((event) => (
                    <EventCard
                        key={event.title}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                        imageUrl={event.imageUrl}
                    />
                ))}
            </div>
        </>
    );
}