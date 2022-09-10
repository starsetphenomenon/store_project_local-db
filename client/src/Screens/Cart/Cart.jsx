/* eslint-disable react-hooks/exhaustive-deps */
import './Cart.scss';
import { React, useContext, useState, useEffect } from 'react'
import Modal from '../../Components/Modal/Modal';
import InputNumber from '../../Components/InputNumber/InputNumber';
import PopUp from '../../Components/PopUp/PopUp';
import { DataContext } from '../../App';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, setCart, getStorage, setStorage } = useContext(DataContext);
    const [popUp, setPopUp] = useState(false);
    const [modal, setModal] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [myOrders, setMyOrders] = useState([]);

    const updateTotalPrice = (db) => {
        let prices = [];
        let cartTotalPrice = db.map(el => {  // get total price from Cart items ~~~~~~~~~~~
            return el = {
                ...el,
                totalPrice: el.price * el.amount,
            }
        })
        prices = cartTotalPrice.map(el => el.totalPrice);
        let totalPrices = prices.reduce((prev, curr) => prev + curr, 0);
        setTotalPrice(totalPrices);
    }

    useEffect(() => {
        if (!cart.length && (getStorage('cart') !== 'undefined' && getStorage('cart') !== null)) {
            updateTotalPrice([])
            if (getStorage('cart').length > 0) {
                setCart(getStorage('cart'))
            } else {
                return
            }
        }
        updateTotalPrice(cart)
    }, [cart])

    const [form, setForm] = useState({
        tel: false,
        name: false,
        email: false,
    });

    const [formValue, setFormValue] = useState(getStorage('cartForm') || // set Input values from Storage if it's not empty ~~~~~~~~~~~
    {
        name: '',
        tel: '',
        email: '',
    });

    useEffect(() => {
        if (!formValue.name.length && !formValue.tel.length && !formValue.email.length) {
            return
        }
        setStorage('cartForm', formValue);
    }, [formValue]);

    const handleInputValidation = e => {
        handleClassName(e);
        const regExs = {
            name: /^([a-zA-Zа-яієїґА-ЯІЄЇ']{2,}\s[a-zA-Zа-яієїґА-ЯІЄЇ']{1,}'?-?[a-zA-Zа-яієїґА-ЯІЄЇ']{2,}\s?([a-zA-Zа-яієїґА-ЯІЄЇ']{1,})?)/,
            tel: /(\+?[0-9]{2,3}\s?[0-9]{2,3}\s?[0-9]{2,3}\s?[0-9]{2,4}$)/,
            email: /[^@\s]+@[^@\s]+\.[^@\s]+/,
        };

        const isMatch = regExs[e.target.name].test(e.target.value);
        setForm({
            ...form,
            [e.target.name]: isMatch
        });
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
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


    const popTimer = () => {
        setPopUp(false);
    }

    useEffect(() => {
        if ((getStorage('myOrders') !== 'undefined' && getStorage('myOrders') !== null) && getStorage('myOrders').length) { // get myOrders from storage
            setMyOrders(getStorage('myOrders'))
            return
        }
    }, [])

    const handleSendOrder = () => {
        if (!popUp) {
            clearTimeout(popTimer);
        }
        if (form.name && form.email && form.tel) { // clear All storages and cart on submit ~~~~~~~~~~~~~~~~
            setModal(true);
            setFormValue({
                name: '',
                tel: '',
                email: '',
            })
            localStorage.removeItem('cartForm');
            localStorage.removeItem('cart');
            setCart([]);
            let date = new Date();
            setMyOrders([
                ...myOrders, {
                    orderItems: cart,
                    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    time: `${date.getHours()}:${date.getMinutes()}`,
                }
            ])
            setStorage('myOrders', [
                ...myOrders, {
                    orderItems: cart,
                    date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
                    time: `${date.getHours()}:${date.getMinutes()}`,
                }
            ])
        } else {
            setPopUp(true);
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

    const handleDeleteElem = (e) => {
        let result = [];
        result = cart.filter(item => +item.id !== +e.currentTarget.id);
        setCart(result)
        setStorage('cart', result)
    }

    return (
        <div className='Cart'>
            <Modal modal={modal} setModal={setModal}>Благодарим за ваш заказ! <br></br> Ожидайте звонка...</Modal>
            <PopUp popUp={popUp} setPopUp={setPopUp}>Пожалуйста, заполните <br></br> все поля!</PopUp>
            <div className="top">
                <Link to="/catalog" className="back">
                    <img src="./assets/icons/arrow-toRight.svg" alt="." />
                    <h4>К покупкам</h4>
                </Link>
                <h2>Корзина</h2>
            </div>
            <div className="mid">
                <ul className="items">
                    {cart.length ? cart.map(el => {
                        return (
                            <li key={el.id} className="item">
                                <div className="item_name">
                                    <img src={el.img.title} alt={el.img.alt} />
                                    <h3>{el.title}</h3></div>
                                <div className="item_info">
                                    <InputNumber currentElem={el.id}>{el.amount}</InputNumber>
                                    <div className="price">{el.price * el.amount} ₴</div>
                                    <div id={el.id} onClick={handleDeleteElem} className="close">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </li>
                        )
                    }) : null}
                </ul>
                <div className="total">
                    <h3>К оплате:</h3>
                    <div className="totalPrice">{totalPrice} UAH</div>
                </div>
            </div>
            <div className="bottom">
                <h3>Для подтверждения заказа - введите ваши данные и мы перезвоним вам</h3>
                <form action="." onSubmit={handleSubmit}>
                    <div className="info">
                        <div className="info_item required">
                            <p className="name">Получатель</p>
                            <input pattern="[a-zA-Zа-яієїґА-ЯІЄЇ']{2,}\s[a-zA-Zа-яієїґА-ЯІЄЇ']{1,}'?-?[a-zA-Zа-яієїґА-ЯІЄЇ']{2,}\s?[a-zA-Zа-яієїґА-ЯІЄЇ']{1,}"
                                value={formValue.name} name="name" onChange={handleInputValidation} spellCheck="false" placeholder='Имя Фамилия' type="text" />
                        </div>
                        <div className="info_item required">
                            <p className="name">Мобильный телефон</p>
                            <input pattern="\+?[0-9]{2,3}\s?[0-9]{2,3}\s?[0-9]{2,3}\s?[0-9]{2,4}$"
                                value={formValue.tel} name="tel" onChange={handleInputValidation} spellCheck="false" placeholder='+380___  __  __' type="tel" />
                        </div>
                        <div className="info_item">
                            <p className="name">E-mail</p>
                            <input pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                                value={formValue.email} name="email" onChange={handleInputValidation} spellCheck="false" placeholder='Ваша почта' type="email" />
                        </div>
                    </div>
                    <div className="send">
                        <div className="policy">
                            Нажимая «Выбрать способ доставки», подтверждаю, что я ознакомлен с условиями
                            <Link to="policy"> Публичного договора оферты</Link> и <Link to="policy">Политикой конфиденциальности</Link>,
                            а также согласен получать информационную рассылку
                        </div>
                        <button onClick={handleSendOrder} type="submit">Отправить форму</button>
                    </div>
                </form>
            </div>
        </div>
    )
}