import styles from './archive.module.css';
import { EventCard } from '@/components/event-card/event-card';
import { PageTitle } from '@/components/page-title/page-title';

export default function Archive() {
    return (
        <>
            <title>ARCHIVE | SHELLING.IT</title>
            <PageTitle line1='EVENT' line2='ARCHIVE' />
            <div className={styles.eventsGrid}>
                <EventCard title='001' date='2024-11-30' description='Description of event 001' imageUrl='https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/001' />
                <EventCard title='002' date='2025-04-20' description='Description of event 001' imageUrl='https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/002' />
                <EventCard title='003' date='2025-08-24' description='Description of event 001' imageUrl='https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/003' />
                <EventCard title='004' date='2025-11-28' description='Description of event 001' imageUrl='https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/004' />
            </div>
        </>
    )
};

