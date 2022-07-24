import React from 'react';
import theme from './lib/theme/theme';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import pageRoutes from './routes/pages';
import ProtectedRoute from './routes/protectedRoute';
import {Layout} from './components';
import {GlobalStyle} from './lib/theme/theme';
import {useAuth} from './hooks';
function App() {
  const {isLoggedIn} = useAuth();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {pageRoutes.map(({isPublic, path, element}) => {
            const isAuthenticated = (!isPublic && isLoggedIn) || isPublic;
            return (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Layout>{element}</Layout>
                  </ProtectedRoute>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
