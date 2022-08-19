import ItemCard from '../../Components/ItemCard/ItemCard';
import "./Catalog.scss";


function Catalog() {

    const handleVisibility = event => {
        event.currentTarget.nextElementSibling.classList.toggle('hidden'); // toggle visibility on click
    };

    return (
        <div className='catalog'>
            <div className="header">
                <div className="bg">
                    <div className="bg-wrapper"></div>
                    <img src="./assets/img/catalog/catalog-header.png" alt="catalog header background" />
                </div>
                <div className="wrapper">
                    <h1>Дом и Ножи</h1>
                    <h3>Эксклюзивные технологии на страже чистоты и уюта в вашем доме</h3>
                </div>
            </div>
            <h2 className='catalog_heading'>Ножи</h2>
            <div className="content">
                <div className="filters">
                    <div className="filter">
                        <div className="nav" onClick={handleVisibility}>
                            <h3>Новинки</h3>
                            <div className="arrow">
                                <svg className="arrow-down" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7072 7.70725L10.7073 13.7073C10.3163 14.0983 9.68425 14.0983 
                                        9.29325 13.7073L3.29325 7.70725C2.90225
                                         7.31625 2.90225 6.68425 3.29325 6.29325C3.68425 5.90225 4.31625 5.90225 4.70725 6.29325L10.0002 11.5862L15.2933
                                          6.29325C15.6842 5.90225 16.3162 5.90225 16.7072 6.29325C16.9022 6.48825 17.0002 6.74425 17.0002 7.00025C17.0002 
                                          7.25625 16.9022 7.51225 16.7072 7.70725Z" fill="#828282" />
                                </svg>
                            </div>
                        </div>
                        <ul className="links hidden">
                            <li><a href=".">Складной нож</a></li>
                            <li><a href=".">Складной нож</a></li>
                            <li><a href=".">Складной нож</a></li>
                        </ul>
                    </div>
                    <div className="filter">
                        <div className="nav" onClick={handleVisibility}>
                            <h3>Новинки</h3>
                            <div className="arrow">
                                <svg className="arrow-down" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7072 7.70725L10.7073 13.7073C10.3163 14.0983 9.68425 14.0983 
                                        9.29325 13.7073L3.29325 7.70725C2.90225
                                         7.31625 2.90225 6.68425 3.29325 6.29325C3.68425 5.90225 4.31625 5.90225 4.70725 6.29325L10.0002 11.5862L15.2933
                                          6.29325C15.6842 5.90225 16.3162 5.90225 16.7072 6.29325C16.9022 6.48825 17.0002 6.74425 17.0002 7.00025C17.0002 
                                          7.25625 16.9022 7.51225 16.7072 7.70725Z" fill="#828282" />
                                </svg>
                            </div>
                        </div>
                        <ul className="links hidden">
                            <li><a href=".">Складной нож</a></li>
                            <li><a href=".">Складной нож</a></li>
                            <li><a href=".">Складной нож</a></li>
                        </ul>
                    </div>
                </div>
                <div className="items">
                    <div className="items__wrapper">
                        <ItemCard status={'Новинка'} />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="knifeTypes">
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type1.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type2.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type3.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type4.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type5.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type6.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type7.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                    <a href=".">
                        <div className="img-wrapper"></div>
                        <img src="./assets/img/catalog/catalog-footer-type8.png" alt="" />
                        <h5>Ножи с покрытием</h5>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Catalog;