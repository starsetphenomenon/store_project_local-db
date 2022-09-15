import './NotFound.scss';
import { useNavigate } from 'react-router-dom';
import React from 'react'

export default function NotFound() {

    const navigate = useNavigate();

    const goBack = () => { // navigate to the last location ~~~~~~~~~~
        return navigate(-1);
    }

    return (
        <div className='notFound'>
            <div className="wrapper">
                <div className="msg">
                    Вы попали на страницу, которой не существует, либо зашли по неверному адресу...
                </div>
                <div className="error">
                    <div className="num1">4</div>
                    <div className="num2">0</div>
                    <div className="num3">4</div>
                </div>
                <button onClick={goBack} className="backBtn" type="button">Назад</button>
            </div>
        </div>
    )
}
