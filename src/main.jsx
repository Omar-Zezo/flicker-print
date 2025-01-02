import { createRoot } from "react-dom/client";
import "./index.css";
import "./imageProductGallery.css";
import "react-toastify/dist/ReactToastify.css";
import "react-international-phone/style.css";
import App from "./App.jsx";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import store from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <HelmetProvider>
    <App />
  </HelmetProvider>
  </Provider>
);
