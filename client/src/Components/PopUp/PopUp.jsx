import './PopUp.scss';

import React from 'react'

export default function PopUp({ children, popUp, setPopUp }) {

    const handlePopUp = () => {
        setPopUp(false);
    }

    return (
        <div className={popUp ? 'Popup active' : 'Popup'}>
            <div onClick={handlePopUp} className="Popup__close">
                <span></span>
                <span></span>
            </div>
            <h3>{children}</h3>
        </div>
    )
}
