import type { FC } from "react";
import { useAdminData } from "../../data/AdminDataContext.js";
import type { SectionProps } from "../../types/index.js";

 

const Carriers: FC<SectionProps> = ({ id }) => {
  const { getVisibleCarriers } = useAdminData();
  const visibleCarriers = getVisibleCarriers(); 

  if (visibleCarriers.length === 0) {
      return null;
  }

  return (
    <section id={id} className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {visibleCarriers.map((carrier) => (
            <div 
              key={carrier.id} 
              className="w-full h-20 flex items-center justify-center bg-gray-50 p-3 rounded-lg opacity-70 hover:opacity-100 transition duration-300 grayscale hover:grayscale-0"
            >
              {carrier.logoImg !== "PLACEHOLDER" ? (
                  <img 
                    src={carrier.logoImg} 
                    alt={carrier.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
              ) : (
                  <span className="text-xl font-bold text-gray-500">{carrier.logoUrl}</span>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Carriers;