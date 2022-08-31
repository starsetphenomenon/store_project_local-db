import { React } from 'react'
import "./Menu.scss";
import { NavLink } from 'react-router-dom';

export default function Menu({ menuVisibility, menuStatus, menuLinks }) {

    return (
        <div className={menuStatus ? 'Menu active' : 'Menu'}>
            <div onClick={menuVisibility} className='Menu__wrapper'></div>
            <div className="Menu__content">
                <div className="close" onClick={menuVisibility}>
                    <span></span>
                    <span></span>
                </div>
                <ul className='filterLinks'>                  
                    <li onClick={menuVisibility}><NavLink to="/">Главная</NavLink></li>
                    {menuLinks.map(link => {
                        return <li key={link.id} onClick={menuVisibility}><NavLink to="catalog">{link.topic}</NavLink>
                        <div className='lunges'>
                            <a href=".">Нож</a>
                            <a href=".">Острилка</a>
                            <a href=".">Аксессуары</a>
                        </div>
                    </li>
                    })}
                </ul>
                <ul className='mainLinks'>
                    <li><a href=".">О компании</a></li>
                    <li><a href=".">Контакты</a></li>
                </ul>
            </div>
        </div>
    )
}