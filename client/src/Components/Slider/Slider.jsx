import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Slider.scss';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Link } from 'react-router-dom';

export default function Slider({ slides }) {
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
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            autoplay={{
                delay: 350055,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            className="slider"
        >            {slides.map(el => (
            <SwiperSlide key={el.id} className='slide'>
                <div className='item'>
                    <div className="item_background">
                        <img src={el.imgSrc} alt={el.imgAlt} />
                    </div>
                    <div className="item_content">
                        <h1>{el.title}</h1>
                        <h4>Коллекция: {el.collection}</h4>
                        <h4>Цена: {el.price} UAH</h4>
                        <button><Link to={`items/itemID_#${el.id}`}>Подробнее</Link></button>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
};

