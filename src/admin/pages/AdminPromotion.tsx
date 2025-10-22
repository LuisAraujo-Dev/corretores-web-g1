import type { FC } from 'react';

const AdminPromotion: FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Promoção de Destaque</h1>
      <p>Defina o produto que aparecerá no Card de Oferta da página inicial (Hero).</p>
    </div>
  );
};

export default AdminPromotion;