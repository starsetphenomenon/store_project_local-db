import "./Header.scss";

import { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="left">
                    <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu">
                        <ul>
                            <li className="menu__item"><a href=".">Some Item</a></li>
                        </ul>
                    </div>
                    <div className="phone">
                        <img src="./assets/icons/phone.svg" alt="" />
                        <span>8 981 120-11-17</span>
                    </div>
                </div>
                <div className="logo">
                    <a href="."><img src="./assets/img/logo.png" alt="" /></a>
                </div>
                <div className="right">
                    <div className="cart">
                        <img src="./assets/icons/cart.svg" alt="" />
                    </div>
                    <div className="search">
                        <input type="search" placeholder="Поиск" />
                        <img src="./assets/icons/search.svg" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;