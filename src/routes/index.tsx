import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import Login from "../pages/login";
import SalesConversation from "../pages/conversion";
import Layout from "../shared/layouts";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Login />} />,
    <Route path="app" element={<Layout />}>
      <Route path="conversation" element={<SalesConversation />} />
    </Route>,
  ]),
);

export default AppRoutes;
