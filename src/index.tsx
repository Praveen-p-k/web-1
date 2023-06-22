import { createRoot } from "react-dom/client";
import App from "./pages/routes/index";
import { store } from "./redux/config/store";
import { Provider } from "react-redux";

import "./index.css";

const root = createRoot(document.getElementById("my-root") as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
