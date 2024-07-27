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
          <Route path="/hyperspace/" element={<HomePage />} />
          <Route path="/hyperspace/pricing" element={<Pricing />} />
          <Route path="/hyperspace/serverless" element={<ServerLess />} />
          <Route path="/hyperspace/hosting" element={<Hosting />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
