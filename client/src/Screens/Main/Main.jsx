/* eslint-disable react-hooks/exhaustive-deps */
import './Main.scss';
import { useContext, useState, useEffect } from "react";
import Slider from "../../Components/Slider/Slider"
import ItemCard from "../../Components/ItemCard/ItemCard.jsx"
import { DataContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Main() {
    let navigate = useNavigate();
    const { data, mainSlides, setCart, checkStorage, getStorage } = useContext(DataContext);
    const [dataByType, setDataByType] = useState([]);
    const [dataByStatus, setDataByStatus] = useState([]);

    useEffect(() => {
        if (checkStorage('cart')) { // put cartStorage to CART if it's not empty ~~~~~~~~~~
            setCart(getStorage('cart'))
        }      
        setDataByStatus(data.filter(el => el.status === 'Popular'));
        setDataByType(data);        
    }, [data])


    const [activeStatus, setActiveStatus] = useState('Popular'); // set Active class to link and style ~~~~~~~~
    const filterDataByStatus = (e) => {
        setDataByStatus(data.filter(el => el.status === e.target.getAttribute('value')));
        setActiveStatus(e.target.getAttribute('value'))
    }

    const [activeType, setActiveType] = useState(''); // set Active class to link and style ~~~~~~~~~~~~
    const filterDataByType = (e) => {
        if (e.currentTarget.getAttribute('value') === 'Складные' || e.currentTarget.getAttribute('value') === 'Кухонные') {
            setDataByType(data.filter(el => el.topic.toLowerCase().includes(e.currentTarget.getAttribute('value').toLowerCase())));
        } else {
            setDataByType(data.filter(el => el.type.toLowerCase().includes(e.currentTarget.getAttribute('value').toLowerCase())));
        }
        setActiveType(e.currentTarget.getAttribute('id') + '')
    }

    const navigateToCollection = () => {
        return navigate("/catalog");
    }

    return (
        <main className="Main">
            <Slider slides={mainSlides} />
            <div className="main-wrapper">
                <div className="menu-list block-hidden">
                    <div className={activeType === '1' ? 'menu-element-item active' : 'menu-element-item'} id='1' value="Кухонные" onClick={filterDataByType}>
                        <div className="menu-element-item">
                            <img alt="itemKnife" className="svg" src='./assets/icons/knife.svg'></img>
                        </div>
                        <div className="menu-element-item">Кухонные ножи</div>
                    </div>
                    <div className={activeType === '2' ? 'menu-element-item active' : 'menu-element-item'} id='2' value="Складные" onClick={filterDataByType}>
                        <div className="menu-element-item">
                            <img alt="itemKnife" className="svg" src='./assets/icons/grey-knifes.svg'></img>
                        </div>
                        <div className="menu-element-item">Складные ножи</div>
                    </div>
                    <div className={activeType === '3' ? 'menu-element-item active' : 'menu-element-item'} id='3' value="Точилки" onClick={filterDataByType}>
                        <div className="menu-element-item">
                            <img alt="itemKnife" className="svg" src='./assets/icons/red-knifes.svg'></img>
                        </div>
                        <div className="menu-element-item">Точилки для ножей</div>
                    </div>
                    <div className={activeType === '4' ? 'menu-element-item active' : 'menu-element-item'} id='4' value="Аксессуары" onClick={filterDataByType}>
                        <div className="menu-element-item">
                            <img alt="itemKnife" className="svg" src='./assets/icons/cookHat.svg'></img>
                        </div>
                        <div className="menu-element-item">Аксессуары для кухни</div>
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
                <div className="collection-item">
                    <div className="banner block-hidden">
                        <img className="banner-img" src='../assets/img/main/banner.png' alt='banner'></img>
                        <div className="banner-text">
                            <p>Познакомьтесь с коллекцией ножей TUOTOWN</p>
                            <div onClick={navigateToCollection} className="img-wrapper">
                                <img src='./assets/icons/arrow-right.svg' alt='arrow'></img>
                            </div>
                        </div>
                    </div>
                    {dataByType.map(item => {
                        return <ItemCard itemId={item.id} key={item.id} data={item} />
                    })}
                </div>
            </div>
            <div className="line"></div>
            <div className="main-wrapper">
                <div className="switcher-new-popular">
                    <h3 value="New" onClick={filterDataByStatus} className={activeStatus === 'New' ? 'new active' : 'new'}>НОВИНКИ</h3>
                    <h3 value="Popular" onClick={filterDataByStatus} className={activeStatus === 'Popular' ? 'active' : ''}>ПОПУЛЯРНОЕ</h3>
                </div>
                <div className="collection-item">
                    {dataByStatus.map(item => {
                        return <ItemCard itemId={item.id} key={item.id} data={item} />
                    })}
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