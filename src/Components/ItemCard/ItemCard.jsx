import './ItemCard.scss';
import { useContext, useState } from 'react';
import { DataContext } from '../../App';

function ItemCard({ data: item, className }) {

    const { data, setData, cart, setCart, setStorage } = useContext(DataContext);
    const [counter, setCounter] = useState(0);

    const addToCart = (e) => {
        setCounter(prev => prev + 1);
        let result = cart;
        let elemId = e.currentTarget.id;
        let item = data.find(item => item.id === elemId);
        if (result.some(el => el.id === elemId)) { // if Cart elem already exist, then just ++amount of elem ~~~~~~~~
            let amountItem = result.find(e => e.id === elemId);
            amountItem.amount++;
            amountItem.counter++;
        } else {
            item = { ...item, amount: 1, counter: 1 };
            result.push(item);
            setCart(result);
            setStorage('cart', result)
        }
        let newData = data.map(el => { // set counter of item to DATA
            if (+el.id === +e.currentTarget.id) {
                return el = {
                    ...el,
                    counter: counter + 1,
                }
            } else {
                return el;
            }
        })
        setData(newData);
        setCart([...cart]);
    }

    return (
        <div className={className}>
            <div className="item-img" >
                <div className='img-wrapper'>
                    <img alt="itemKnife" src={item.img.title}></img>
                </div>
                <div id={item.id} onClick={addToCart} className="plus">
                    {item.counter ? <div className="counter">{item.counter}</div> : null}
                    <img alt="itemKnife" src='./assets/icons/plus.svg'></img>
                    <img alt="itemKnife" className="basket" src='./assets/icons/cart.svg'></img>
                </div>
            </div>
            <div className="item-text">
                <a alt="itemKnife" href=".">{item.title}</a>
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