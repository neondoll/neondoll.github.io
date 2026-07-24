import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import "./i18n";
import "./index.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Index element (#root) not found in HTML");
}

createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
