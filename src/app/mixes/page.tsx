import { PageTitle } from "@/components/page-title/page-title";
import styles from './mixes.module.css';
import { EventCard } from "@/components/event-card/event-card";
import { EventPageTemplate } from "@/templates/event-page-template";

export default function Mixes() {
    const events = [
        { title: '001', date: '2024-11-30', description: 'Description of event 001', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/mix-cards/001' },
        { title: '002', date: '2025-04-20', description: 'Description of event 001', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/mix-cards/002' },
        { title: '003', date: '2025-08-24', description: 'Description of event 001', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/mix-cards/003' },
        { title: '004', date: '2025-11-28', description: 'Description of event 001', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/mix-cards/004' },
    ];

    return (
        <>
            <EventPageTemplate pageTitle="MIXES | SHELLING.IT" line1="EVENT" line2="MIXES" events={events} />
        </>
    );
}