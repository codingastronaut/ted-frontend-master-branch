import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "src/pages/auth/login";
import Register from "src/pages/auth/register";
import Forgotpassword from "src/pages/auth/forgotpassword";
import Emailconfirmation from "src/pages/auth/emailconfirmation";
import Resetpassword from "src/pages/auth/resetpassword";
import Changepassword from "src/pages/auth/changepassword";
import APP_URLS from "src/constants/APP_URLS";
import ThemeProvider from "src/providers/ThemeProvider";
import States from "src/pages/States&Attraction";
import UniversitiesPolytechnicsA_Z from "src/pages/UniversitiesPolytechnicsA_Z";
import studentAcom from "src/pages/studentAcom";
import Udergraduate from "src/pages/Udergraduate";
import NECPage from "src/pages/NEC";
import JAMPpage from "src/pages/JAMB";
import Howtoapply from "src/pages/Howtoapply";
import WAEC from "src/pages/waec";
import Home from "src/pages/Home";
import Dashboard from "src/pages/Dashboard";
import TuitionFee from "src/pages/TuitionFee";
import StudentPortal from "src/pages/Studentportal";
import StudentLoan from "src/pages/StudentLoan";
import Whentoapplypage from "src/pages/Whentoapply";
import Alevels from "src/pages/Alevels";
import Courses from "src/pages/Courses";
// import "datatables/media/js/jquery.dataTables";
import "jquery/dist/jquery";
import "feather-icons/dist/feather";
import "antd/dist/antd.css";
import UniInner from "src/pages/UniversityInnerpage/UniversityInnerpage";
import CoursesInner from "src/pages/CoursesInnerpage/CoursesInnerpage";
import PayStack from "src/pages/PaymentPayStack/PayStack";
import Scholarship from "src/pages/Scholarships";
import QualificationTypes from "src/pages/QualificationTypes";
import Coursesearch from "src/pages/Coursessearch/Coursessearch";
import AdminDashboard from "src/pages/Admin_Pages/AdminDashboard";
import AdminCourses from "src/pages/Admin_Pages/AdminCourses";
import AdminCoursesForm from "src/pages/Admin_Pages/AdminCoursesForm";
// import PayStack from './pages/PaymentPayStack/PayStack';
import AdminUniversity from "src/pages/Admin_Pages/AdminUniversity";
import AdminUniversityForm from "src/pages/Admin_Pages/AdminUniversityForm";
import AdminFinance from "src/pages/Admin_Pages/AdminFinance";
import AdminFinanceForm from "src/pages/Admin_Pages/AdminFinanceForm";
import AdminUser from "src/pages/Admin_Pages/AdminUser";
import AntdTable from "src/pages/Admin_Pages/antdTable";
import AdminUserForm from "src/pages/Admin_Pages/AdminUserForm";
import AdminRoles from "src/pages/Admin_Pages/AdminRoles";
import AdminRolesForm from "src/pages/Admin_Pages/AdminRolesForm";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

export const PrivateRoute = ({
  component: Component,
  children,
  roles = ["admin", "user"],
  ...rest
}) => {
  const currentUser = useSelector((state) => state.auth.user);
  if (!currentUser) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" />;
  }

  //check if route is restricted by role
  if (roles && roles.indexOf(currentUser.role) === -1) {
    // role not authorised so redirect to home page
    return <Navigate to="/home" />;
  }
  console.log("render");
  // authorised so return component
  return children;
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="*" element={` --------- 404 PAGE NOT FOUND ---------`} />
          <Route exact path={APP_URLS.MAIN} element={<Home />} />
          <Route path={APP_URLS.AUTH.LOGIN} element={<Login />} />
          <Route path={APP_URLS.AUTH.REGISTER} element={<Register />} />
          <Route
            path={APP_URLS.AUTH.FORGOT_PASSWORD}
            element={<Forgotpassword />}
          />

          <Route
            path={APP_URLS.AUTH.EMAIL_CONFIRMATION}
            element={<Emailconfirmation />}
          />
          <Route
            path={APP_URLS.AUTH.RESET_PASSWORD}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Resetpassword />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.AUTH.CHANGE_PASSWORD}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Changepassword />
              </PrivateRoute>
            }
          />
          <Route path={APP_URLS.HOME} element={<Home />} />
          <Route
            path={APP_URLS.QUALIFICATION_TYPES}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <QualificationTypes />
              </PrivateRoute>
            }
          />
          <Route path={APP_URLS.UNDERGRADUATE} element={<Udergraduate />} />
          <Route
            path={APP_URLS.UNIINNER}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <UniInner />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITUNIINNER}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <UniInner />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.COURSESINNER}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <CoursesInner />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITCOURSESINNER}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <CoursesInner />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.PAYSTACK}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <PayStack />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.HOW_TO_APPLY}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Howtoapply />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.WHEN_TO_APPLY}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Whentoapplypage />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.TUITION_FEE}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <TuitionFee />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.STUDENT_LOAN}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <StudentLoan />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.STUDENT_ACCOMMODATIONS}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <studentAcom />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.A_LEVELS}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Alevels />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.WAEC}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <WAEC />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.NEC}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <NECPage />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.JAMB}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <JAMPpage />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.STATES_ATTRACTIONS}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <States />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.UNIVERSITIES_POLYTECHNICS}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <UniversitiesPolytechnicsA_Z />
              </PrivateRoute>
            }
          />

          <Route
            path={APP_URLS.DASHBOARD}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.STUDENT_PORTAL}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <StudentPortal />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.COURSES}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Courses />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.SCHOLARSHIP}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Scholarship />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.COURSES_SEARCH}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Coursesearch />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITCOURSES_SEARCH}
            element={
              <PrivateRoute roles={["user", "admin"]}>
                <Coursesearch />
              </PrivateRoute>
            }
          />

          {/* admin Dashboard pages */}
          <Route
            path={APP_URLS.ADMINDASHBOARD}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route path={APP_URLS.ANTDTABLE} element={<AntdTable />} />
          {/* admin Courses pages */}
          <Route
            path={APP_URLS.ADMINCOURSES}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminCourses />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.ADMINCOURSESFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminCoursesForm />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITADMINCOURSESFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminCoursesForm />
              </PrivateRoute>
            }
          />
          {/* admin university pages */}
          <Route
            path={APP_URLS.ADMINUNIVERSITY}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminUniversity />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.ADMINUNIVERSITYFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminUniversityForm />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITADMINUNIVERSITYFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminUniversityForm />
              </PrivateRoute>
            }
          />
          {/* admin finance pages */}
          <Route
            path={APP_URLS.ADMINFINANCE}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminFinance />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.ADMINFINANCEYFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminFinanceForm />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITADMINFINANCEFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminFinanceForm />
              </PrivateRoute>
            }
          />
          {/* admin user pages */}
          <Route
            path={APP_URLS.ADMINUSER}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminUser />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.ADMINUSERFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminUserForm />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITADMINUSERFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminUserForm />
              </PrivateRoute>
            }
          />
          {/* admin roles pages */}
          <Route
            path={APP_URLS.ADMINROLES}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminRoles />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.ADMINROLESFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminRolesForm />
              </PrivateRoute>
            }
          />
          <Route
            path={APP_URLS.EDITADMINROLESFORM}
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminRolesForm />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
