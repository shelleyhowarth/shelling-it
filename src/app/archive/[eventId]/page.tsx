
import { EventRecap } from "@/components/event-recap/event-recap";
import { PageTitle } from "@/components/page-title/page-title";
import styles from "./eventId.module.css";
import { eventData } from "./eventId.data";
import "react-photo-album/styles.css";
import { PhotoGallery } from "@/components/photo-gallery/photo-gallery";

interface PageProps {
    params: Promise<{
        eventId: string;
    }>;
}

export default async function ArchiveEventPage({ params }: PageProps) {
    const { eventId } = await params;
    const eventDetails = eventData.find((event) => event.id === eventId);
    const { date = "", venue = "", lineup = [] } = eventDetails || {};

    async function getImages() {
        const prefix = `archive-gallery/${eventId}/`;
        const url = `https://shelling-it.s3.eu-north-1.amazonaws.com/?list-type=2&prefix=${encodeURIComponent(prefix)}`;
        const res = await fetch(url);
        const text = await res.text();

        const keys = Array.from(
            text.matchAll(/<Key>(.*?)<\/Key>/g),
            match => match[1]
        );

        return keys.map(
            key => `https://shelling-it.s3.amazonaws.com/${key}`
        );
    }

    const images = await getImages()


    return (
        <>
            <div className={styles.topContainer}>
                <PageTitle line1={"EVENT"} line2={eventId} />
                <div className={styles.recapContainer}>
                    <EventRecap date={date} venue={venue} lineup={lineup} />
                </div>
            </div>
            <div className={styles.galleryContainer}>
                <PhotoGallery images={images} />
            </div>
        </>
    );
}
