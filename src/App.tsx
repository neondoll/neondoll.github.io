import Layout from "./components/Layout";
import Paths from "./paths";
import Root from "./routes/Root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getLanguage } from "./slices/language";
import { getTheme } from "./slices/theme";
import { useStoreDispatch } from "./hooks";
import "./scss/App.scss";

function App() {
  const dispatch = useStoreDispatch();

  window.addEventListener("load", () => {
    dispatch(getLanguage());
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
}

export default App;
