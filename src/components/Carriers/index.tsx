import type { FC } from "react";
import { carriersData } from "../../data/carriersData.js";
import type { SectionProps } from "../../types/index.js";


const Carriers: FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-800">
            Nossas Seguradoras Parceiras
          </h2>
          <p className="text-gray-600 mt-2">Trabalhamos apenas com as maiores e mais confiáveis empresas do mercado para garantir sua total proteção.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {carriersData.map((carrier) => (
            <div 
              key={carrier.id} 
              className="w-full h-20 flex items-center justify-center bg-gray-50 p-3 rounded-lg opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            >
              <span className="text-2xl font-bold text-gray-500">{carrier.logoUrl}</span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Carriers;