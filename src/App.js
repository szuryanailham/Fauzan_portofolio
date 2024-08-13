import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Category from "./components/Category";
import Carousel from "./components/Carousel";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <title>Fauzan - Photografy</title>
      </Helmet>
      <Navbar />
      <div className="pt-[100px] flex flex-col">
        <Hero />
        <About />
        <Category />
        <Carousel />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default App;
