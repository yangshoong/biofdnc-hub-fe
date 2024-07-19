import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';
import NavBar from '../widgets/nav-bar/NavBar';
import './App.css';

// App 컴포넌트: 애플리케이션의 최상위 컴포넌트
function App() {
  return (
    // AppProviders: 전역 상태 및 테마 등을 제공하는 컴포넌트
    <AppProviders>
      {/* Router: 라우팅 기능을 제공하는 컴포넌트 */}
      <Router>
        {/* NavBar: 네비게이션 바 컴포넌트 */}
        <NavBar />
        {/* AppRoutes: 애플리케이션의 라우트를 정의하는 컴포넌트 */}
        <AppRoutes />
      </Router>
    </AppProviders>
  );
}

// App 컴포넌트를 기본 내보내기로 설정
export default App;