import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/blog",
        element: <Blog></Blog>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    }
])

export default router;
