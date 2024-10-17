import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Login from "../login";
import Layout from "../layout";
import SalesConversation from "../salesConversation";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Login />} />,
    <Route path="app" element={<Layout />}>
      <Route path="conversation" element={<SalesConversation />} />
    </Route>,
  ]),
);

export default AppRoutes;
