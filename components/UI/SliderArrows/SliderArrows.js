'use client'
import { useSwiper } from 'swiper/react';

import { arrowLeft, arrowRight } from '@/public/icons/arrows'

import './sliderArrow.scss';

export const SliderArrows = ({className}) => {
    const swiper = useSwiper();

    return (
        <div className={`arrows ${className}`}>
            <button
                className='arrow arrow__left'
                onClick={() => swiper.slidePrev()}
                aria-label='arrow_left'
            >
                {arrowLeft}
            </button>
            <button
                className='arrow arrow__right'
                onClick={() => swiper.slideNext()}
                aria-label='arrow_right'
            >
                {arrowRight}
            </button>
        </div>
    )
}