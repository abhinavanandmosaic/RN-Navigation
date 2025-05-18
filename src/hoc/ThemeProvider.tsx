import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { useThemeStore, ThemeState } from '../store';

interface ThemeContextType {
  colors: {
    primary: string;
    background: string;
    text: string;
    border: string;
  };
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => {
  const systemColorScheme = useColorScheme();

  // Use selector pattern to avoid unnecessary updates
  const mode = useThemeStore((state: ThemeState) => state.mode);
  const primaryColor = useThemeStore((state: ThemeState) => state.colors?.primary);

  const isDark = mode === 'dark' || (mode === 'system' && systemColorScheme === 'dark');

  const theme = useMemo(() => ({
    colors: {
      primary: primaryColor || '#228B22',
      background: isDark ? '#121212' : '#FFFFFF',
      text: isDark ? '#FFFFFF' : '#000000',
      border: isDark ? '#333333' : '#E0E0E0',
    },
    isDark,
  }), [isDark, primaryColor]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
});
