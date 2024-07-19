import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import useAuthStore from '../features/auth/model/authStore';
import LoginPage from '../pages/login/LoginLayout';
import Dashboard from '../pages/dashboard/DashboardLayout';
import ProductSearchPage from '../pages/product-search/ProductSearchPage';
import IngredientList from '../features/ingredient-inquiry/ui/IngredientList';
import IngredientDetailPage from '../pages/ingredient-detail/IngredientDetailPage';
import IngredientEditPage from '../features/ingredient-edit/ui/IngredientEditPage';
import ISO9001Page from '../pages/iso9001/ISO9001Page';

// AppRoutes 컴포넌트: 애플리케이션의 라우팅을 정의하는 컴포넌트
function AppRoutes() {
  // useAuthStore 훅을 사용하여 인증 상태와 로그인 함수를 가져옴
  const { isLoggedIn, login } = useAuthStore();

  return (
    <Routes>
      {/* 로그인 페이지 라우트 */}
      <Route path="/login" element={
        // 이미 로그인한 경우 대시보드로 리다이렉트, 그렇지 않으면 로그인 페이지 표시
        isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage onLogin={login} />
      } />
      {/* 대시보드 페이지 라우트 */}
      <Route path="/dashboard" element={
        // 로그인한 경우 대시보드 표시, 그렇지 않으면 로그인 페이지로 리다이렉트
        isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
      } />
      {/* 제품 목록 페이지 라우트 */}
      <Route path="/products" element={<ProductSearchPage />} />
      {/* 성분 목록 페이지 라우트 */}
      <Route path="/ingredients" element={<IngredientList />} />
      {/* 성분 상세 페이지 라우트 (선택적 inciName 파라미터 포함) */}
      <Route path="/ingredient-detail/:inciName?" element={
        // 로그인한 경우 성분 상세 페이지 표시, 그렇지 않으면 로그인 페이지로 리다이렉트
        isLoggedIn ? <IngredientDetailPage /> : <Navigate to="/login" />
      } />
      {/* 성분 편집 페이지 라우트 (id 파라미터 필요) */}
      <Route path="/ingredient-edit/:id" element={
        // 로그인한 경우 성분 편집 페이지 표시, 그렇지 않으면 로그인 페이지로 리다이렉트
        isLoggedIn ? <IngredientEditPage /> : <Navigate to="/login" />
      } />
      {/* ISO9001 페이지 라우트 */}
      <Route path="/iso9001" element={<ISO9001Page />} />
      {/* ISO9001 섹션 페이지 라우트 (section 파라미터 포함) */}
      <Route path="/iso9001/:section" element={<ISO9001Page />} />
      {/* 기본 경로 라우트 - 로그인 페이지로 리다이렉트 */}
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

// AppRoutes 컴포넌트를 기본 내보내기로 설정
export default AppRoutes;