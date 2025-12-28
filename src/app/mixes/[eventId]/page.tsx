import MixCarousel from "@/components/mix-carousel/mix-carousel";
import { PageTitle } from "@/components/page-title/page-title";
import { mixEventData } from "./eventId.data";

interface PageProps {
    params: Promise<{
        eventId: string;
    }>;
}

export default async function MixEventPage({ params }: PageProps) {
    const { eventId } = await params;
    const videos = mixEventData.find(event => event.id === eventId)?.videos || [];
    return (
        <>
            <PageTitle line1={"EVENT"} line2={eventId} />
            <MixCarousel videos={videos} />
        </>
    );
}
