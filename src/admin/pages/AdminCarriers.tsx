import { Shield } from "lucide-react";
import type { FC } from "react";
import { useAdminData } from "../../data/AdminDataContext.js";


const AdminCarriers: FC = () => {
  const { data, getCarrierList, toggleCarrierVisibility } = useAdminData();
  const carrierList = getCarrierList();

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Gestão de Seguradoras Parceiras</h1>
      <p className="mb-6 text-gray-600">Defina quais logotipos de seguradoras serão exibidos na seção "Nossas Seguradoras Parceiras" do site.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carrierList.map((carrier) => {
          const isVisible = data.carrierVisibility[carrier.name] || false; 

          return (
            <div 
              key={carrier.id} 
              className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-md transition duration-200 hover:bg-gray-100"
            >
              <span className="font-medium text-gray-700 flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-800" /> 
                <span className="text-lg">{carrier.name}</span>
              </span>
              
              <button
                onClick={() => toggleCarrierVisibility(carrier.name, !isVisible)}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-200 
                  ${isVisible 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
              >
                {isVisible ? 'Visível' : 'Oculto'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminCarriers;