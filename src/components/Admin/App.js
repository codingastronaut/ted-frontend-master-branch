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

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route exact path={APP_URLS.MAIN} element={<Login />} />
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
            element={<Resetpassword />}
          />
          <Route
            path={APP_URLS.AUTH.CHANGE_PASSWORD}
            element={<Changepassword />}
          />
          <Route path={APP_URLS.HOME} element={<Home />} />
          <Route
            path={APP_URLS.QUALIFICATION_TYPES}
            element={<QualificationTypes />}
          />
          <Route path={APP_URLS.UNDERGRADUATE} element={<Udergraduate />} />
          <Route path={APP_URLS.UNIINNER} element={<UniInner />} />
          <Route path={APP_URLS.PAYSTACK} element={<PayStack />} />
          <Route path={APP_URLS.ADMINDASHBOARD} element={<AdminDashboard />} />
          <Route path={APP_URLS.ADMINCOURSES} element={<AdminCourses />} />

          <Route
            path={APP_URLS.ADMINCOURSESFORM}
            element={<AdminCoursesForm />}
          />
          <Route
            path={APP_URLS.EDITADMINCOURSESFORM}
            element={<AdminCoursesForm />}
          />
          <Route
            path={APP_URLS.ADMINUNIVERSITY}
            element={<AdminUniversity />}
          />

          <Route
            path={APP_URLS.ADMINUNIVERSITYFORM}
            element={<AdminUniversityForm />}
          />
          <Route
            path={APP_URLS.EDITADMINUNIVERSITYFORM}
            element={<AdminUniversityForm />}
          />
          <Route path={APP_URLS.ADMINFINANCE} element={<AdminFinance />} />

          <Route
            path={APP_URLS.ADMINFINANCEYFORM}
            element={<AdminFinanceForm />}
          />
          <Route
            path={APP_URLS.EDITADMINFINANCEFORM}
            element={<AdminFinanceForm />}
          />
          <Route path={APP_URLS.HOW_TO_APPLY} element={<Howtoapply />} />
          <Route path={APP_URLS.WHEN_TO_APPLY} element={<Whentoapplypage />} />
          <Route path={APP_URLS.TUITION_FEE} element={<TuitionFee />} />
          <Route path={APP_URLS.STUDENT_LOAN} element={<StudentLoan />} />
          <Route
            path={APP_URLS.STUDENT_ACCOMMODATIONS}
            element={<studentAcom />}
          />
          <Route path={APP_URLS.A_LEVELS} element={<Alevels />} />
          <Route path={APP_URLS.WAEC} element={<WAEC />} />
          <Route path={APP_URLS.NEC} element={<NECPage />} />
          <Route path={APP_URLS.JAMB} element={<JAMPpage />} />
          <Route path={APP_URLS.STATES_ATTRACTIONS} element={<States />} />
          <Route
            path={APP_URLS.UNIVERSITIES_POLYTECHNICS}
            element={<UniversitiesPolytechnicsA_Z />}
          />

          <Route path={APP_URLS.DASHBOARD} element={<Dashboard />} />
          <Route path={APP_URLS.STUDENT_PORTAL} element={<StudentPortal />} />
          <Route path={APP_URLS.COURSES} element={<Courses />} />
          <Route path={APP_URLS.SCHOLARSHIP} element={<Scholarship />} />
          <Route path={APP_URLS.COURSES_SEARCH} element={<Coursesearch />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
