import { createBrowserRouter } from 'react-router-dom';
import Login from '../login';
import Home from '../home';

const AppRoutes = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
])

export default AppRoutes;