import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import type { FC } from 'react';
import { AuthProvider } from './admin/auth/AuthContext.js';
import AdminLayout from './admin/components/AdminLayout/index.js';
import ProtectedRoute from './admin/components/ProtectedRoute/index.js';

import AdminLogin from './admin/pages/AdminLogin.js';
import AdminDashboard from './admin/pages/AdminDashboard.js';
import AdminProducts from './admin/pages/AdminProducts.js';
import AdminPromotion from './admin/pages/AdminPromotion.js';
import { AdminDataProvider } from './data/AdminDataContext.js';
import App from './App.js';

const Router: FC = () => {
  return (
    <AuthProvider>
      <AdminDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} /> 

            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route 
              path="/admin/" 
              element={<ProtectedRoute children={<AdminLayout />} />}
            >
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="promotion" element={<AdminPromotion />} />
            </Route>

            <Route path="*" element={<h1 className='text-3xl text-center p-20'>404 | Página não encontrada.</h1>} />
            
          </Routes>
        </BrowserRouter>
      </AdminDataProvider>
    </AuthProvider>
  );
};

export default Router;