import LoginLayout from "../layouts/LoginLayout";
import Teacher from "../pages/Teacher/Teacher";
import Login from "../pages/Login/Login";
const routes = [
    {path: '/login', page: Login,layout: LoginLayout},
    {path: '/teachers', page: Teacher},
]

export default routes;