import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import "./scss/index.scss";
import "./scss/App.scss";
import "./index.css";
import "./i18n";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element (#root) not found in HTML");
}

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
