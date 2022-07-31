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
    <div className="font-poppins">
      <BrowserRouter>
        <Header />
          <Routes>
              <Route path="/" element={
                <>
                  <Home />
                  <Portfolio />
                  <About />
                  <Contact />
                </>
                } />
              <Route path='/blog' element={<Blog />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
