/* eslint-disable react-hooks/exhaustive-deps */
import './PopUp.scss';
import { useEffect } from 'react';
import React from 'react'

export default function PopUp({ children, popUp, setPopUp }) {

    const handlePopUp = () => {
        setPopUp(false);
    }

    let timer;
    const timerOn = () => {
        return timer = setTimeout(handlePopUp, 5000);
    }

    useEffect(() => {
        clearTimeout(timer);
        if (popUp) { // run countdown to close timer if PopUp true ~~~~~~~~~~~~
            timerOn();
        }
    }, [popUp])

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
