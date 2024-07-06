//login
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
//teacher
import Teacher from "../pages/Teacher/Teacher";
import AddTeacher from "../pages/Teacher/AddTeacher";
import UpdateTeacher from "../pages/Teacher/UpdateInforTeacher";

const routes = [
    {path: '/login', page: Login,layout: LoginLayout},
    //teacher
    {path: '/teachers', page: Teacher},
    {path: '/addteacher', page: AddTeacher},
    {path: '/updateteacher/:id', page: UpdateTeacher},

    
]

export default routes;