import './App.scss';
import Header from "./Components/Header/Header";
import Main from "./Screens/Main/Main";
import Footer from "./Components/Footer/Footer";
import Catalog from "./Screens/Catalog/Catalog";
import Menu from './Components/Menu/Menu';
import Cart from './Screens/Cart/Cart';
import { useState } from 'react';

function App() {


  const cartItems = [{
    id: 0,
    imgSrc: './assets/img/knifeCatalog.png',
    imgAlt: '.',
    name: 'Нож классного качества Knight light C653',
    amount: 3,
    price: 750,
  },
  {
    id: 1,
    imgSrc: './assets/img/knifeCatalog.png',
    imgAlt: '.',
    name: 'Нож классного качества Knight light C653',
    amount: 5,
    price: 1250,
  }]

  const [menu, setMenu] = useState(false);

  const handleMenuVisibility = () => {
    setMenu(prev => !prev);
  }

  return (
    <div className="App">
      <Menu menuStatus={menu} menuVisibility={handleMenuVisibility} />
      <Header menuVisibility={handleMenuVisibility} />
      <Cart data={cartItems} />
      <Main />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
