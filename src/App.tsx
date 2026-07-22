import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout";
import { useStoreDispatch } from "./hooks";
import Paths from "./paths";
import { Root } from "./routes/Root";
import { getTheme } from "./slices/theme";

const App: FC = () => {
  const dispatch = useStoreDispatch();

  window.addEventListener("load", () => {
    dispatch(getTheme());
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    dispatch(getTheme());
  });

  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={Paths.ROOT} element={<Root />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
