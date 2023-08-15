'use client'
import { useResize } from "@/utils/useResize";
import { Swiper, SwiperSlide } from 'swiper/react';
import { MobilePaginationSlider, SliderArrows, Button } from "@/components/index";
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './paginationSlider.scss';

import { Pagination, Navigation } from 'swiper/modules';

export const PaginationSlider = ({ data }) => {
    const windowWidth = useResize()

    return (
        windowWidth.isScreenLg
            ? <div className='slider'>
                <Swiper
                    spaceBetween={50}
                    pagination={{
                        type: 'fraction',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div className="mySwiper__content">
                        <h1 className='mySwiper__title'>
                            project <br />
                            <span className='mySwiper__title-dec'>home</span>
                        </h1>
                        <SliderArrows />

                    </div>
                    {
                        data.map(slide => {
                            return (
                                <SwiperSlide key={slide.id} className='mySwiper__slide'>
                                    <div>

                                    </div>
                                    <Image src={slide.path} width={770} height={829} className='mySwiper__image' alt="time" />
                                    <Button
                                        title='взглянуть'
                                        color='btn-white'
                                        position='btn__position-left'
                                        circleColor='light'
                                        link='/otherPage'
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>

            </div>

            : <MobilePaginationSlider data={data} />

    );
}
