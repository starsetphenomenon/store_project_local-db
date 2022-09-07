import './ItemPageSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import React from 'react'

export default function itemPageSlider({ slides }) {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={pagination}
            mousewheel={true}
            keyboard={true}
            loop={true}
            slidesPerView={1}
            spaceBetween={15}
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="itemPageSlider"
        >            {slides.map((el, ind) => (
            <SwiperSlide key={ind} className='slide'>
                <div className='item'>
                    <img src={el} alt="item slider element" />
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}
