import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./index.scss";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app-container");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
