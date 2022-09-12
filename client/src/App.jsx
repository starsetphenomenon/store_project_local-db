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
  const [searchResult, setSearchResult] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/dataBase")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
    if (getStorage('cart') !== null) {
      setCart(getStorage('cart')) // get Cart from storage if page REFRESHED ~~~~~~~~~~~
    }
  }, []);

  useEffect(() => { // Get only unique links/topics from data ~~~
    if (!data.length) {
      return
    }
    let links = [...new Set(data.map(item => item.type))]; // Main links
    let subLinks = []; // subLinks
    let slides = []; // main slider slides;
    let sub = [...new Map(data.map(item => // subLinks
      [item.topic, item])).values()];
    sub.forEach(el => {
      subLinks.push({
        [el.type]: el.topic,
      })
    })
    let slide = data.filter(el => el.status === 'Новинка')
    slide.forEach(el => { // main slider slides
      slides.push({
        price: el.price,
        title: el.title,
        collection: el.collection,
        imgSrc: el.img.mainSlider,
        imgAlt: el.img.alt,
        id: el.id,
      })
    })
    setMainSlides(slides);
    setMenuLinks(links);
    setMenuSubLinks(subLinks);
  }, [data]);

  const [menu, setMenu] = useState(false);

  const handleMenuVisibility = () => {
    setMenu(prev => !prev);
  }

  return (

    <div className="App">
      <DataContext.Provider value={{ addToCart, data, setData, mainSlides, filterLink, cart, setCart, getStorage, setStorage }}>
        <Header searchResult={searchResult} setSearchingItems={setSearchingItems} menuVisibility={handleMenuVisibility} />
        <Menu menuLinks={menuLinks} setFilterLink={setFilterLink} menuSubLinks={menuSubLinks} menuStatus={menu} menuVisibility={handleMenuVisibility} />
        <ScrollToTop>
          <Routes>
            <Route path="/" index element={<Main setFilterLink={setFilterLink} />} />
            <Route path="catalog" element={<Catalog filter1={menuLinks} />} ></Route>
            <Route path="catalog/items/:id" element={<ItemPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="search" element={<Search setSearchResult={setSearchResult} setSearchingItems={setSearchingItems} searchingItems={searchingItems} />} />
            <Route path="items/:id" element={<ItemPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
        <Footer setFilterLink={setFilterLink} />
      </DataContext.Provider>
    </div >
  );
}

export default App;
