import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./pages/routes";
import GlobalStyles from "./global-styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={AppRoutes} />
  </StrictMode>
);
