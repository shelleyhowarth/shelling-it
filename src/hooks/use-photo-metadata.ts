"use client";

import { useEffect, useState } from "react";

interface Photo {
  src: string;
  width: number;
  height: number;
}

export function usePhotoMetadata(images: string[]) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    let cancelled = false;

    setPhotos([]);

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      const resolvePhoto = () => {
        if (!cancelled) {
          setPhotos((prev) => [
            ...prev,
            {
              src,
              width: img.naturalWidth || 1,
              height: img.naturalHeight || 1,
            },
          ]);
        }
      };

      if (img.complete) {
        resolvePhoto();
      } else {
        img.onload = resolvePhoto;
        img.onerror = resolvePhoto;
      }
    });

    return () => {
      cancelled = true;
    };
  }, [images]);

  return photos;
}
