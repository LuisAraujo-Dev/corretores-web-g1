import type { FC } from "react";
import ProductSegmentCard from "../../components/ProductSegmentCard/index.js";
import { productsData } from "../../data/productsData.js";
import type { SectionProps } from "../../types/index.js";
import { useAdminData } from "../../data/AdminDataContext.js";


const Products: FC<SectionProps> = ({ id }) => {
  const { getVisibleProducts } = useAdminData();
  const visibleProductSegments = getVisibleProducts();

  if (visibleProductSegments.length === 0) {
      return null;
  }

  return (
    <section id={id} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-blue-800">
            Nossas Soluções de Proteção e Planejamento
          </h2>
          <p className="text-gray-600 mt-2">Encontre o produto perfeito para proteger o que é mais importante para você e sua família.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {visibleProductSegments.map((segment) => (
            <ProductSegmentCard 
              key={segment.title} 
              title={segment.title}
              products={segment.products}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Products;