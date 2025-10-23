import type { FC } from "react";
import { useAdminData } from "../../data/AdminDataContext.js";
import type { SectionProps } from "../../types/index.js";
import CarriersBackground from '../../images/carriers.jpg';

const Carriers: FC<SectionProps> = ({ id }) => {
  const { getVisibleCarriers } = useAdminData();
  const visibleCarriers = getVisibleCarriers(); 

  if (visibleCarriers.length === 0) {
      return null;
  }

  return (
    <section id={id} className="relative py-20 lg:py-24 bg-gray-900 text-white overflow-hidden">
        
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${CarriersBackground})` }}
        >
            <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            
            <div className="mb-12">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
                    Nossas Seguradoras Parceiras
                </h2>
                <p className="text-gray-300 mt-2">Trabalhamos com as líderes do mercado para sua tranquilidade.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {visibleCarriers.map((carrier) => (
                <div 
                    key={carrier.id} 
                    className="w-full h-16 flex items-center justify-center p-2 
                               transition duration-300 hover:scale-105"
                >
                    {carrier.logoImg !== "PLACEHOLDER" ? (
                        <img 
                            src={carrier.logoImg} 
                            alt={carrier.name} 
                            className="max-h-full max-w-full object-contain filter brightness-200 opacity-90" 
                        />
                    ) : (
                        <span className="text-2xl font-bold text-white opacity-90">{carrier.logoUrl}</span>
                    )}
                </div>
            ))}
            </div>
            
        </div>
    </section>
  );
};

export default Carriers;