
import { Info, Send } from 'lucide-react'; 
import { type FC, useState, useEffect } from 'react';
import type { Product, ProductSegment } from '../../types/index.js';
import { CORRETORA_INFO, generateWhatsappLink } from '../../utils/whatsappLinkGenerator.js';

const ROTATION_INTERVAL_MS = 10000; 

const ProductSegmentCard: FC<ProductSegment> = ({ title, products }) => {
  
  if (!products || products.length === 0) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-red-500 text-center grow">
            <h3 className="text-xl font-bold text-red-700">{title}</h3>
            <p className="text-gray-500 mt-2">Nenhum produto disponível neste segmento para exibição.</p>
        </div>
    );
  }
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const currentProduct = products[currentIndex] as Product;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [products.length]); 

  
  const mensagemContratar = `Olá, equipe ${CORRETORA_INFO.nome}, gostaria de contratar o produto ${currentProduct.name}.`;
  const linkContratar = generateWhatsappLink(CORRETORA_INFO.telefone, mensagemContratar);

  const mensagemEspecialista = `Olá, equipe ${CORRETORA_INFO.nome}, gostaria de saber mais sobre o produto ${currentProduct.name}.`;
  const linkEspecialista = generateWhatsappLink(CORRETORA_INFO.telefone, mensagemEspecialista);

  const mensagemCotacao = `Olá, equipe ${CORRETORA_INFO.nome}, gostaria de fazer uma cotação para o produto ${currentProduct.name}.`;
  const linkCotacao = generateWhatsappLink(CORRETORA_INFO.telefone, mensagemCotacao);

  const [showMore, setShowMore] = useState(false);
  
  const Icon = currentProduct.icon; 

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-800 flex flex-col h-full transition duration-500">
      
      <h3 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-100">{title}</h3>

      <div className="grow min-h-[150px] transition-opacity duration-500 ease-in-out">
        <div className="flex items-center space-x-3 mb-3">
          <Icon className="w-8 h-8 text-orange-500" />
          <h4 className="text-lg font-semibold text-gray-800">{currentProduct.name}</h4>
        </div>
        <p className="text-gray-600 mb-4">{currentProduct.objective}</p>
      </div>

      <div className="flex flex-col space-y-3 mt-auto pt-4 border-t border-gray-100">
        
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center justify-center space-x-2 w-full text-blue-800 bg-blue-50 hover:bg-blue-100 font-medium py-2 rounded-lg transition-colors"
        >
          <Info className="w-5 h-5" />
          <span>Saber Mais {showMore ? '(-)' : '(+)'}</span>
        </button>

        {showMore && (
          <div className="mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-700 mb-3">
                **Informações Adicionais:** {currentProduct.objective} <br/> 
                Fale agora com nosso especialista para tirar dúvidas e conhecer as condições exclusivas!
            </p>
            <a 
                href={linkEspecialista}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition-colors text-sm mt-2"
            >
                <Send className="w-4 h-4" />
                <span>Falar com um Especialista</span>
            </a>
          </div>
        )}

        <a 
          href={linkContratar}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded-lg transition-colors"
        >
          Contratar
        </a>

        <a 
          href={linkCotacao}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center w-full text-gray-700 bg-gray-200 hover:bg-gray-300 font-bold py-2 rounded-lg transition-colors"
        >
          Faça Sua Cotação
        </a>
        
      </div>
    </div>
  );
};

export default ProductSegmentCard;