import "./App.css";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app">
      {/* This is Navigation Bar */}
      <Navbar />
      {/* This is Home Screen */}
      <MainPage />
      {/* This are Adds */}
      <Banner/>
      {/* This is footer */}
      <Footer/>
    </div>
  );
};

export default App;
