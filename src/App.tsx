import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout.tsx";
import { ThemeProvider } from "./components/theme-provider";
import Paths from "./paths";
import { Root } from "./routes/Root";

const App: FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="neondoll-theme">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={Paths.ROOT} element={<Root />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
