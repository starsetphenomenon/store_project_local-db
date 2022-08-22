import './App.scss';
import Header from "./Components/Header/Header";
import Main from "./Screens/Main/Main";
import Footer from "./Components/Footer/Footer";
import Catalog from "./Screens/Catalog/Catalog";
import Menu from './Components/Menu/Menu';
import { useState } from 'react';

function App() {

  const [menu, setMenu] = useState(false);

  const handleMenuVisibility = () => {
    setMenu(prev => !prev);
  }

  return (
    <div className="App">
      {menu && <Menu menuVisibility={handleMenuVisibility} />}
      <Header menuVisibility={handleMenuVisibility} />
      <Main />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
