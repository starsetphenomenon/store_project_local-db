import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.scss';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const slides = [
    {
        id: 0,
        imgSrc: '../assets/img/main/slideBanner.png',
        imgAlt: 'slider background',
        h1: 'Исключительное качество без компромиссов',
        h4: 'Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства',
    },
    {
        id: 1,
        imgSrc: '../assets/img/main/slideBanner.png',
        imgAlt: 'slider background',
        h1: '1',
        h4: 'Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства',
    },
    {
        id: 2,
        imgSrc: '../assets/img/main/slideBanner.png',
        imgAlt: 'slider background',
        h1: '2',
        h4: 'Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства',
    }
];

export default function Slider() {
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
            spaceBetween={0}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="slider"
        >            {slides.map(el => (
            <SwiperSlide key={el.id} className='slide'>
                <div className='item'>
                    <div className="item_background">
                        <img src={el.imgSrc} alt={el.imgAlt} />
                    </div>
                    <div className="item_content">
                        <h1>{el.h1}</h1>
                        <h4>{el.h4}</h4>
                        <button>Подробнее</button>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
};

