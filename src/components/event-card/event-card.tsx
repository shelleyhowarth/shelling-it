'use client'

import Image from 'next/image';
import NeonOutline from '../typography/neon-outline/neon-outline';
import styles from './event-card.module.css';
import dayjs from 'dayjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    imageUrl: string;
}

export const EventCard = ({ title, date, description, imageUrl }: EventCardProps) => {
    const formattedDate = dayjs(date).format('DD.MM.YY');
    const pathname = usePathname();

    return (
        <Link href={`${pathname}/${title}`}>
            <div className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image src={imageUrl} alt={title} fill className={styles.image} />
                </div>
                <NeonOutline text={title} />
                <p className={styles.date}>{formattedDate}</p>
            </div>
        </Link>
    );
}

