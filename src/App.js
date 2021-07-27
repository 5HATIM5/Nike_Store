import "./App.css";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <MainPage />

      <Footer/>
    </div>
  );
};

export default App;
