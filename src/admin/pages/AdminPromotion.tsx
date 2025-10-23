import { type FC, useState, useEffect } from "react";
import { useAdminData } from "../../data/AdminDataContext.js";
import { productsData } from "../../data/productsData.js";


const AdminPromotion: FC = () => {
  const { data, updatePromotion } = useAdminData();
  
  const allProducts = productsData.flatMap(segment => 
    segment.products.map(p => ({ 
      name: p.name, 
      icon: p.icon,
      objective: p.objective 
    }))
  );
  
  const [selectedProduct, setSelectedProduct] = useState(data.activePromotion.produtoNome);
  const [infoText, setInfoText] = useState(data.activePromotion.info);
  
  useEffect(() => {
    setSelectedProduct(data.activePromotion.produtoNome);
    setInfoText(data.activePromotion.info);
  }, [data.activePromotion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const productDetail = allProducts.find(p => p.name === selectedProduct);

    if (productDetail) {
      updatePromotion({
        produtoNome: productDetail.name,
        info: infoText,
        IconComponent: productDetail.icon,
      });
      alert('Promoção de destaque atualizada com sucesso!');
    } else {
      alert('Erro: Produto selecionado inválido.');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Definir Promoção de Destaque</h1>
      <p className="mb-6 text-gray-600">Escolha o produto que será promovido na seção inicial (Hero) do site.</p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="product-select">
            Selecione o Produto
          </label>
          <select 
            id="product-select"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            required
          >
            {allProducts.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="info-text">
            Frase de Impacto/Benefícios (Hero Card)
          </label>
          <textarea 
            id="info-text"
            value={infoText}
            onChange={(e) => setInfoText(e.target.value)}
            rows={3}
            placeholder="Ex: Cobertura total contra roubo, furto e colisão com assistência 24h."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            required
          />
          <small className="text-gray-500">Texto curto que aparecerá no card de oferta. Mantenha sucinto.</small>
        </div>
        
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-semibold text-blue-800 mb-2">Pré-visualização do Título:</p>
            <p className="text-xl font-bold text-gray-800">{selectedProduct}</p>
            <p className="mt-2 text-gray-600 italic">"{infoText}"</p>
        </div>


        <button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Salvar Promoção
        </button>
      </form>
    </div>
  );
};

export default AdminPromotion;