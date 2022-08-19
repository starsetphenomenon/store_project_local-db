import './Main.scss';
import { Component } from "react";

import ItemCard from "../../Components/ItemCard/ItenCard"


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
                                <img className="svg" src='./assets/icons/knife.svg'></img>
                            </a>
                            <a href=".">Кухонные ножи</a>
                        </div>
                        <div className="menu-element">
                            <a href=".">
                                <img className="svg" src='./assets/icons/grey-knifes.svg'></img>
                            </a>
                            <a href=".">Складные ножи</a>
                        </div>
                        <div className="menu-element">
                            <a href=".">
                                <img className="svg" src='./assets/icons/red-knifes.svg'></img>
                            </a>
                            <a href="#">Точилки для ножей</a>
                        </div>
                        <div className="menu-element">
                            <a href=".">
                                <img className="svg" src='./assets/icons/cookHat.svg'></img>
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
                <div className="line"></div>
                <div className="main-wrapper">
                    <div className="title-new-popular">
                        <h3 className="new">НОВИНКИ</h3>
                        <h3>ПОПУЛЯРНОЕ</h3>
                    </div>
                    <div className="collection-item">
                        <ItemCard status = {'Новинка'} />
                        <ItemCard status = {'Новинка'} />
                        <ItemCard status = {'Новинка'} />
                        <ItemCard status = {'Новинка'} />
                    </div>
                </div>
                <div className="line"></div>
                <div className="main-wrapper">
                    <div className="content-item">
                        <div className="content-img">
                            <img src='../assets/img/masterpieces.png'></img>
                        </div>
                        <div className="content-text">
                            <h2>«Tuotown» – легендарные ножи, создающие шедевры</h2>
                            <p>Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов. Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.</p>
                        </div>
                    </div>
                    <div className="content-item">
                        <div className="content-text">
                            <p>Истинная красота ножа — совершённая функциональность и визуальная гармония. Этот предмет издревле сопутствовал человеку: от зари цивилизации до сегодняшних дней. На протяжении всей истории человечества он был верным помощником, незаменимым инструментом и грозным оружием. Предлагаем изделия Hi-end качества по доступным ценам настоящим ценителям японских ножей.</p>
                            <p>Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены. Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.</p>
                            <h2 className="title">Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</h2>
                        </div>
                        <div className="content-img">
                            <img src='../assets/img/meat.png'></img>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="main-wrapper">
                    <h2 className="about-knife">Всё самое интересное о ножах</h2>
                    <div className="section-interesting">
                        <div className="interesting-item">
                            <div className="data-item">
                                <p>4 августа 2021 19:24</p>
                            </div>
                            <div className="title-item">
                                <p>Традиционные виды японских кухонных ножей</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;