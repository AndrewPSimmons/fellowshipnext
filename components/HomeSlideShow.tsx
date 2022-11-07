


import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

export default function HomeSlideShow() {
    const images = [
        "Image1.jpg",
        "Image2.jpg",
        "Image3.jpg",
        "Image4.jpg"
    ]
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
        </>
    )
}
