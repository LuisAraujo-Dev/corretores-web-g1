import type { FC } from "react";

const AdminDashboard: FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-800">Dashboard</h1>
      <p>Bem-vindo ao painel de controle do Corretor Digital Pro.</p>
    </div>
  );
};

export default AdminDashboard;