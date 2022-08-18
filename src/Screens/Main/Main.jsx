import './Main.scss';
import { Component } from "react";

import ItemCard from "../../Components/ItemCard/ItemCard.jsx"


class Main extends Component {
    render() {
        return (
            <main className="Main">
                <div className="slider">   
                    <img src="../assets/img/slideBanner.jpg" alt='Место для слайдера'></img> 
                </div>
                <div className="main-wrapper">
                    <div className="menu-list">
                        <div className="menu-element">
                            <a href=".">
                                <img alt="itemKnife" className="svg" src='./assets/icons/knife.svg'></img>
                            </a>
                            <a href=".">Кухонные ножи</a>
                        </div>
                        <div className="menu-element">
                            <a href=".">
                                <img alt="itemKnife" className="svg" src='./assets/icons/grey-knifes.svg'></img>
                            </a>
                            <a href=".">Складные ножи</a>
                        </div>
                        <div className="menu-element">
                            <a href=".">
                                <img alt="itemKnife" className="svg" src='./assets/icons/red-knifes.svg'></img>
                            </a>
                            <a href=".">Точилки для ножей</a>
                        </div>
                        <div className="menu-element">
                            <a href=".">
                                <img alt="itemKnife" className="svg" src='./assets/icons/cookHat.svg'></img>
                            </a>
                            <a href=".">Аксессуары для кухни</a>
                        </div>
                    </div>
                    <div className="collection-item">
                        <div className="banner">
                            <img className="banner-img" src="../assets/img/banner.png" alt='banner'></img>
                            <div className="banner-text">
                                <p>Познакомьтесь с коллекцией ножей TUOTOWN</p>
                                <img src="./assets/icons/arrow-right.svg" alt='arrow'></img>
                            </div>
                        </div>
                        <ItemCard status = {'Новинка'} />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;