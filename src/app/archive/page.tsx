import { EventPageTemplate } from '@/templates/event-page-template';

export default function Archive() {
    const events = [
        { title: '001', date: '2024-11-30', description: 'Description of event 001', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/001' },
        { title: '002', date: '2025-04-20', description: 'Description of event 002', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/002' },
        { title: '003', date: '2025-08-24', description: 'Description of event 003', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/003' },
        { title: '004', date: '2025-11-28', description: 'Description of event 004', imageUrl: 'https://shelling-it.s3.eu-north-1.amazonaws.com/archive-cards/004' },
    ];

    return (
        <>
            <EventPageTemplate
                pageTitle="ARCHIVE | SHELLING.IT"
                line1="EVENT"
                line2="ARCHIVE"
                events={events}
            />
        </>
    );
};

