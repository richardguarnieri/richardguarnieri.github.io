import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
            <div className="font-poppins">
              <Header />
                <Home />
                <Portfolio />
                <About />
                <Contact />
              <Footer />    
            </div>
          } />
          <Route path='/blog' element={
            <div className="font-poppins">
              <Header />
                <Blog />
              <Footer />    
            </div>
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
