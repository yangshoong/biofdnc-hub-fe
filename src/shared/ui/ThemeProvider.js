import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export { theme };