import MixCarousel from "@/components/mix-carousel/mix-carousel";
import { PageTitle } from "@/components/page-title/page-title";
import { mixEventData } from "./eventId.data";
import Head from "next/head";

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
            <Head>
                <title>{`${eventId} MIXES | SHELLING.IT`}</title>
            </Head>
            <PageTitle line1={"EVENT"} line2={eventId} />
            <MixCarousel videos={videos} />
        </>
    );
}
