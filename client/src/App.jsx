/* eslint-disable array-callback-return */
import './App.scss';
import Header from "./Components/Header/Header";
import Main from "./Screens/Main/Main";
import Footer from "./Components/Footer/Footer";
import Catalog from "./Screens/Catalog/Catalog";
import Menu from './Components/Menu/Menu';
import Cart from './Screens/Cart/Cart';
import NotFound from './Screens/NotFound/NotFound.jsx';
import Search from './Screens/Search/Search.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import ItemPage from './Screens/ItemPage/ItemPage.jsx';

export const DataContext = createContext();

function App() {

  // ADD TO CART FUNCTION ~~~~~~~~~~~~~~~~~~~~

  const addToCart = (target, data, counter, setCounter) => {
    setCounter(prev => prev + 1);
    let elemId = target.id;
    let item = data.find(item => +item.id === +elemId);
    if (cart !== null && cart.some(el => +el.id === +elemId)) { // if Cart elem already exist, then just ++amount of elem ~~~~~~~~
      let amountItem = cart.find(e => +e.id === +elemId);
      amountItem.amount++;
      amountItem.counter++;
    } else {
      item = { ...item, amount: 1, counter: 1 };
      cart.push(item);
      setCart(cart);
      setStorage('cart', cart)
    }
    let newData = data.map(el => { // set counter of item to DATA ~~~~~~~~~~
      if (+el.id === +target.id) {
        el = {
          ...el,
          counter: counter + 1,
        }
        return el;
      } else {
        return el;
      }
    })
    setData(newData);
    setStorage('cart', cart)
    setCart([...cart]); // force rerender for counter ~~~~~~~~~
  }

  // ADD TO CART FUNCTION ~~~~~~~~~~~~~~~~~~~~

  // Local Storage ~~~~~~~~~~~~~~~~~~~~~~

  const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }

  const setStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  // Local Storage ~~~~~~~~~~~~~~~~~~~~~~

  const [data, setData] = useState([]);
  const [menuLinks, setMenuLinks] = useState([]);
  const [menuSubLinks, setMenuSubLinks] = useState([]);
  const [mainSlides, setMainSlides] = useState([]);
  const [filterLink, setFilterLink] = useState('');
  const [searchingItems, setSearchingItems] = useState('');
  const [cart, setCart] = useState([]);
  const LAST_NEW_ELEMENT = 6;  // amout of status NEW elements

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((result) => { // sort data by DATE and set last N elements status to NEW ~~~~~~~~~~~~
        result.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate))
        let mainSlider = []; // get Main Slides from data ~~~~~~~~~~
        for (let i = 0; i < LAST_NEW_ELEMENT; i++) { // set last N elemnt status to NEW ~~~~~~~~~~~~
          result[i].status = "Новинка"
          mainSlider.push({
            price: result[i].price,
            title: result[i].title,
            collection: result[i].collection,
            imgSrc: result[i].img.mainSlider,
            imgAlt: result[i].img.alt,
            id: result[i].id,
          })
        }
        setMainSlides(mainSlider) // set Main Slides ~~~~~~~~~~~
        let dataWithRating = [];
        result.map(el => { // get each item AVG rating ~~~~~~~~
          let ratings = el.reviews.map(e => e.rating)
          let avgRating = Math.round(ratings.reduce((prev, curr, _, arr) => prev += curr / arr.length, 0))
          return dataWithRating.push({
            ...el,
            itemRating: avgRating
          })
        })
        setData(dataWithRating);
      })
    if (getStorage('cart') !== null) {
      setCart(getStorage('cart')) // get Cart from storage on LOAD ~~~~~~~~~~~
    }
  }, []);

  useEffect(() => { // Get only unique links/topics from data and get items for Main Slider ~~~
    if (!data.length) {
      return
    }
    let links = [...new Set(data.map(item => item.type))]; // Main links
    let subLinks = []; // subLinks
    let sub = [...new Map(data.map(item => // subLinks
      [item.topic, item])).values()];
    sub.forEach(el => {
      subLinks.push({
        [el.type]: el.topic,
      })
    })
    setMenuLinks(links);
    setMenuSubLinks(subLinks);
  }, [data]);


  // Menu visibility ~~~~~~~~~~~~~~~~~~~~
  const [menu, setMenu] = useState(false);
  const handleMenuVisibility = () => {
    setMenu(prev => !prev);
  }

  return (
    <div className="App">
      <DataContext.Provider value={{
        addToCart, data, setData, mainSlides, filterLink, setFilterLink,
        cart, setCart, getStorage, setStorage, setSearchingItems, handleMenuVisibility
      }}>
        <Header />
        <Menu menuLinks={menuLinks} menuSubLinks={menuSubLinks} menuStatus={menu} />
        <ScrollToTop>
          <Routes>
            <Route path="/" index element={<Main />} />
            <Route path="catalog" element={<Catalog menuLinksFilter={menuLinks} />} ></Route>
            <Route path="catalog/items/:id" element={<ItemPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="search" element={<Search searchingItems={searchingItems} />} />
            <Route path="items/:id" element={<ItemPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
        <Footer />
      </DataContext.Provider>
    </div >
  );
}

export default App;
