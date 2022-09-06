import './Review.scss';
import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../App';
import React from 'react'

export default function Review({ data: revDB, currentItemID }) {

    const { data, setData } = useContext(DataContext);

    const [reviews, setReviews] = useState([]);

    const [newReview, setNewReview] = useState({});

    useEffect(() => {
        setReviews(revDB);
        console.log(data)
    }, [revDB])

    const reviewInput = (e) => {
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value,
            date: Date.now(),
        });
    }

    const addNewReview = () => {
        let newData = data.filter(item => +item.id !== +currentItemID);
        let item = data.find(item => +item.id === +currentItemID);
        item.reviews = [
            ...reviews,
            newReview
        ];
        setData([
            ...newData,
            item,
        ])
    }

    return (
        <div className="reviews">
            <div className="items">
                {reviews?.map(review => {
                    return (
                        <div key={review.date} className="item">
                            <div className="name">{review.name}</div>
                            <div className="msg">{review.message}</div>
                        </div>
                    )
                })}
            </div>
            <div className="add">
                <h3>Добавить отзыв</h3>
                <div className="revName">
                    <label htmlFor="name">Имя</label>
                    <input onChange={reviewInput} spellCheck="false" name="name" type="text" />
                </div>
                <div className="revMsg">
                    <label htmlFor="message">Отзыв</label>
                    <textarea onChange={reviewInput} spellCheck="false" name="message" id="" rows="5"></textarea>
                </div>
                <button onClick={addNewReview} type="button">Отправить</button>
            </div>
        </div>
    )
}
