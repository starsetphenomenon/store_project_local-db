/* eslint-disable react-hooks/exhaustive-deps */
import './ItemCard.scss';
import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../App';
import { useNavigate, Link } from 'react-router-dom';

function ItemCard({ data: item, className, itemId }) {

    let navigate = useNavigate();
    const { data, addToCart, checkStorage, setCart, getStorage, cart } = useContext(DataContext);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (checkStorage('cart')) { // put cartStorage to CART if it's not empty ~~~~~~~~~~
            setCart(getStorage('cart'))
        }
        if (item.counter !== undefined) { // take element counter if exist ~~~~~~~~~~~~~   
            let cartItem = cart.find(elem => +elem.id === +item.id);
            if (cartItem === undefined) {
                item.counter = 0;
            }
            setCounter(item.counter)
        }
        let storageItem = [];
        if (elemInCart(item, cart, storageItem)) { // take counter from storage if exist ~~~~~~~~~~~~                    
            setCounter(storageItem[0].amount)
            item.counter = storageItem[0].amount;
        }
    }, [item])

    const elemInCart = (elem, db, resultItem) => {
        let item = db.find(item => +item.id === +elem.id);
        if (!item) {
            return
        }
        return resultItem.push(item);
    }

    const handleAddToCart = (e) => {
        addToCart(e.currentTarget, data, counter, setCounter);
    }

    const goToItemPage = (e) => {
        navigate(`items/itemID_#${e.currentTarget.getAttribute('id')}`);
    }

    return (
        <div className={className}>
            <div className="item-img" >
                <div id={itemId} onClick={goToItemPage} className='img-wrapper'>
                    <img alt="itemKnife" src={item.img.title}></img>
                </div>
                <div id={item.id} onClick={handleAddToCart} className="plus">
                    {item.counter ? <div className="counter">{item.counter}</div> : null}
                    <img alt="itemKnife" src='./assets/icons/plus.svg'></img>
                    <img alt="itemKnife" className="basket" src='./assets/icons/cart.svg'></img>
                </div>
            </div>
            <div className="item-text">
                <Link to={`/itemID_#${item.id}`} alt="itemKnife" href=".">{item.title}</Link>
                <div className="item-price">
                    <p>{item.price} UAH</p>
                    <p className="new-product">{item.status}</p>
                </div>
            </div>
        </div>
    )
}

ItemCard.defaultProps = {
    img: './assets/img/knifeCatalog.png',
    title: 'Складной нож SQ01-B',
    price: '850$',
    className: 'item-card'
};

export default ItemCard;