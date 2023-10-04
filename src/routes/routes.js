import Home from "../pages/home/Home";
import Users from "../pages/users/Users";
import NewUser from "../pages/users/newUser/NewUser";
import Products from "../pages/products/Products";
import NotFound from "../pages/404/NotFound404";

let routes = [
    {path: '/', element: <Home /> },
    {path: '/users', element: <Users /> },
    {path: '/new/user', element: <NewUser /> },
    {path: '/products', element: <Products /> },
    {path: '*', element: <NotFound /> },
]

export default routes