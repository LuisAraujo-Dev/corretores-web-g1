import type { FC } from "react";
import Sandbar from "./components/Sandbar/index.js";
import AboutUs from "./sections/AboutUs/index.js";
import Carriers from "./sections/Carriers/index.js";
import Hero from "./sections/Hero/index.js";
import Products from "./sections/Products/index.js";
import Contact from "./sections/Contact/index.js";


const App: FC = () => {
  return (
    <div className="min-h-screen font-sans">
      
      <Sandbar /> 

      <main>
        <Hero id="inicio" /> 
        <AboutUs id="sobre-nos" /> 
        <Products id="produtos" /> 
        
        <Carriers id="seguradoras" /> 

        <Contact id="contato" /> 
      </main>

    </div>
  );
};

export default App;