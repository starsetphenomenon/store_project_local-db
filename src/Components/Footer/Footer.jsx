import "./Footer.scss";

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="company">
                    <div className="logo">
                        <a href="."><img src="./assets/img/logo.png" alt="" /></a>
                        <p className="name">легендарные ножи,<br></br>
                            создающие шедевры</p>
                    </div>
                    <div className="description">
                        <p>Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей,
                            изготовленных лучшими мастерами Восточной Азии с применением передового европейского
                            оборудования и современных материалов.</p>
                        <p>Они отличаются идеальным балансом и фантастической остротой.
                            Сочетают в себе вековые традиции и новейшие разработки.
                            Также предлагаем широкий ассортимент сопутствующих товаров.</p>
                    </div>
                </div>
                <div className="links">
                    <div className="info">
                        <h2>Информация</h2>
                        <ul className="linkItems">
                            <li><a href=".">Главная</a></li>
                            <li><a href=".">Новости</a></li>
                            <li><a href=".">О Компания</a></li>
                            <li><a href=".">Контакты</a></li>
                        </ul>
                    </div>
                    <div className="catalog_footer">
                        <h2>Каталог</h2>
                        <ul className="linkItems">
                            <li><a href=".">Кухонные ножи</a></li>
                            <li><a href=".">Складные ножи</a></li>
                            <li><a href=".">Точилки для ножей</a></li>
                            <li><a href=".">Аксессуары</a></li>
                        </ul>
                    </div>
                    <div className="social">
                        <h2>Мы в соцсетях</h2>
                        <div className="icons">
                            <a href="."><img src="./assets/icons/social/facebook.svg" alt="" /></a>
                            <a href="."><img src="./assets/icons/social/vk.svg" alt="" /></a>
                            <a href="."><img src="./assets/icons/social/instagramm.svg" alt="" /></a>
                            <a href="."><img src="./assets/icons/social/youtube.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h2>Контактная информация</h2>
                    <h2>+7 (981) 120-11-17</h2>
                    <div className="mail">tuotown@mail.ru</div>
                    <div className="hours">08:00 — 18:00, ежедневно</div>
                    <div className="adress">
                        Украина, Киев, ул. Шевченка 15а.
                    </div>
                </div>
            </div >
        )
    }
}
