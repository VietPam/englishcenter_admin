//login
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
//course
import Course from "../pages/Courses/Course";
import AddCourse from "../pages/Courses/AddCourese";
import UpdateInforCourse from "../pages/Courses/UpdateInforCourse";
//teacher
import Teacher from "../pages/Teacher/Teacher";
import AddTeacher from "../pages/Teacher/AddTeacher";
import UpdateTeacher from "../pages/Teacher/UpdateInforTeacher";
//class
import Classes from "../pages/Class/Classes";
//student
import Student from "../pages/Student/Student";
import AddStudent from "../pages/Student/AddStudent";
import UpdateInforStudent from "../pages/Student/UpdateInforStudent";
//homepage
import HomePage from "../pages/HomePage/HomePage";

const routes = [
    {path: '/', page: HomePage},

    {path: '/login', page: Login,layout: LoginLayout},
    //course
    {path: '/course', page: Course,},
    {path: '/addcourse', page: AddCourse},
    {path: '/updatecourse/:id', page: UpdateInforCourse},

    //teacher
    {path: '/teachers', page: Teacher},
    {path: '/addteacher', page: AddTeacher},
    {path: '/updateteacher/:id', page: UpdateTeacher},

    //class
    {path: '/classes/:id', page: Classes},

    //student
    {path: '/student', page: Student,},
    {path: '/addstudent', page: AddStudent},
    {path: '/updatestudent/:id', page: UpdateInforStudent},
]

export default routes;