import type { FC } from "react";
import Sandbar from "./components/Sandbar/index.js";
import AboutUs from "./sections/AboutUs/index.js";
import Hero from "./sections/Hero/index.js";

const App: FC = () => {
  return (
    <div className="min-h-screen font-sans">
      
      <Sandbar /> 

      <main>
        <Hero id="inicio" /> 

        <AboutUs id="sobre-nos" /> 

        <div id="produtos" className="h-screen bg-gray-100 p-8 text-center text-gray-500">
            <h2 className="text-2xl mt-40">Próxima Etapa: Produtos (Rotação)</h2>
            <p>Seção Sobre Nós implementada. Navegue pelo Sandbar.</p>
        </div>
      </main>

    </div>
  );
};

export default App;