import FilterSelect from '../../Components/FilterSelect/FilterSelect';
import ItemCard from '../../Components/ItemCard/ItemCard';
import "./Catalog.scss";

const filter1 = [
    {
        id: 0,
        linkName: 'Складной нож',
        link: '.',
    },
    {
        id: 1,
        linkName: 'Складной нож',
        link: '.',
    },
    {
        id: 2,
        linkName: 'Складной нож',
        link: '.',
    }
]
const filter2 = [
    {
        id: 0,
        linkName: 'Японский нож',
        link: '.',
    },
    {
        id: 1,
        linkName: 'Японский нож',
        link: '.',
    },
    {
        id: 2,
        linkName: 'Японский нож',
        link: '.',
    }
]


function Catalog() {

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
                    <FilterSelect name="Новинки" data={filter1} />
                    <FilterSelect name="Японская сталь" data={filter2} />
                </div>
                <div className="items">
                    <div className="items__wrapper">
                        <ItemCard className={'item-card-catalog'} status={'Новинка'} />
                        <ItemCard className={'item-card-catalog'} />
                        <ItemCard className={'item-card-catalog'} />
                        <ItemCard className={'item-card-catalog'} />
                        <ItemCard className={'item-card-catalog'} />
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