/* eslint-disable react-hooks/exhaustive-deps */
import './PaginatedItems.scss';
import SweetPagination from "sweetpagination";
import { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

export default function PaginatedItems({ itemsPerPage, data, parentBlockClass }) {

    const [currentPageData, setCurrentPageData] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data)
    }, [data])

    return (
        <div className={parentBlockClass}>
            <SweetPagination
                currentPageData={setCurrentPageData}
                getData={items}
                dataPerPage={itemsPerPage}
                navigation={true}
            />

            {currentPageData.map((item) => {
                return <ItemCard itemId={item.id} data={item} key={item.id} className={'item-card-catalog'} status={item.status} />
            })}        
        </div>
    );
}
