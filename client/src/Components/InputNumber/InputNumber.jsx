import './InputNumber.scss';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { DataContext } from '../../App';

export default function InputNumber({ children, currentElem }) {

    const { cart, setCart, setStorage } = useContext(DataContext);

    const [amount, setAmount] = useState('');

    const setNewAmount = (id, operator) => {
        let elem = cart.find(el => +el.id === +id);
        if (operator === '+') {
            elem.amount++;
        } else {
            if (elem.amount > 1) {
                elem.amount--;
            } else {
                elem.amount = 1;
            }
        }
        console.log(cart)
        setCart([...cart]);  // force rerender cart to refresh each item amount ~~~~~~~~~~
        setStorage('cart', [...cart])  // save each item amount from cart into localStorage ~~~~~~~~~~
    }

    const handlePlus = () => {
        setAmount(+amount + 1);
        setNewAmount(currentElem, '+')
    }

    const handleMinus = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
        else {
            setAmount(+"1");
        }
        setNewAmount(currentElem, '-')
    }

    useEffect(() => {
        setAmount(children);
    }, [children]);

    const handleInputValue = e => {
        e.target.value = { children }
    }

    return (
        <div className="amount">
            <input value={amount} onChange={handleInputValue} type="text" />
            <button className="arrow-up" onClick={handlePlus} type='button'>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7072 12.2933L10.7073 6.29325C10.3163 5.90225 9.68425 5.90225 9.29325 6.29325L3.29325 12.2933C2.90225 12.6842 2.90225 13.3163 3.29325 13.7073C3.68425 14.0983 4.31625 14.0983 4.70725 13.7073L10.0002 8.41425L15.2933 13.7073C15.6842 14.0983 16.3162 14.0983 16.7072 13.7073C16.9022 13.5122 17.0002 13.2562 17.0002 13.0002C17.0002 12.7442 16.9022 12.4883 16.7072 12.2933Z" fill="#828282" />
                </svg>
            </button>
            <button className="arrow-down" onClick={handleMinus} type='button'>
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.7072 7.70725L10.7073 13.7073C10.3163 14.0983 9.68425 14.0983 9.29325 13.7073L3.29325 7.70725C2.90225 7.31625 2.90225 6.68425 3.29325 6.29325C3.68425 5.90225 4.31625 5.90225 4.70725 6.29325L10.0002 11.5862L15.2933 6.29325C15.6842 5.90225 16.3162 5.90225 16.7072 6.29325C16.9022 6.48825 17.0002 6.74425 17.0002 7.00025C17.0002 7.25625 16.9022 7.51225 16.7072 7.70725Z" fill="#828282" />
                </svg>
            </button>
        </div>
    )
}