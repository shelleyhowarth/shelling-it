import Image from 'next/image';
import NeonOutline from '../typography/neon-outline/neon-outline';
import styles from './event-card.module.css';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}
export const EventCard = ({ title, date, description, imageUrl }: EventCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image src={imageUrl} alt={title} fill className={styles.image} />
            </div>
            <NeonOutline text={title} />
            <p>{description}</p>
        </div>
    );
}

