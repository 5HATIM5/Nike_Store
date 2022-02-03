import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/shop" element={[<Navbar />, <Footer />]} />
          <Route exact path="/login" element={[<Login />]} />
          <Route exact path="/" element={[<Navbar />, <MainPage />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
