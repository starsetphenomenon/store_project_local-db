/* eslint-disable array-callback-return */
import './App.scss';
import Header from "./Components/Header/Header";
import Main from "./Screens/Main/Main";
import Footer from "./Components/Footer/Footer";
import Catalog from "./Screens/Catalog/Catalog";
import Menu from './Components/Menu/Menu';
import Cart from './Screens/Cart/Cart';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, } from "react-router-dom";

export const DataContext = createContext();

function App() {

  const [data, setData] = useState([]);
  const [menuLinks, setMenuLinks] = useState([]);
  const [menuSubLinks, setMenuSubLinks] = useState([]);
  const [mainSlides, setMainSlides] = useState([]);

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
      <DataContext.Provider value={{ data, mainSlides }}>
        <Header menuVisibility={handleMenuVisibility} />
        <Menu menuLinks={menuLinks} menuSubLinks={menuSubLinks} menuStatus={menu} menuVisibility={handleMenuVisibility} />
        <Routes>
          <Route path="/" index element={<Main />} />
          <Route path="catalog" element={<Catalog filter1={menuLinks} />}>
            <Route path=":itemID" element={<Catalog />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Routes>
        <Footer />
      </DataContext.Provider>
    </div >
  );
}

export default App;
