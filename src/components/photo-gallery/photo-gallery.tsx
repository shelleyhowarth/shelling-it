"use client";

import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import styles from "./photo-gallery.module.css";

interface Props {
    images: string[];
}

export function PhotoGallery({ images }: Props) {
    const [photos, setPhotos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadImages = async () => {
            const loaded = await Promise.all(
                images.map(
                    (src) =>
                        new Promise<{ src: string; width: number; height: number }>(
                            (resolve) => {
                                const img = new Image();
                                img.src = src;

                                // If the image is already cached
                                if (img.complete) {
                                    resolve({
                                        src,
                                        width: img.naturalWidth || 1,
                                        height: img.naturalHeight || 1,
                                    });
                                    return;
                                }

                                img.onload = () => {
                                    resolve({
                                        src,
                                        width: img.naturalWidth,
                                        height: img.naturalHeight,
                                    });
                                };

                                img.onerror = () => {
                                    // fallback for failed images
                                    resolve({ src, width: 1, height: 1 });
                                };
                            }
                        )
                )
            );

            if (isMounted) {
                setPhotos(loaded);
                setLoading(false);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [images]);

    if (loading) {
        return (
            <div className={styles.skeletonGrid}>
                {Array.from({ length: Math.min(8, images.length) }).map((_, i) => (
                    <div key={i} className={styles.skeleton} />
                ))}
            </div>
        );
    }

    photos.shift();
    return (
        <PhotoAlbum
            layout="masonry"
            photos={photos}
            columns={(containerWidth) => {
                if (containerWidth < 600) return 2;
                if (containerWidth < 1000) return 3;
                return 4;
            }}
        />
    );
}
