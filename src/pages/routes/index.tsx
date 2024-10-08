import { createBrowserRouter } from 'react-router-dom';
import Home from '../home';

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }
])

export default AppRoutes;