import './ItemCard.scss';

function ItemCard({ data, className }) {
    return (
        <div className={className}>
            <div className="item-img" >
                <a href=".">
                    <img alt="itemKnife" src={data.img.title}></img>
                </a>
                <div className="plus">
                    <img alt="itemKnife" src='./assets/icons/plus.svg'></img>
                    <img alt="itemKnife" className="basket" src='./assets/icons/cart.svg'></img>
                </div>
            </div>
            <div className="item-text">
                <a alt="itemKnife" href=".">{data.title}</a>
                <div className="item-price">
                    <p>{data.price}</p>
                    <p className="new-product">{data.status}</p>
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