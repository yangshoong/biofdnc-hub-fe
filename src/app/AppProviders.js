import React from 'react';
import { ThemeProvider } from '../shared/ui/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

// AppProviders 컴포넌트: 애플리케이션의 전역 설정을 제공하는 컴포넌트
function AppProviders({ children }) {
  return (
    // ThemeProvider: 애플리케이션 전체에 일관된 테마를 적용하는 컴포넌트
    <ThemeProvider>
      {/* CssBaseline: MUI의 기본 CSS 리셋을 제공하여 일관된 스타일링 기반을 만드는 컴포넌트 */}
      <CssBaseline />
      {/* children: AppProviders로 감싸진 하위 컴포넌트들을 렌더링 */}
      {children}
    </ThemeProvider>
  );
}

// AppProviders 컴포넌트를 기본 내보내기로 설정
export default AppProviders;