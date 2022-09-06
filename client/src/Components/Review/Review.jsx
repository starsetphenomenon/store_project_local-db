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
    }, [revDB])

    const reviewInput = (e) => {
        let date = new Date();

        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`,
        });
    }

    const addNewReview = () => {
        let newData = data.filter(item => +item.id !== +currentItemID);
        let item = data.find(item => +item.id === +currentItemID);
        item.reviews = [
            ...reviews,
            newReview
        ];
        newData = [
            ...newData,
            item,
        ]
        setData(newData); // new data with reviews ~~~~~~~~~~~~~~
        fetch('http://localhost:3001/updateItem', { // sending new data to server ~~~~~~~~~~~~~~~
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(db => {
                setData(db)
            });
    }

    return (
        <div className="reviews">
            <div className="items">
                {reviews?.map(review => {
                    return (
                        <div key={review.date} className="item">
                            <div className="name">{review.name}
                                <div className="date">
                                    <span>{review.date}</span>
                                    <span>{review.time}</span></div>
                            </div>
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
