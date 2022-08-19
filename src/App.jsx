import './App.scss';
import Header from "./Components/Header/Header";
import Main from "./Screens/Main/Main";
import Footer from "./Components/Footer/Footer";
import Catalog from "./Screens/Catalog/Catalog";

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
