import './Main.scss';
import { useContext } from "react";
import Slider from "../../Components/Slider/Slider"
import ItemCard from "../../Components/ItemCard/ItemCard.jsx"
import { DataContext } from '../../App';

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
        h4: 'lorem',
    },
    {
        id: 2,
        imgSrc: '../assets/img/main/slideBanner.png',
        imgAlt: 'slider background',
        h1: '2',
        h4: 'lorem ispum',
    }
];


function Main() {

    const { mainSlides } = useContext(DataContext);

    return (
        <main className="Main">
            <Slider slides={mainSlides} />
            <div className="main-wrapper">
                <div className="menu-list block-hidden">
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
                <div className="content-mobail block-hidden-mob">
                    <div className="content-mobail-img">
                        <img alt="" src="../assets/img/main/blades.png" />
                    </div>
                    <a href=".">Исключительное качество без компромиссов</a>
                    <p>Ножи «Tuotown»— это главный инструмент поваров и секрет кулинарного мастерства</p>
                    <div className="content-mobail-img">
                        <img alt="" src="../assets/img/main/kitchenKnife.png" />
                    </div>
                    <a href=".">Исключительное качество без компромиссов</a>
                    <p>Ножи «Tuotown»— это главный инструмент поваров и секрет кулинарного мастерства</p>
                    <div className="collection-knives-min">
                        <img className="knives-min" alt="collectionKnives" src="../assets/img/main/collectionKnives.png" />
                    </div>
                </div>
                <div className="hidden accessories">
                    <h3>Аксессуары</h3>
                </div>
                <div className="collection-item">
                    <div className="banner block-hidden">
                        <img className="banner-img" src='../assets/img/main/banner.png' alt='banner'></img>
                        <div className="banner-text">
                            <p>Познакомьтесь с коллекцией ножей TUOTOWN</p>
                            <img src='./assets/icons/arrow-right.svg' alt='arrow'></img>
                        </div>
                    </div>
                    <ItemCard status={'Новинка'} />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>
            </div>
            <div className="line"></div>
            <div className="main-wrapper">
                <div className="switcher-new-popular">
                    <h3 className="new">НОВИНКИ</h3>
                    <h3>ПОПУЛЯРНОЕ</h3>
                </div>
                <div className="collection-item">
                    <ItemCard status={'Новинка'} />
                    <ItemCard status={'Новинка'} />
                    <ItemCard status={'Новинка'} />
                    <ItemCard status={'Новинка'} />
                </div>
            </div>
            <div className="line"></div>
            <div className="main-wrapper invisible">
                <div className="content-item">
                    <div className="content-img">
                        <img alt="masterpieces" src='../assets/img/main/masterpieces.png'></img>
                    </div>
                    <div className="content-text">
                        <h2>«Tuotown» – легендарные ножи, создающие шедевры</h2>
                        <p>Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных ножей, изготовленных лучшими мастерами Восточной Азии с применением передового европейского оборудования и современных материалов. Они отличаются идеальным балансом и фантастической остротой. Сочетают в себе вековые традиции и новейшие разработки. Также предлагаем широкий ассортимент сопутствующих товаров.</p>
                    </div>
                </div>
                <div className="content-item">
                    <div className="content-text">
                        <p>Истинная красота ножа — совершённая функциональность и визуальная гармония. Этот предмет издревле сопутствовал человеку: от зари цивилизации до сегодняшних дней. На протяжении всей истории человечества он был верным помощником, незаменимым инструментом и грозным оружием. Предлагаем изделия Hi-end качества по доступным ценам настоящим ценителям японских ножей.</p>
                        <p className="invisible">Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены. Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.</p>
                        <div className="order">
                            <h2>Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного мастерства</h2>
                        </div>
                    </div>
                    <div className="content-img">
                        <img className="invisible" alt="meat" src='../assets/img/main/meat.png'></img>
                        <img className="hidden" alt="kitchenKnife" src='../assets/img/main/kitchenKnife.png'></img>
                    </div>
                </div>
                <div className="content-item hidden">
                    <div className="content-img">
                        <a href=".">
                            <img alt="insta" src='../assets/img/main/instaCart.png'></img>
                        </a>
                    </div>
                    <div className="content-text">
                        <p>Отличительной чертой нашего интернет-магазина являются уникальные торговые предложения, эксклюзивность продукции, неизменно высокое качество и выгодные цены.</p>
                        <p>Осуществляем продажи элитных японских кухонных ножей для профессионалов и любителей. В обширной ассортиментной линейке представлены изделия для различных потребностей и любого бюджета — от столовых приборов до шеф-ножей.</p>
                    </div>
                </div>
            </div>
            <div className="line invisible"></div>
            <div className="main-wrapper">
                <h2 className="about-knife">Всё самое интересное о ножах</h2>
                <div className="section-interesting">
                    <div className="interesting-item">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="../assets/img/main/japaneseKnives-mob.png" />
                            <img alt="japaneseKnifes" src="../assets/img/main/japaneseKnives.png"></img>
                        </picture>
                        <div className="data-item">
                            <p>4 августа 2021 19:24</p>
                        </div>
                        <div className="title-item">
                            <a href=".">
                                Традиционные виды японских кухонных ножей
                            </a>
                        </div>
                    </div>
                    <div className="interesting-item">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="../assets/img/main/blades-mob.png" />
                            <img alt="blades" src="../assets/img/main/blades.png" />
                        </picture>
                        <div className="data-item">
                            <p>4 августа 2021 19:24</p>
                        </div>
                        <div className="title-item">
                            <a href=".">
                                Всемирная история режущих клинков — взгляд в прошлое
                            </a>
                        </div>
                    </div>
                    <div className="interesting-item">
                        <picture>
                            <source media="(max-width: 768px)" srcSet="../assets/img/main/kitchenKnife-mob.png" />
                            <img alt="kitchenKnife" src="../assets/img/main/kitchenKnife.png" />
                        </picture>
                        <div className="data-item">
                            <p>4 августа 2021 19:24</p>
                        </div>
                        <div className="title-item">
                            <a href=".">
                                Традиционные виды японских кухонных ножей
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;