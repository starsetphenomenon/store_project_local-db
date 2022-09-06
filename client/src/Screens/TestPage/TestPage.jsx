/* eslint-disable react-hooks/exhaustive-deps */
import './TestPage.scss';
import { useEffect, useState, React, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DataContext } from '../../App';
import Review from '../../Components/Review/Review';

export default function TestPage() {

    const { data } = useContext(DataContext);

    const [currentItem, setCurrentItem] = useState({});

    let location = useLocation();
    useEffect(() => {
        setCurrentItem(getCurrentItem(data));
    }, [location]);

    useEffect(() => {
        setCurrentItem(getCurrentItem(data));
    });

    const getCurrentItem = (db) => {
        let currentItemId = +location.hash.replace('#', '');
        let item = db.find(item => +item.id === currentItemId);
        return item;
    }

    return (
        <div className='testPage'>
            <h3>{currentItem?.title || 'Загрузка...'}</h3>
            <h3>{currentItem?.price + ' UAH' || ''}</h3>
            <img src={currentItem?.img?.title || ''} alt={currentItem?.img?.alt || ''} />
            <Review currentItemID={currentItem?.id} data={currentItem?.reviews}></Review>
        </div>
    )
}
