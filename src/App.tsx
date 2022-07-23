import React from 'react';
import theme from './lib/theme/theme';
import {ThemeProvider} from 'styled-components';
import {RecoilRoot} from 'recoil';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import pageRoutes from './routes/pages';
import ProtectedRoute from './routes/protectedRoute';
import {Layout} from './components';
import {GlobalStyle} from './lib/theme/theme';
import {useRecoilValue} from 'recoil';
import {authState} from './states';

function App() {
  const isLoggedIn = useRecoilValue(authState);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          {pageRoutes.map((r) => {
            const isAuthenticated = (!r.isPublic && isLoggedIn) || r.isPublic;
            return (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Layout>{r.element}</Layout>
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
