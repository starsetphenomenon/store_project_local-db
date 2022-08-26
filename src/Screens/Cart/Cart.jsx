import './Cart.scss';
import React from 'react'
import Modal from '../../Components/Modal/Modal';
import InputNumber from '../../Components/InputNumber/InputNumber';
import PopUp from '../../Components/PopUp/PopUp';
import { useState } from 'react';

export default function Cart({ data }) {

    const [form, setForm] = useState({
        tel: false,
        name: false,
        email: false,
    });

    const [modal, setModal] = useState(false);

    const handleInputValidation = e => {
        handleClassName(e);
        const regExs = {
            name: /^([a-zA-Zа-яієїґА-ЯІЄЇ']{2,}\s[a-zA-Zа-яієїґА-ЯІЄЇ']{1,}'?-?[a-zA-Zа-яієїґА-ЯІЄЇ']{2,}\s?([a-zA-Zа-яієїґА-ЯІЄЇ']{1,})?)/,
            tel: /((\+38)?\(?\d{3}\)?[\s.-]?(\d{7}|\d{3}[\s.-]\d{2}[\s.-]\d{2}|\d{3}-\d{4}))/,
            email: /[^@\s]+@[^@\s]+\.[^@\s]+/,
        };

        const isMatch = regExs[e.target.name].test(e.target.value);

        setForm({
            ...form,
            [e.target.name]: isMatch
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (form.name && form.email && form.tel) {
            e.currentTarget.reset();
            setForm({
                tel: false,
                name: false,
                email: false,
            })
        }
    };

    const [popUp, setPopUp] = useState(false);
    const popTimer = () => {
        setPopUp(false);
    }

    const handleSend = () => {
        if (!popUp) {
            clearTimeout(popTimer);
        }
        if (form.name && form.email && form.tel) {
            setModal(true);
        } else {
            setPopUp(true)
            clearTimeout(popTimer);
            setTimeout(popTimer, 3000);
        }
    }

    const handleClassName = (e) => {
        if (e.target.value.length) {
            if (form[e.target.name]) {
                e.target.setAttribute('class', 'valid');
            } else {
                e.target.setAttribute('class', 'invalid');
            }
        } else {
            e.target.setAttribute('class', '');
        }
    }

    return (
        <div className='Cart'>
            <Modal modal={modal} setModal={setModal}>Благодарим за ваш заказ! <br></br> Ожидайте звонка...</Modal>
            <PopUp popUp={popUp} setPopUp={setPopUp}>Пожалуйста, заполните все поля корректно!</PopUp>
            <div className="top">
                <div className="back">
                    <img src="./assets/icons/arrow-toRight.svg" alt="." />
                    <h4>К покупкам</h4>
                </div>
                <h2>Корзина</h2>
            </div>
            <div className="mid">
                <ul className="items">
                    {data.map(el => {
                        return (
                            <li key={el.id} className="item">
                                <div className="item_name">
                                    <img src={el.imgSrc} alt={el.imgAlt} />
                                    <h3>{el.name}</h3></div>
                                <div className="item_info">
                                    <InputNumber />
                                    <div className="price">{el.price} ₴</div>
                                    <div className="close">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="total">
                    <h3>К оплате:</h3>
                    <div className="totalPrice">{750} UAH</div>
                </div>
            </div>
            <div className="bottom">
                <h3>Для подтверждения заказа - введите ваши данные и мы перезвоним вам</h3>
                <form action="." onSubmit={handleSubmit}>
                    <div className="info">
                        <div className="info_item required">
                            <p className="name">Получатель</p>
                            <input name="name" onChange={handleInputValidation} spellCheck="false" placeholder='Имя Фамилия' type="text" />
                        </div>
                        <div className="info_item required">
                            <p className="name">Мобильный телефон</p>
                            <input name="tel" onChange={handleInputValidation} spellCheck="false" placeholder='+38(0**)___-__-__' type="tel" />
                        </div>
                        <div className="info_item">
                            <p className="name">E-mail</p>
                            <input name="email" onChange={handleInputValidation} spellCheck="false" placeholder='Ваша почта' type="email" />
                        </div>
                    </div>
                    <div className="send">
                        <div className="policy">
                            Нажимая «Выбрать способ доставки», подтверждаю, что я ознакомлен с условиями
                            <a href="."> Публичного договора оферты</a> и <a href=".">Политикой конфиденциальности</a>,
                            а также согласен получать информационную рассылку
                        </div>
                        <button onClick={handleSend} type="submit">Отправить форму</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
