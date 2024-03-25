import React from "react";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Portfolio from "./components/Portfolio.js";
import Resume from "./components/Resume.js";
import Footer from "./components/Footer.js";
import { Helmet } from "react-helmet";
import "./App.css";

// React Routing Imports 
import { Routes, Route } from 'react-router-dom';

function App() {
  // const [currentTab, handleTabChange] = useState("About");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  // const renderTab = () => {
  //   if (currentTab === "About") {
  //     return <About />;
  //   }
  //   if (currentTab === "Contact") {
  //     return <Contact />;
  //   }
  //   if (currentTab === "Portfolio") {
  //     return <Portfolio />;
  //   }
  //   if (currentTab === "Resume") {
  //     return <Resume />;
  //   }
  //   return <About />;
  // };

  return (
    <>
      <Helmet>
        <title>Madison Vercher's Portfolio</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;