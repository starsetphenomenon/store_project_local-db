import React from 'react';
import "./Menu.scss";

export default function Menu({ menuVisibility }) {
    return (
        <div className='Menu'>
            <div className="close" onClick={menuVisibility}>
                <span></span>
                <span></span>
            </div>
            <ul className='filterLinks'>
                <li><a href=".">Кухонные ножи TUOTOWN</a></li>
                <li><a href=".">Складные ножи TUOTOWN</a></li>
                <li><a href=".">Кухонные ножи QXF</a></li>
                <li><a href=".">Точильные камни</a></li>
                <li><a href=".">Наборы для BBQ</a></li>
                <li><a href=".">Кухонные принадлежности</a></li>
            </ul>
            <ul className='mainLinks'>
                <li><a href=".">О компании</a></li>
                <li><a href=".">Контакты</a></li>
            </ul>
        </div>
    )
}
