import type { FC } from "react";

const AdminProducts: FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Gestão de Produtos</h1>
      <p>Configuração da visibilidade dos produtos e do conteúdo rotativo.</p>
    </div>
  );
};

export default AdminProducts;