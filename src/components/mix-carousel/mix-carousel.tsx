"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import styles from "./mix-carousel.module.css";
import "swiper/css";
import "swiper/css/thumbs";

interface Video {
    id: string;
    youtubeId: string;
    title: string;
}

interface MixCarouselProps {
    videos: Video[];
}

export default function MixCarousel({ videos }: MixCarouselProps) {
    const [mainSwiper, setMainSwiper] = useState<any>(null);

    return (
        <div className={styles.carouselContainer}>
            {/* Main video */}
            <div className={styles.mainVideoWrapper}>
                <Swiper
                    onSwiper={setMainSwiper}
                    slidesPerView={1}
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.title}>
                            <div className={styles.videoFrame}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={styles.thumbnailsWrapper}>
                {/* Thumbnails */}
                <Swiper
                    slidesPerView={videos.length}
                    spaceBetween={12}
                >
                    {videos.map((video, index) => (
                        <SwiperSlide key={video.id}>
                            <button
                                onClick={() => mainSwiper?.slideTo(index)}
                                style={{
                                    padding: 0,
                                    border: "none",
                                    background: "none",
                                    width: "100%",
                                }}
                            >
                                <Image
                                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                                    alt=""
                                    width={320}
                                    height={180}
                                    className={styles.thumbnailImage}
                                />
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
