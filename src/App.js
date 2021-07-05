import "./App.css";
import MainPage from "./Components/MainPage";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="app">
      {/* This is Navigation Bar */}
      <Navbar />
      {/* This is Home Screen */}
      <MainPage />
    </div>
  );
};

export default App;
