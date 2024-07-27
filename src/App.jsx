import "./App.css";

import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/Navbar";

import LocomotiveScroll from "locomotive-scroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import Footer from "./components/Footer";
import ServerLess from "./Pages/ServerLess";
import Hosting from "./Pages/Hosting";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <BrowserRouter>
        <MouseFollower />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/serverless" element={<ServerLess />} />
          <Route path="/hosting" element={<Hosting />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
