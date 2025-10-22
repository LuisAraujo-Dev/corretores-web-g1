import { type FC, useState, useEffect } from "react";
import { useAdminData } from "../../data/AdminDataContext.js";


const AdminPromotion: FC = () => {
  const { data, updatePromotion, getProductList } = useAdminData();
  const allProducts = getProductList().flatMap(segment => 
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
      alert('Produto selecionado inválido.');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Definir Promoção de Destaque</h1>
      <p className="mb-6 text-gray-600">Escolha o produto que será promovido na seção inicial (Hero) do site.</p>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Selecione o Produto</label>
          <select 
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          >
            {allProducts.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Frase de Impacto/Benefícios (Hero Card)</label>
          <textarea 
            value={infoText}
            onChange={(e) => setInfoText(e.target.value)}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <small className="text-gray-500">Texto curto que aparecerá no card de oferta.</small>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors"
        >
          Salvar Promoção
        </button>
      </form>
    </div>
  );
};

export default AdminPromotion;