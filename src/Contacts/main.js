import './style.css'
import { ReactDOM } from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import home from './home';
import Contact from './Contacts';
const router = createBrowserRouter([
    {
            path:"/",
            element:<home/>
    },
    {
        path:'contact',
        element:<Contact/>
    }
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)