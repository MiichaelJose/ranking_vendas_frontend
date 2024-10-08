import { createBrowserRouter } from 'react-router-dom';
import Login from '../login';

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    }
])

export default AppRoutes;