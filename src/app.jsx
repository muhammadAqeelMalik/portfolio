import React from "react";
import Header from "./component/header/Header";
import Nav from "./component/nav/Navbar";
import About from "./component/about/about";
import Experience from "./component/experience/Experience";
import Service from "./component/service/Service";
import PortFolio from "./component/portfolio/PortFolio";
import Testinomial from "./component/testinomial/Testinomial";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <PortFolio />
      <Testinomial />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
