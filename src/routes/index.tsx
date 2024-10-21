import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import SalesConversation from "@/pages/conversion";
import Login from "@/pages/login";
import Layout from "@/shared/layouts";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Login />} />,
    <Route path="app" element={<Layout />}>
      <Route path="conversation" element={<SalesConversation />} />
    </Route>,
  ]),
);

export default AppRoutes;
