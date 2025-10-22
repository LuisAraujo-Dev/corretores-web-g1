import type { FC } from "react";
import { useAdminData } from "../../data/AdminDataContext.js";


const AdminProducts: FC = () => {
  const { data, getProductList, toggleProductVisibility } = useAdminData();
  const productSegments = getProductList(); 

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Gestão de Visibilidade de Produtos</h1>
      <p className="mb-6 text-gray-600">Use os botões abaixo para definir quais produtos serão exibidos na rotação da página inicial do site (Seção Produtos).</p>

      {productSegments.map((segment) => (
        <div key={segment.title} className="mb-8 p-4 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">{segment.title}</h2>
          
          <div className="space-y-3">
            {segment.products.map((product) => {
              const isVisible = data.productVisibility[product.name] || false; 
              
              return (
                <div key={product.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                  <span className="font-medium text-gray-700 flex items-center space-x-2">
                    <product.icon className="w-5 h-5 text-blue-800" />
                    <span>{product.name}</span>
                  </span>
                  
                  <button
                    onClick={() => toggleProductVisibility(product.name, !isVisible)}
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
      ))}
    </div>
  );
};

export default AdminProducts;