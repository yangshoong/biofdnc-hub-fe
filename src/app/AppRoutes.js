import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useAuthStore from '../features/auth/model/authStore';
import LoginPage from '../pages/login/LoginLayout';
import Dashboard from '../pages/dashboard/DashboardLayout';
import ProductList from '../features/product-management/ui/ProductList';
import IngredientList from '../features/ingredient-inquiry/ui/IngredientList';
import IngredientDetailPage from '../pages/ingredient-detail/IngredientDetailPage';
import IngredientEditPage from '../features/ingredient-edit/ui/IngredientEditPage';

function AppRoutes() {
  const { isLoggedIn, login } = useAuthStore();

  return (
    <Routes>
      <Route path="/login" element={
        isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={login} />
      } />
      <Route path="/dashboard" element={
        isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
      } />
      <Route path="/products" element={<ProductList />} />
      <Route path="/ingredients" element={<IngredientList />} />
      <Route path="/ingredient-detail/:inciName?" element={
        isLoggedIn ? <IngredientDetailPage /> : <Navigate to="/login" />
      } />
      <Route path="/ingredient-edit/:id" element={
        isLoggedIn ? <IngredientEditPage /> : <Navigate to="/login" />
      } />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;