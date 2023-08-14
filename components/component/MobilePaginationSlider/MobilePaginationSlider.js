'use client'
import { useResize } from "@/utils/useResize";
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderArrows, Button } from "@/components/index";
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './mobilePaginationSlider.scss';

import { Pagination, Navigation } from 'swiper/modules';

export const MobilePaginationSlider = ({ data }) => {
    const windowWidth = useResize()

    return (
        <>
            <h1 className='mySwiper__title'>
                project
                <span className='mySwiper__title-dec'> home</span>
            </h1>
            <div className='mobile__slider'>

                <Swiper
                    spaceBetween={50}
                    pagination={{
                        type: 'fraction',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper__mobile"
                >

                    {
                        data.map(slide => {
                            return (
                                <SwiperSlide key={slide.id} 
                                    className='mySwiper__mobile-slide'>
                                    <Image
                                        src={slide.path}
                                        width={770}
                                        height={829}
                                        className='mySwiper__mobile-image'
                                        alt="time"
                                    />
                                    <Button
                                        title='взглянуть'
                                        color='btn-white'
                                        position='btn__mobile-left'
                                        circleColor='light'
                                        link='/'
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                    <div className='arrows__mobile-wrapper'>
                        <SliderArrows className='arrows__mobile' />
                    </div>
                </Swiper>

            </div>
        </>

    );
}
