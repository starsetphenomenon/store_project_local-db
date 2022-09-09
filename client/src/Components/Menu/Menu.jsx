import { React } from 'react'
import "./Menu.scss";
import { NavLink } from 'react-router-dom';

export default function Menu({ menuVisibility, menuStatus, menuLinks, menuSubLinks, setFilterLink }) {

    const handleLink = (e) => {
        menuVisibility();
        setFilterLink(e.target.name.toLowerCase())
    }

    const handleSubMenu = (e) => {
        if (e.currentTarget.classList.contains('activeSub')) {
            e.currentTarget.classList.remove('activeSub')
        } else {
            let links = Array.from(e.currentTarget.parentNode.children).filter(el => el !== e.target);
            links.forEach(el => el.classList.remove('activeSub'));
            if (e.target.classList.contains('subName')) {
                e.currentTarget.classList.toggle('activeSub')
            }
            if (e.target.tagName === 'A') {
                e.currentTarget.classList.remove('activeSub')
            }
        }
    }

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
                    <li onClick={menuVisibility}><NavLink to="/catalog">Каталог</NavLink></li>
                    {menuLinks.map((link, i) => {
                        return <li onClick={handleSubMenu} className='' key={i}><div className="subName">{link}</div>
                            <div className='lunges'>
                                {menuSubLinks.map((subLink, ind) => {
                                    if (subLink[link] !== undefined) {
                                        return <NavLink to={`catalog`} name={subLink[link]} onClick={handleLink} key={ind} href="." >{subLink[link]}</NavLink>
                                    }
                                    return null
                                })}
                            </div>
                        </li>
                    })}
                </ul>
                <ul className='mainLinks'>
                    <li><NavLink to="about">О компании</NavLink></li>
                    <li><NavLink to="Contacts" href=".">Контакты</NavLink></li>
                </ul>
            </div>
        </div >
    )
}