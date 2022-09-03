import './Search.scss';
import { React, useContext, useState, useEffect } from 'react'
import { DataContext } from '../../App';

export default function Search({ searchingItems, setSearchingItems }) {

    let { data } = useContext(DataContext);

    const [searchData, setSearchData] = useState([]);

    const getSearchedItems = (db) => {
        let result = [];
        result = db.filter(el => JSON.stringify(el.topic).toLocaleLowerCase().includes(searchingItems) ||
            JSON.stringify(el.type).toLocaleLowerCase().includes(searchingItems) ||
            JSON.stringify(el.title).toLocaleLowerCase().includes(searchingItems))
        setSearchData(result);
    }

    useEffect(() => {
        if (searchingItems.trim() !== '') {
            getSearchedItems(data);
        }
    }, [searchingItems])

    const onSearch = (e) => {
        setSearchingItems(e.target.value.toLowerCase())
    }

    return (
        <div className='searchPage'>
            <div className="wrapper">
                <h3>Результат поиска: ' {searchingItems} '</h3>
                <input placeholder={searchingItems} onChange={onSearch} spellCheck="false" type="search" />
                {searchData.map(el => {
                    return (
                        <div key={el.id} className="item">
                            <div className="desc">
                                <div className="title">{el.title}</div>
                                <div className="title">Коллекция: {el.collection}</div>
                                <div className="price">{el.price} ₴</div>
                            </div>
                            <div className="photo">
                                <img src={el.img.title} alt={el.img.alt} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
