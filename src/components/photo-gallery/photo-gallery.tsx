"use client";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import { usePhotoMetadata } from "@/hooks/use-photo-metadata";

interface Props {
    images: string[];
}

export function PhotoGallery({ images }: Props) {
    const photos = usePhotoMetadata(images);

    if (!photos.length) return null;
    return (
        <>
            <PhotoAlbum
                layout="masonry"
                photos={photos}
                columns={(containerWidth) => {
                    if (containerWidth < 600) return 2;
                    if (containerWidth < 1000) return 3;
                    return 4;
                }}
            />
        </>
    );
}
