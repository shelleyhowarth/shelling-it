import { PageTitle } from "@/components/page-title/page-title";

interface PageProps {
    params: Promise<{
        eventId: string;
    }>;
}

export default async function ArchiveEventPage({ params }: PageProps) {
    const { eventId } = await params;
    return (
        <PageTitle line1={"EVENT"} line2={eventId} />
    );
}
