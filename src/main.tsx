import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./pages/routes";

import 'dotenv/config';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={AppRoutes} />
  </StrictMode>,
);
