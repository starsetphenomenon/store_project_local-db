import './ItemCard.scss';
import { useContext } from 'react';
import { DataContext } from '../../App';

function ItemCard({ data: item, className }) {

    const { data, cart, setCart } = useContext(DataContext);

    const addToCart = (e) => {
        let result = cart;
        let elemId = e.currentTarget.id;
        let item = data.find(item => item.id === elemId);
        if (result.some(el => el.id === elemId)) { // if Cart elem already exist, then just ++amount of elem ~~~~~~~~
            let amountItem = result.find(e => e.id === elemId);
            amountItem.amount++;
        } else {
            item = { ...item, amount: 1, };
            result.push(item);
            setCart(result);
        }
        setCart([...cart]);
    }

    return (
        <div className={className}>
            <div className="item-img" >
                <div className='img-wrapper'>
                    <img alt="itemKnife" src={item.img.title}></img>
                </div>
                <div id={item.id} onClick={addToCart} className="plus">
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