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
import TestPage from './Screens/TestPage/TestPage.jsx';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route } from "react-router-dom";

export const DataContext = createContext();

function App() {

  // Local Storage ~~~~~~~~~~~~~~~~~~~~~~

  const getStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }

  const setStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  const checkStorage = (key) => {
    if (JSON.parse(localStorage.getItem(key)) === null) {
      return false;
    }
    return true;
  }

  // Local Storage ~~~~~~~~~~~~~~~~~~~~~~

  const [data, setData] = useState([]);
  const [menuLinks, setMenuLinks] = useState([]);
  const [menuSubLinks, setMenuSubLinks] = useState([]);
  const [mainSlides, setMainSlides] = useState([]);
  const [filterLink, setFilterLink] = useState('');
  const [searchingItems, setSearchingItems] = useState('');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
  }, []);

  useEffect(() => { // Get only unique links/topics from data ~~~
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
    let slider = data.filter(el => el.status === 'New')
    slider.forEach(el => { // main slider slides
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
      <DataContext.Provider value={{ data, setData, mainSlides, filterLink, cart, setCart, getStorage, setStorage, checkStorage }}>
        <Header setSearchingItems={setSearchingItems} menuVisibility={handleMenuVisibility} />
        <Menu menuLinks={menuLinks} setFilterLink={setFilterLink} menuSubLinks={menuSubLinks} menuStatus={menu} menuVisibility={handleMenuVisibility} />
        <ScrollToTop>
          <Routes>
            <Route path="/" index element={<Main />} />
            <Route path="/catalog" element={<Catalog filter1={menuLinks} />} />
            <Route path="/:id" element={<TestPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search setSearchingItems={setSearchingItems} searchingItems={searchingItems} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
        <Footer setFilterLink={setFilterLink} />
      </DataContext.Provider>
    </div >
  );
}

export default App;
