import { NavLink, Outlet } from 'react-router-dom';
import { Settings, Tag, Users } from 'lucide-react';
import type { FC } from 'react';

const AdminLayout: FC = () => {
  const adminName = "Corretor Master";
  
  const navLinks = [
    { to: 'dashboard', icon: Users, name: 'Dashboard' },
    { to: 'products', icon: Settings, name: 'Gestão de Produtos' },
    { to: 'promotion', icon: Tag, name: 'Promoção de Destaque' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-8 border-b border-gray-700 pb-3">Admin Panel</h1>
        
        <nav className="grow space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={`/admin/${link.to}`}
              className={({ isActive }) => 
                `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 
                 ${isActive ? 'bg-blue-700 text-white' : 'hover:bg-gray-700 text-gray-300'}`
              }
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>
        
        <button 
          onClick={() => alert("Simulação de Logout")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition-colors mt-4"
        >
          Sair
        </button>
      </aside>
      
      <div className="grow flex flex-col overflow-auto">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Módulo Administrativo</h2>
          <span className="text-gray-600">Bem-vindo, {adminName}</span>
        </header>
        
        <main className="p-6 grow overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;