import FilterSelect from '../../Components/FilterSelect/FilterSelect';
import ItemCard from '../../Components/ItemCard/ItemCard';
import "./Catalog.scss";
import { React, useContext, useState, useEffect } from 'react'
import { DataContext } from '../../App';


function Catalog({ filter1 }) {

    let { data } = useContext(DataContext);
    const [pageTitle, setPageTitle] = useState('Ножи')
    const [filterData, setFilterData] = useState(data);

    useEffect(() => {
        setFilterData(data.filter(el => el.type === 'Ножи'))
    }, [data]);

    const handleFilter = (e) => {
        setPageTitle(e.target.getAttribute('value'));
        let result = [];
        result = data.filter(el => el.type === e.target.getAttribute('value'));
        setFilterData(result);
    }

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
            <h2 className='catalog_heading'>{pageTitle}</h2>
            <div className="content">
                <div className="filters">
                    <FilterSelect name="Новинки" handleFilter={handleFilter} filter={filter1} />
                    <FilterSelect name="Японская сталь" filter={filter1} />
                </div>
                <div className="items">
                    <div className="items__wrapper">
                        {filterData.map(item => {
                            return <ItemCard data={item} key={item.id} className={'item-card-catalog'} status={item.status} />
                        })}
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