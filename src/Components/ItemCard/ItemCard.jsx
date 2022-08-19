import './ItemCard.scss';
import { Component } from "react";


class ItemCard extends Component {
    render() {

        const {
            img,
            title,
            price,
            status,
          } = this.props;

        return (
            <div className="item-card">
                <div className="item-img">
                    <a href=".">
                        <img alt="itemKnife" src={img}></img>
                    </a>
                    <div className="plus">
                        <img alt="itemKnife" src='./assets/icons/plus.svg'></img>
                        <img alt="itemKnife" className="basket" src='./assets/icons/cart.svg'></img>
                    </div>
                </div>
                <div className="item-text">
                    <a alt="itemKnife" href=".">{title}</a>
                    <div className="item-price">
                        <p>{price}</p>
                        <p className="new-product">{status}</p>
                    </div>
                </div>
            </div>
        )
    }
}

ItemCard.defaultProps = {
    img: './assets/img/knifeCatalog.png',
    title: 'Складной нож SQ01-B',
    price: '850$',
  };

export default ItemCard;