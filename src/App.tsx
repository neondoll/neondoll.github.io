import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { ThemeProvider } from "./components/theme-provider";
import { TooltipProvider } from "./components/ui/tooltip";
import Paths from "./paths";
import { Root } from "./routes/Root";

const App: FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="neondoll-theme">
      <TooltipProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={Paths.ROOT} element={<Root />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default App;
