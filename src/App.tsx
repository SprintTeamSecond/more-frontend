import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {isLoggedInState} from './states/auth';
import {Layout} from './components';
import theme, {GlobalStyle} from './lib/theme/theme';
import pageRoutes from './routes/pages';
import ProtectedRoute from './routes/protectedRoute';
import useLocalStorage from './hooks/useLocalStorage';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [localStorageIsLoggedIn] = useLocalStorage('isLoggedIn', isLoggedIn);

  React.useEffect(() => {
    setIsLoggedIn(localStorageIsLoggedIn);
  });

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
