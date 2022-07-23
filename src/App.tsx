import React from "react";
import theme from "./lib/theme/theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import pageRoutes from "./routes/pages";
import ProtectedRoute from "./routes/protectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
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
                      {r.element}
                    </ProtectedRoute>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
